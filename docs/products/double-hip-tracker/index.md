---
title: ⭐ Double Hip Tracker
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Double Hip Tracker

<HaiTags>
<HaiTag requiresVRChat={true} /> <HaiTag requiresSteamVR={true} />
</HaiTags>

Double Hip Tracker lets you use two hip trackers on VRChat.

When one of the trackers temporarily loses tracking, the other one is used instead.

:::danger[Compatibility notes]
This tool requires <HaiTag requiresVRChat={true} short={true} />, because it uses VRChat’s OSC trackers. It is not compatible with other VR applications.

This tool requires the <HaiTag requiresSteamVR={true} short={true} /> runtime to read your other trackers.
:::

<HaiVideo src="./img/doublehip-demo-f.mp4"></HaiVideo>

## Download ⭐

- Double Hip Tracker is currently available to Patreon supporters at any tier ([https://www.patreon.com/vr_hai](https://www.patreon.com/vr_hai)).
  - See [Patreon rewards](../other/patreon).
  - Patreon ([Access to DoubleHipTracker](https://www.patreon.com/posts/access-to-double-85954616))
- Patreonをご利用になりたくないサポーターの方は、同じコンテンツにアクセスするために[pixivFANBOX (https://hai-vr.fanbox.cc/)](https://hai-vr.fanbox.cc/)でサポートを選択できます。
  - ソフトウェアへのアクセスの最低ティアは1000JPY 🌙⭐ です。

## **Installation instructions**

- If you don't have it already, download .NET 7.0 Runtime "Run console apps" [https://dotnet.microsoft.com/en-us/download/dotnet/7.0/runtime](https://dotnet.microsoft.com/en-us/download/dotnet/7.0/runtime)
- Download the application on Patreon

## How to use

- Start SteamVR
- Start `double-hip-tracker.exe`
- Wear your double hip tracker; ideally the trackers should be on opposite sides of the belt, but they don't have to
- Shake your hips for 2 seconds and the OSC tracker should appear
- In VRChat, click Calibrate 

## Other info

- You must enable OSC in VRChat, Settings > Avatars > OSC
- In VRChat, Settings > Tracking and IK, make sure you lower the calibration radius so that the double hip trackers don't try to bind themselves as being a chest tracker
- If you need to readjust your tracking belt because some of your trackers have moved, you may need to click the "Realign trackers" button on the window, and maybe recalibrate in VRChat

## Other options

:::note
The following options were added in V1.3.0.
:::

- **Freeze with both trackers are lost**: By default, this is ON. When both trackers are lost, the double tracker will freeze in place.
  - If this is OFF, the tracker will continue to use the data of the last known working tracker, which may be flying off.
  - The behaviour when it is ON is closer to VRChat's current behaviour when a single tracker is lost.
- **Auto-detect hip trackers**: By default, this is ON. Hip trackers will be detected automatically when you shake your hips.
  - If this is OFF, you will have to specify the serial numbers of the trackers.
  - When this is OFF, it works identically to how the [Double Chest Tracker](./double-hip-tracker/double-chest-tracker) works.

## Optional: Double Chest Tracker

See [Double Chest Tracker](./double-hip-tracker/double-chest-tracker).