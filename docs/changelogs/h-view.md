---
title: H-View
---

## 1.8.2

- Change vrchat.com/api/1 to api.vrchat.cloud/api/1 to fix 401 endpoint specification change:
    - On the 6th or 7th of November 2024, requests to https://vrchat.com/api/1 started to fail with a 401 (with reason specified as being Missing Credentials in the body content).
        - It appears that this behaviour may depend on the User-Agent sent by the client (not our client).
    - According to the following sources, a new route has to be used instead:
        - https://github.com/vrchatapi/specification/commit/558c0ca50202c45194a49d515f27e64f62079ba4#diff-5fa520d3bb34f9ae444cdbdf2b9eccff2361eb89a0cd3f4dba1e2e0fa9bba452R15
        - https://discord.com/channels/418093857394262020/418512124529344523/1303873667473866752
            - "Yes, going forward, all API requests need to go through api.vrchat.cloud instead"
    - In addition, vrchat.cloud is used directly within VRChat's web browser interface, so anyone can confirm it is a legitimate domain.
    - https://vrchat.com/api/1 has been changed to https://api.vrchat.cloud/api/1
- Show when battery is charging:
    - When battery is charging, make the slider look disabled.
- Generate THIRDPARTY.md:
    - In debug builds, generate the text that will be used in THIRDPARTY.md


## 1.8.0

- Add colorblind options:
    - Colors can be customized in the Options tab.
    - Green and Yellow have been changed to Blue and Orange as the default colors.
- Disable "Start with SteamVR" option from being modified when SteamVR is not running, as SteamVR needs to be running for this option to be toggled.
- In Hardware tab, don't show hardware listing when SteamVR is not running.
- Convert most buttons to haptic buttons.
- Add separators in the third party acknowledgements screen.
- Add dev tool section in the options:
    - Add eye tracking input toggle in the dev tools.
    - Add background transparency testing in the dev tools.
- Internal:
    - Massive cleanup of the project class structure in preparation for the addition of new ImGui overlay windows.

## 1.7.1

- Fix SteamVR bindings no longer show up as legacy for this application.

## 1.7.0

- Add Hardware tab, which shows all connected OpenVR devices.
    - Data is only fetch as long as the Hardware tab is visible.
- Third party acknowledgements are shown in the Options tab (in addition to the already existing THIRDPARTY.md file located in the application directory).

## 1.6.0

- Add localization facilities.
- Add language preference selection.
- Add font size preference selection.
    - Preference is split between Desktop and VR.
    - By default, Desktop is small, VR is larger.
- Update fonts:
    - Add small font: K14
    - Add large font: Fredoka, Kiwi Maru
    - THIRDPARTY.md has been updated with the font credits.
- Add haptics to Expressions menu buttons, and Costumes buttons.
- When listing available expression menu files, find the avatar names from the OSC config JSON files.

## 1.5.0

- Add Action manifest to bind buttons on the controllers.
- Start replacing tabs with sidebar menu for VR navigation.
    - Sidebar buttons trigger controller haptics when interacted in VR.
    - Buttons make a sound when interacted in VR.
- Add Randomize Face Tracking buttons.
- Overlay screen now updates at the expected rate.
- Internal:
    - Start working towards eye tracking input.
    - Add unused OSC server to use eye tracking input outside of VRC.
    - Continue working towards Steam Networking features and distribution.

## 1.4.0

- Data is now saved in `%APPDATA%/H-View/`
- Costumes are now read from `%APPDATA%/H-View/Costumes/`
- Add Hand overlay:
    - The `H-View/ShowCostumes` expression parameter can be used to tell H-View to open an overlay on the hand location.
    - It should be bound to an Expressions menu item of type SubMenu, that sets this local bool value to true, and has no items inside of it.
- Start working towards Steamworks integration and distribution through Steam.
- Only render the dashboard overlay when it is visible.

## 1.3.0

Add option to auto-start with SteamVR in the Utility tab.

- The app now registers itself to SteamVR.
- `--register-manifest` On `Debug` config only: Register the application path to SteamVR. By default, debug builds do not register themselves.
- `--no-register-manifest` On `Release` config only: Do not register the application path to SteamVR.

## 1.2.0

- Stay logged in across restarts.
- Add icons.
- Fix thumbstick drift was causing input lag in ImGui because of continuous mouse scroll events.

## 1.1.0

Add Costume switching and Dashboard overlay:

- Add Costume switching:
    - `.png` files in the VRChat's OSC folder that start with `avtr_` will add a costume.
    - Expected thumbnail size is 256x768, but this may change in the future.
    - Avatar switching is done through the VRChat web API. You need to login to VRChat using the desktop window.
        - Please read the README.md for details on the API in use, and inspect the source code.
- Add Dashboard overlay:
    - If SteamVR is running, a dashboard overlay will open in addition to the desktop window.

Since this application is not yet user-facing, this changelog is not detailed much. Please see the relevant commits.

## 1.0.0

- Add releases through GitHub Actions.
