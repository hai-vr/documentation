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

# FAQ

### What counts as a loss of tracking?

Whenever a tracker loses sight of the lighthouses, or the tracker loses radio signal, or the tracker turns off, it is considered as a loss of tracking.

Double Hip Tracker only makes use of the internal tracker status provided by the driver to figure out if a tracker has been lost (`Running_OK` status).

It doesn’t guess if a tracker has been lost in any other way. In particular, if your room has reflective surfaces, or if SteamVR thinks the tracker is healthy but still incorrectly estimates the position of a tracker, Double Hip Tracker will not be able to help during those situations.

### Can it be used alongside IMU-based trackers/pose estimators?

No, you should not use it alongside IMU-based trackers or pose estimators. The majority of IMU-based trackers rely on a pose estimator software, so any tracker mixing should be handled on that pose estimator software.

If your hip is driven by a lighthouse tracker, then the pose estimator must also reposition your feet accordingly, therefore it is the job of the pose estimator to take into account lighthouse trackers.

Also, this application has only been tested with lighthouse-based trackers. I do not know if this system works or not with [self-tracking trackers](https://developer.vive.com/resources/tracker/).

### Does it run on Unity?

Double Hip Tracker is not an Unity application.

It is written in C#, and uses the OpenVR API directly, with a standalone math library.

The idea is to keep Double Hip Tracker as lightweight and as pragmatic as I can.

### Third party acknowledgements

You can find third party acknowledgements here:

[Double Hip Tracker: Third party acknowledgements](https://www.notion.so/Double-Hip-Tracker-Third-party-acknowledgements-cefe0ac8d42a4f5d9b2e3a8e4154b9e1?pvs=21)