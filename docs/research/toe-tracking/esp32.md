---
sidebar_position: 4
---

import {HaiVideo} from "/src/components/HaiVideo";

# Option 2: ESP32

:::danger
(2026 notice) This page describes an old project, and it may be incomplete.
:::

I've had two separate electronics implementations:
- ESP32 with Wi-Fi and OSC (this page)
- [Tundra Tracker Developer board with SteamVR Input](tundra.md) and a separate OSC kapplication

<HaiVideo src="./img/vr-socks-f.mp4"></HaiVideo>

## Pins used

You need to attach each flex sensor to an ADC pin, by using a voltage divider.

Because of Wi-Fi I've had to use the ADC pins 36, 39, and 34:
```cpp
adcAttachPin(36);
adcAttachPin(39);
adcAttachPin(34);
```

## Libraries

This uses the WiFi capabilities of the ESP32.

```cpp
const char * ssid = "############MyWiFiNetworkSSID############";
const char * password = "############MyWiFiNetworkPassword############";

void setup()
{
// ...
    WiFi.mode(WIFI_STA);

    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(10);
    }
    if (WiFi.waitForConnectResult() != WL_CONNECTED) {
        while(1) {
            delay(1000);
        }
    }
```

### OSC

In `platformio.ini`, I've added the ArduinoOSC lib.

```ini
[env]
lib_deps =
    hideakitai/ArduinoOSC@^0.3.29
```

This lets the ESP32 communicate directly with VRChat through the default port 9000.

```cpp
#include "ArduinoOSCWiFi.h"
#include "WiFi.h"

OscWiFiClient  client;
// ...
    client.send("192.168.1.99", 9000, "/avatar/parameters/Toe_1st_Down", ioAcomp);
    client.send("192.168.1.99", 9000, "/avatar/parameters/Toe_2nd_Down", ioBcomp);
    client.send("192.168.1.99", 9000, "/avatar/parameters/Toe_5th_Splay", ioCcomp);
```
