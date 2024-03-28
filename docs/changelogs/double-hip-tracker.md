---
title: Double Hip Tracker
---

## 1.2.0 (Planned)

This update provides no changes on the trackers themselves, only compatibility improvements.

- Update OpenVR DLL to 2.5.1. This seems to improve a weird compatibility issue where trackers are not detected, which had affected a Pico 4 user.
- Update ImGui versions, in an attempt to troubleshoot an user whose window seemed to be crashing on AMD GPU.
- Add noUi and vrcOscPort config options:
    - A custom vrcOscPort can now be set in the JSON config.
    - The program can now start without an UI in the JSON config.
    - The JSON config can be created (user_config.json in the same folder as the .exe) by toggling the Double Chest Tracker checkbox ON and OFF.

## 1.1.0

Added the Double Chest Tracker option in the same application as the Double Hip Tracker:
- You may now additionally use a Double Chest Tracker by clicking "Enable" in the corresponding window
- The Double Chest Tracker is not detected automatically, you must select the serial numbers of your chest tracker on the dropdowns
- Once selected, it is highly recommended to use VRChat's "IK-Beta" branch and add launch arguments to VRChat's startup options to ignore the chest tracker serial numbers, as the game may have difficulties choosing which tracker to bind the chest to during calibration. Please consult the guide on how to use it at: https://hai-vr.notion.site/Double-Hip-Tracker-8a4f8784444344c89edd561f2b8efbab
- The Double Chest Tracker has additional functionality not found in the Double Hip Tracker. If you choose "Prioritize Tracker A", the tracker in the Tracker B slot will be ignored as long as the Tracker A is tracking. This can be used if you have one of your chest trackers in a more advantageous location than the other one.>
- The application will now save your settings (checkboxes, tracker selection) in a file called user_config.json located in the same directory as the .exe

## 1.0.2

No functional change compared to V1.0.1. Update is not necessary, but the zip file now has its files inside a subfolder to prevent accidental spillage if the user extracts the zip in the same directory.

## 1.0.1

VRChat ignores hardware trackers that send (0,0,0) coordinates, but not OSC Trackers that send (0,0,0) coordinates.
Double Hip Tracker now sends the last known position to VRChat when both trackers send (0,0,0).

## 1.0.0

- First release.