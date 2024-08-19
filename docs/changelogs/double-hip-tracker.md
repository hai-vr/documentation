---
title: Double Hip Tracker
---

## 1.3.0 (Planned)

:::danger
This change has not been released yet.
:::

This update introduces two changes in the behaviour of the double trackers:
- They *should* no longer fly away when both trackers are lost.
- We have an additional method to detect trackers flying off.

Changes:
- Add **"Freeze when both trackers are lost"** checkbox: If both trackers of any given double tracker are lost, then the tracker will freeze in place.
  - This new behaviour may be more in line with VRChat's current handling of single trackers being lost. The previous behaviour used to be that the tracker
    would fall back to the degraded data of the last known working tracker.
  - On previous versions, this checkbox would be effectively OFF. The default behavior is now for this checkbox to be ON.
- Add **a new method to detect when trackers are flying off**, even when SteamVR hardware trackers are reporting themselves as healthy.
  - This is accomplished by recording the average distance that separate the two trackers.
  - If the average distance diverges too much, we will try to guess which of the two trackers is the healthiest, and use that until the other tracker comes back into range.
  - This method runs in addition to the previous one, and does not replace it.
  - This new method can be toggled individually. The default behavior is for this checkbox to be ON.
- Add **Auto-detect hip trackers** checkbox: You can now disable automatic detection of hip trackers.
  - When you disable automatic detection, it works identically to the Double Chest Tracker.
  - You can use this if you want to always use the same two hip tracker serial numbers without needing to shake your hips, but beware,
    you may have to press the "Realign Trackers" button if you happen to wear your double hip tracker belt after starting the application.
- The UI is now organized across tabs.
  - *Align trackers* tab: For normal use. It has the buttons to realign trackers.
  - *Edit trackers* tab: Configure which Double Trackers are enabled, and their configuration.
  - *Other* tab: Provides rarely used options.
- Add vertical offset options: Some users have been having issues with the OSC tracker having some sort of vertical offset.
  - No solution had been found for this, so the option to offset the tracker vertically stays.
  
## 1.2.0

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