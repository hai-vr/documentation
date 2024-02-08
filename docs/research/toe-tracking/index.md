﻿# Multi-Toe Tracking

This page records my attempts to build a toe tracking device that supports multiple toes.

:::danger
This page is currently being written, and is a living document.
:::

<video controls width="816">
    <source src={require('./img/vr-socks-f.mp4').default}/>
</video>

## Design goals

Create and integrate some form of hardware-driven toe tracking on my avatar, with an emphasis on individual toe down-curls and toe splay,
and optionally big toe overlap (negative splay).

The toe tracking must allow for greater amount of toe poses rather than just the up-down curl of the group of toes.

The project is built out of pure personal amusement and curiosity; there are no community, personal self-expression, or business goals,
although it is a good match with [one of my ongoing software projects](/docs/products/toetra-rig-creator).

*This project was started mid-January 2024.*

### Prior art

Hardware-driven toe tracking has already been done before to various degrees.

Public displays of toe tracking include:

- down-curls where the sensor is attached to a sock (such as [https://twitter.com/logi9_/status/1550774401926598656](https://twitter.com/logi9_/status/1550774401926598656)),
- and up-curls where the sensor is attached to a shoe (such as [https://twitter.com/captaincatvr/status/1551303339601690626](https://twitter.com/captaincatvr/status/1551303339601690626)).

I am not aware of public displays of multi-toe tracking, but I'm sure considering the vast landscape of DIY hardware creators that it must have been done before.

### Materials in use

For this project, I've only used Flex sensors so far, and I'm using 3D printing with flexible filament (TPU 95A):
- Flex sensor (2.2 inch = 5.6 cm) [https://www.aliexpress.com/item/33006987477.html](https://www.aliexpress.com/item/33006987477.html)
- Sunlu TPU 95A [https://www.amazon.fr/dp/B07R7SCM5G](https://www.amazon.fr/dp/B07R7SCM5G)
- Mini Micro JST 2.0 PH Male Female Connector (2 pins = 2P) [https://www.aliexpress.com/item/4000091077742.html](https://www.aliexpress.com/item/4000091077742.html)
- Several 10K ohm resistor (not by conscious choice, it's the only ones I had in hand when I started)
- Electrical tape
- (Some PLA was needed for prototyping and printing clean bridges, but it is not part of the wearable prototype)

For the board, I'm currently using an AZ-Delivery ESP-32 Dev Kit C because that was the only thing I had in hand,
but I have some Tundra Tracker Developer Boards that will arrive in the future.

#### Other materials considered

Other materials have been suggested, and could be used in the future, such as:
- Magnets with Hall effect sensors (i.e. 49E linear hall effect sensor, [https://twitter.com/Ybalrid/status/1751409384431686041](https://twitter.com/Ybalrid/status/1751409384431686041) & [https://twitter.com/Ybalrid/status/1751409954248864097](https://twitter.com/Ybalrid/status/1751409954248864097)),
- Pressure/Touch sensors.

### Inspiration

The project partially draws inspiration from existing implementations of toe tracking, but it is original.

My design process is iterative:
- Print fake sensors using PLA,
- place them on the foot,
- print various attachments to hold these sensors using TPU,
- identify the issues with those attachments,
- try to improve on one aspect,
- and repeat.

### Constraints

I've bought pairs of socks specifically for this project since I need to track the movement on some individual toes.

Also, I really want to wash my socks, so as much as possible, the design should be detachable from the sock.
If some sewing could be involved, it must be reversible and washable in the washing machine.

In addition, I am not good at hardware, so I will limit my design to a reasonable minimum achievable by someone with a software background.
As in: I'm not going to make my own circuit boards, but I can solder a voltage divider.

### Simplification

Contrary to fingers, I don't have the dexterity to move each of my toes independently.

I can make use of this and only track some characteristics of the toes rather than all of them, as the movement of one toe can imply the movement of other toes.

## Attachment side

![result.jpg](img%2Fresult.jpg)

### Detecting splay

Flex sensors only bend in one direction, and it can only sense bends in one side (the striped side can results in a change in resistance when bending outwards, not inwards).

In order to detect little splay, I had several options:
- Bend the sensor by default in a rest pose, and make it un-bend when the toe is playing, or
- put the sensor on the side of the foot, or
- make the toe splay cause a mechanical part to move, amplifying it in a way that the flex sensor could be placed elsewhere on the toe to detect it, or
- bend the sensor by default in a rest pose, and couple the lateral movement of the big toe and the little toe splay together.

During one of the prototypes, I've put the sensor on the side of the foot, and it proved to be a sufficiently effective and simple position.

The shape of the flex sensor was extended using the TPU printing so that the toe could activate the splay sensor even when the little toe is pointing higher up, or lower down.

## Electronics side

I've had two separate electronics implementations:
- [ESP32 with Wi-Fi and OSC](esp32.md)
- [Tundra Tracker Developer board with SteamVR Input](tundra.md) and a separate OSC application

## Software side

## Interpretation of signals

Instead of directly mapping individual toes, I want to interpret the few sensor data together as indicators of various foot gestures that I'll mix together.

| 1st Down | 2nd Down | 5th Splay | Toe estimate | What happens?                                                                                                                                                                                                                                                                                                  |
|----------|----------|-----------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 🕯️      |          |           | ⭕⭕⭕⭕⭕        | The pose of the foot at rest on a flat surface has a residual signal on the Big toe, because the sensor is slightly curled at rest.                                                                                                                                                                            |
| ❄️       | ❔        | ❔         | 🔼🔼🔼🔼🔼   | If the residual signal on the Big toe becomes 0, this *could* indicate an up-curl of the foot.                                                                                                                                                                                                                 |
|          |          | 🔥        | ⭕⭕⭕⭕▶️       | The 5th toe is splayed.                                                                                                                                                                                                                                                                                        |
|          | 🔥       | 🔇        | ⭕🔽🔽🔽🔽    | When the 2nd toe is down, the 5th splay signal becomes irrelevant as the sensor becomes squished by the down-curl forces. Personally, I cannot splay my little toe when my 2nd toe is down, so there's no need to consider splaying and down-curling simultaneously anyways.                                   |
| 🔥       |          |           | ️⬇️⭕⭕⭕⭕      | Big toe is straight: Only the proximal joint is curled.                                                                                                                                                                                                                                                        |
| 🔥       |          | 🔥        | ◀️⭕⭕⭕▶️      | Big toe is straight, and the 5th toe is splayed. This can almost be considered a Big toe splay, as lateral control of the Big toe is difficult when the 5th toe is splayed.                                                                                                                                    |
| 🔥       | 🔥       | 🔇        | 🔽🔽🔽🔽🔽   | If the 2nd curls while the Big toe is curled, then the Big toe distal is curled.                                                                                                                                                                                                                               |
|          | 🔥🔥     | 🔇        | 🔼⏬⏬⏬⏬       | If the 2nd toe has a large down-curl force, all of the toes proximal joints are curled except for the Big toe. It's also very difficult to down-curl the 2nd toe without up-curling the Big toe.                                                                                                               |
| 🔥       | 🔥🔥❗    | 🔇        | ⏬⏬⏬⏬⏬        | All of the toes proximal joints are curled. (⚠️ Stateful pose)                                                                                                                                                                                                                                                 |
| 🔥❗      | 🔥🔥     | 🔇        | ▶️⏬⏬⏬⏬       | If the 2nd toe has a large down-curl force but the Big toe went from having no down-curl to having a normal down-curl, this could be interpreted as the Big toe being positioned over the 2nd toe (negative splay of the Big toe). In addition, all of the toes proximal joints are curled. (⚠️ Stateful pose) |
| 🔥🔥     | 🔥🔥     | 🔇        | 🔻🔻⏬⏬⏬      | If the Big toe and the 2nd toe have large down-curl forces, all of the toes proximal joints are curled, but the Big toe and 2nd toe can curl much more together than alone.                                                                                                                                    |
