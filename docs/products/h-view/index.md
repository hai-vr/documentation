﻿---
unlisted: true
---
# H-View

:::warning
The application more directed towards other developers who might want to modify it or learn how some parts work.
:::

This application has two parts:

## External Expressions Menu

*External Expressions Menu* is a Unity Editor tool that relies on the VRChat SDK.

When the avatar is being built, it will write a large JSON file in the `AppData/LocalLow/VRChat/vrchat/OSC/<userid>/Hai/` folder.
- It does **not** require NDMF, and it does **not** require VRCFury either.
  - If you *do* happen to use NDMF or Modular Avatar, it will execute itself as a NDMF plugin instead of an avatar preprocessor.
- If you have Modular Avatar or NDMF, use **Tools > NDM Framework > Manual bake avatar** to generate the JSON file without
  needing to build your avatar (it might not work if you have stuff generated by VRCFury, but I'm not sure about this).
- The tool will always execute during a build. To turn that off, uninstall the tool using VCC/ALCOM.

This file contains the following:
- The entire Expressions Menu, including all of its icons,
- All Contacts that have parameters,
- All PhysBones that have parameters,
- The entire Expressions Parameters list.

This tool can be downloaded through VCC/ALCOM using **[my listing](/docs/products/listing)** (you must enable pre-release packages to see it),
and the source code is at `https://github.com/hai-vr/external-expressions-menu` if you want to include this package yourself for modification.

:::warning
**The JSON file contains the icons as PNGs**, encoded into base64 strings.

For this reason you should not share the JSON file with other users as it contains graphical assets that might have been granted to you
under a license that would not permit redistribution.

Treat this JSON file no differently to an avatar file.
:::

## H-View

*H-View* is one of my personal OSC Query applications that I use for debugging.

The source code is available at **[https://github.com/hai-vr/h-view](https://github.com/hai-vr/h-view)**.

The application can be downloaded through the [Releases tab in GitHub](https://github.com/hai-vr/h-view/releases/latest).

Once launched, it will:
- Open a window on your desktop.
- Open an OSC Query service,
- Open an OSC service,
- Communicate with VRChat using OSC and OSC Query,
- Read any file on-demand located in `AppData/LocalLow/VRChat/vrchat/OSC/` that start with `ExternalExpressionsMenu_`,
- Read the files in `AppData/Roaming/H-View/`, creating the directory if it doesn't exist.

If SteamVR is running, it will also create a dashboard overlay (accessible by pressing the system menu).

### Costumes

The Costumes tab will search for `.png` files starting with `avtr_` in the `%APPDATA%/H-View/Costumes/` folder. The filename is the avatar ID.

### OSC Address tabs

The following tabs are directly sourced from the OSC addressed received from VRChat's OSC Query service:
- The Avatar tab shows all OSC addresses starting with `/avatar/parameters/` and the `/avatar/change` address,
except addresses starting with `/avatar/parameters/FT/`.
- The Face Tracking tab shows all OSC addresses starting with `/avatar/parameters/FT/`.
- The Input tab shows all OSC addresses starting with `/input/` and `/chatbox/`.
- The Tracking tab shows all OSC addresses starting with `/tracking/`.

#### Red text

When a line of text is red, it means the value has only ever changed to a different value less than 2 times.
You can find out stale parameters using this.

#### Clipboard

You can right-click an address to copy the OSC address, the parameter name, or the parameter value.

#### Columns

- The `=` column contains the word `local` if the data contained in the External Expressions Menu JSON file indicates that this parameter is not synced.
- The `+` contains `r` if the address is read-only, `w` if the address is write-only, and `rw` when the address can be both read and written.
- The `Type` column contains `int`, `float`, `bool`, `string`, or a sequence of letters representing the multiple value types of that OSC address,
  where `i` is an integer, `f` is a float, `T` is a boolean, and `s` is a string.

On writable addresses, the rightmost column lets you submit a value for that address.
- On `float` values, you have a slider between -1 and 1, and buttons `0` and `1` to set those values.
- On `bool` values, you have a button to toggle, and a button that inverts the value when it is held down.
- On `int` values, you have:
  - a button to change the value between 0 and 255,
  - `-` and `+` buttons to decrement and increment,
  - `0` and `1` buttons to set those values,
  - and a `!` button to flip the value.
- The chatbox address has a dedicated control.