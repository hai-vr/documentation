﻿---
title: Auto-reset OSC config
---

This tool will automatically reset the OSC config after every successful VRChat avatar upload.

<video controls width="816">
    <source src={require('./img/auto-reset-osc-config/auto-remove-osc-f.mp4').default}/>
</video>

## Download

The tool is free for download using VCC.

### VCC

- Use this link to **[install our listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Auto-reset OSC config* to your project using VCC.

## How to use

**Once the package is installed**, the OSC config file will be removed after every successful VRChat avatar upload.

Note that if you load your avatar in-game too shortly after the upload, the game might still load the previous version of the avatar, which will cause the OSC config file to be out of date again.

## When to use this tool?

*Auto-reset OSC config* is meant to be used by OSC users (face tracking, connected objects, special overlays, and other tricks).

When the avatar is loaded for the first time, VRChat generates a JSON file located in `/Users/{windowsUser}/AppData/LocalLow/VRChat/VRChat/OSC/{userId}/Avatars/{avatarId}.json`

This file contains information about the current expression parameters of the avatar.

This file is not generated again when the avatar is updated. This can cause OSC applications to fail reacting to newly added expressions parameters, such as face tracking parameters for instance.

Typically, the fix is to go in VRChat Expressions menu, and click "Reset OSC config" after every meaningful upload.

This tool assumes that you did not manually update this JSON file (this almost never happens), and deletes it after every avatar upload, so that the avatar parameters should work consistently after every new upload.
