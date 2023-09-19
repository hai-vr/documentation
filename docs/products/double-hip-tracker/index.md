---
title: ⭐ Double Hip Tracker
---

# Double Hip Tracker

Double Hip Tracker lets you use two hip trackers on VRChat.

When one of the trackers temporarily loses tracking, the other one is used instead.

:::danger
This tool requires VRChat, because it uses VRChat’s OSC trackers. It is not compatible with other VR applications.
:::

<video controls width="816">
    <source src={require('./img/doublehip-demo-f.mp4').default}/>
</video>

## Download ⭐

Double Hip Tracker is currently available to Patreon supporters at any tier ([https://www.patreon.com/vr_hai](https://www.patreon.com/vr_hai)).

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

## Optional: Double Chest Tracker

See [Double Chest Tracker](./double-hip-tracker/double-chest-tracker).