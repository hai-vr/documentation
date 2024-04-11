---
sidebar_position: 3
---

# Option 1: Tundra Tracker Developer Board

:::danger
This page is currently being written.
:::

I've had two separate electronics implementations:
- [ESP32 with Wi-Fi and OSC](esp32.md)
- Tundra Tracker Developer board with SteamVR Input (this page) and a separate OSC application

<video controls width="816">
    <source src={require('./img/toetracking-tundra-f.mp4').default}/>
</video>

## IDE

I could not figure out how to make PlatformIO work with this, so I followed [Tundra's store page links](https://tundra-labs.com/products/tundra-tracker-developer-board),
which at this time of writing suggests:
- use the Arduino IDE,
- in the Arduino IDE, add the RP2040 Arduino Board Library to the Arduino IDE ([read the README on how to install it](https://github.com/earlephilhower/arduino-pico?tab=readme-ov-file#installing-via-arduino-boards-manager)),
- turn the tracker ON,
- connect the USB programming port (not the tracker USB port),
- in the Arduino IDE, select the *Adafruit ItsyBitsy RP2040* board on COM port to upload to.

## Pins used

At this time of writing (2024-02-07), the Tundra Tracker Developer Board store page has link to a schematic
[which appears to be incorrect](https://twitter.com/ImmersiveDevice/status/1755296026301235333).

The ADC pins on the original schematic are swizzled:
- The ADC pins located on the IO_0 are actually *27, 28, 29*, and not *26, 27, 28*.
- The ADC pin located on the IO_1 is actually *26*, and not *29*

I have used the correct ADC pins on the IO_0, which are *27, 28, 29*.

## Repository and code

I've reused and modified Tundra's own sample code. [Tundra's README](https://github.com/tundra-labs/rp2040_examples) contains sufficient information to be autonomous.

TODO
