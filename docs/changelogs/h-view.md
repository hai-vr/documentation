---
title: H-View
---

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
