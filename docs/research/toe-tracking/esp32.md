# ESP32

:::danger
This page is currently being written.
:::

I've had two separate electronics implementations:
- ESP32 with Wi-Fi and OSC (this page)
- [Tundra Tracker Developer board with SteamVR Input](tundra.md) and a separate OSC kapplication

## Pins used

Because of Wi-Fi I've had to use the ADC pins 36, 39, and 34:
```cpp
adcAttachPin(36);
adcAttachPin(39);
adcAttachPin(34);
```