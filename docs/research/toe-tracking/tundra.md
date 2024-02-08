# Tundra Tracker Developer Board

I've had two separate electronics implementations:
- [ESP32 with Wi-Fi and OSC](esp32.md)
- Tundra Tracker Developer board with SteamVR Input (this page) and a separate OSC application

## Pins used

On the Tundra Tracker Developer Board store page, [the schematic appears to be incorrect](https://twitter.com/ImmersiveDevice/status/1755296026301235333).

The ADC pins on the original schematic are swizzled:
- The ADC pins located on the IO_0 are actually *27, 28, 29*, and not *26, 27, 28*.
- The ADC pin located on the IO_1 is actually *26*, and not *29*

I have used the correct ADC pins on the IO_0, which are *27, 28, 29*.

## Repository and code

I've reused and modified Tundra's own sample code. [Tundra's README](https://github.com/tundra-labs/rp2040_examples) contains sufficient information to be autonomous.

TODO