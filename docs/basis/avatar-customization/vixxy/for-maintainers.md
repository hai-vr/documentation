# For maintainers

:::danger
This is technical documentation intended for developers who may maintain the application.

If you are just a user, you do not need to read any of this.
:::

## Scene objects

Properties are applied to the scene objects only when any of the following happens:
- The avatar is loaded for the first time through the `OnHVRAvatarReady` function.
- A value that the control depends on changes to a value that is different to the previous value,
  when clamped between the minimum and maximum value of that control.
- The control has a transition duration triggered by a change in value, and the new target value for that transition is not approximately reached yet.
- The `Actuate` function is called directly by external scripts.

The change in value is triggered by an event. We do not check every frame if any of the values have changed.

In general, this means the following:
- If no value changes and no transition is in progress, that control modifies no scene objects.
- If you have a thousand controls, but none of those controls change value, the control does not cost anything to run, 
  except for when the avatar loads for the first time.

## Material properties

If a control modifies a material property on a given Renderer, those changes are gathered by a single MaterialPropertyBlock shared by all
controls for that Renderer, which is then applied later.

----

## Networking

Messages are attempted to be sent every 0.1 seconds by default, but only addresses that have changed to a different value are part of the message.
If no address has changed, no message is sent.

The whole state is not sent, except when the avatar is loaded for the first time.

In general, this means the following:
- The networking cost is generally proportional to how many values have changed on that avatar, not how many controls there are on that avatar in total.
- If an avatar has a thousand controls, but none of them changes, then it has no networking cost, except for when the avatar loads for the first time.

The transition setting of a control has no impact on networking, it does not result in an increased amount of messages. The transition within a control is simulated independently on each users' computer,
it is not a progressive change in networked value.

### Category of addresses

We put networked addresses into two categories based on how often the value changes.
- There are networked addresses that are assumed to change value either rarely or rapidly once in a while; if the user presses a button, or actively interacts with UI to trigger effects on the avatar.
- There are addresses which value change rapidly and almost every frame; for instance, face tracking, or a heart rate sensor.

For the first category of addresses, the value is transmitted with high precision.

Addresses with rapidly changing values are transmitted differently by omitting the address and sending the values as a contiguous packet, with a loss of precision through the use of quantization.

This category may change at runtime. For instance, some face tracking hardware supports tracking the nose or eyelashes, but some other face tracking hardware doesn't.

It makes sense for an address to be considered rapidly changing when the hardware supports the nose and never changing when the hardware does not support the nose.

### Optimization for boolean-like floats

The float values of `0.0` and `1.0` are always treated specially because they are the most common values, either as resting values or as boolean-like float values.
The value of `0.0` and `1.0` are never encoded into messages in order to save space.

When those values are present as part of the message, they are put into special buckets, and only the address for that value is sent.

There are four different packet types depending on the variety of values:
- `Zeroes`, if all values to be sent by the message are `0.0`
- `Ones`, if all values to be sent by the message are `1.0`
- `ZeroesAndOnes`, if all values to be sent by the message are either `0.0` or `1.0` (we specify the number of addresses that are zeroes).
- `Mixed` if at least one value of the message is neither `0.0` nor `1.0`. The values of `0.0` and `1.0` are still only transmitted using only
  their addresses (we specify the number of addresses that are zeroes).

This approach reduces the cost of messages related to toggles.

### Optimization for rapidly changing values

*This section to be written later.*

### Interpolation

*This section to be written later.*

### Largest delta

When preparing a message, we do not send the current value for an address. Instead, we send any value that was set that has the largest delta since the last sent value.

For example, if those are the values that are set for a given address, with a new line representing the moment where we decide to send a message:

This is done for the following reasons:
- If the user presses a button, and that button press happens between networked messages, then that button press is still networked.
- If the user blinks, but that blink happens between networked messages, then that blink is still visible. This also goes for other short and subtle facial cues.

#### Example A

```text
(#1) 0
(#2) 0 0 0 1 1
(#3) 0 0 0 0
(#4) 0 0 0 1 0
(#5) 0 0 0 0 0
(#6) 0 0 0 0 0
(#7) 0 0 0
```

We send the following: 1, 5, 2, 5.

- (#1) **0**: → This is the first sent packet.
- (#2) **1**: `Abs(0 - 1) = 1` → This is the greatest absolute value.
- (#3) **0**: `Abs(1 - 0) = 0` → This is the greatest absolute value.
- (#4) **1**: `Abs(0 - 1) = 1` → Even though 0 is the last value, we sent the value of 1 because it is the value that is further away from the last sent value (the last sent value was 0).
- (#5) **0**: `Abs(1 - 0) = 0` → Even though only the value of 0 was set since the last message sent, we must send the value of 0 because it is different from the last sent value (the last sent value was 1).
- (#6) (**0**: `Abs(0 - 0) = 0`) → We don't send anything. In fact, we wouldn't even calculate the absolute value. Checks are only done if the value has changed or if we have sent a message for that address on the previous iteration while the newly sent value was not equal to the last value.
- (#7) (**0**: `Abs(0 - 0) = 0`) → We don't send anything.

#### Example B

```text
(#1) 1 
(#2) 1 2 3 4 5
(#3) 2 2 3 5 5
(#4) 5 5 5 5 5
(#5) 5 5 5 5
```

We send the following: 1, 5, 2, 5.

- (#1) **1**: → This is the first sent packet.
- (#2) **5**: `Abs(1 - 5) = 4` → This is the greatest absolute value.
- (#3) **2**: `Abs(5 - 2) = 3` → Even though 5 is the last value, we sent the value of 2 because it is the value that is further away from the last sent value (the last sent value was 5).
- (#4) **5**: `Abs(2 - 5) = 3` → Even though only the value of 5 was set since the last message sent, we must send the value of 5 because it is different from the last sent value (the last sent value was 2).
- (#5) (**5**: `Abs(5 - 5) = 0`) → We don't send anything. In fact, we wouldn't even calculate the absolute value. Checks are only done if the value has changed or if we have sent a message for that address on the previous iteration while the newly sent value was not equal to the last value.

