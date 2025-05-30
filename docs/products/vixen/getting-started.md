﻿---
sidebar_position: 0
---

import {HaiVideo} from "/src/components/HaiVideo";

# Getting started

<HaiVideo src="./img/2023-10-20_17-11-26_ShareX.mp4"></HaiVideo>

## Method of operation

*Vixen* is a **non-destructive** tool. The animators, menus and parameters are generated right before your avatar uploads, leaving your assets on-disk clean.

Compatibility notes:

- *Vixen* is built on top of [Modular Avatar](https://modular-avatar.nadena.dev/), but it does not require you to learn how to use Modular Avatar.
- It uses the NDM Framework.
- It should be compatible with projects that use [VRCFury](https://vrcfury.com/).

## Install Vixen

First, go to Patreon to [download Vixen](../vixen).

Vixen requires the use of the VRChat Creator Companion.

You need to add **two** listings:

- Add **[Modular Avatar listing](https://modular-avatar.nadena.dev/)** to ALCOM by clicking on *Download (using V<!-- -->CC)*, and
- also **[install Haï~'s listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.

In ALCOM, add the **"Haï~ - VCC Dependencies for Vixen"** package to your project.

Finally, open the downloaded Vixen archive and install the .unitypackage in your project.

## Menu items and toggles

<HaiVideo src="./img/2023-10-20_17-23-33_ShareX.mp4"></HaiVideo>

### Create a menu item

To create a menu item, create a new GameObject inside your avatar, and attach a **Vixen Control** component to it. Give a name to your menu.

If you want to put that menu item inside a sub-folder of your Expressions menu, create a new GameObject inside your avatar, and attach a **Vixen Folder** component to it. Move your menu items into that GameObject.

:::note
For existing Modular Avatar users:

If you're already familiar with Modular Avatar's menu systems, and you already use Modular Avatar [Menu Item of type Submenu](https://modular-avatar.nadena.dev/docs/reference/menu-item#submenus),
then you can choose to put Vixen Controls directly inside your existing Modular Avatar Menu Item of type Submenu (and Vixen Folders).

If you're not already familiar, then just use Vixen Folders.
:::

### Create toggles

Drag objects into the Toggle category:

- Objects placed in *Enable these when active* will be visible when the menu is turned on.
- Objects placed in *Disable these when active* will be visible when the menu is turned off.

If you want to toggle a component instead of the object itself, drag the object into the Toggle category, and then choose the desired component in the dropdown.

## Previewing changes

<HaiVideo src="./img/2023-10-20_17-20-09_ShareX.mp4"></HaiVideo>

At the top, you can press *Preview when active* to preview the avatar when the menu is active.

Conversely, press *Preview when inactive* to preview the avatar when the menu is inactive.

If you're testing for effects over time such as a dissolve, press one of the *Preview* buttons, and scrub the slider.

*You may not be able to test for particle effects or other complex effects in this mode.*

## Change properties

<HaiVideo src="./img/2023-10-20_17-18-39_ShareX.mp4"></HaiVideo>

### Create the first object group

In the Properties category, click + to create a group.

Drag the objects to change into that group.

### Search for properties

In the components that will show up below, click one of *Properties*, *Materials*, *BlendShapes*, or *Other* to start looking for properties to animate.

In the search field, type a few letters corresponding to the property you're looking for, and press the Add button to add it.

When done, press the _ button at the top right to minimize the search.

### Edit the property

Move the slider of the property to change the value. You can also choose a value out of range of the slider by editing the number above the slider.

- If the button on the right says "When active", it means the value will be changed to that value when the menu is active.
- If the button on the right says "When inactive", it means the value will be changed to that value when the menu is inactive.
- Press that button to switch between the two.

### Change all renderers of the avatar at once

You can choose to affect all components of the same type across the entirety of the avatar by changing the *Selection* setting to **Everything**.

- It will only change blendshapes on the meshes that have that blendshape when the avatar is being built.
- It will change materials on the meshes, even if the materials do not currently have that property, so that it works if you swap the material later.

### Multiple object groups

If you need to change the properties of different objects in a different way, press + to create another group.

## Advanced Menu and Non-menus

In the Menu category, you can choose other modes:

- **Simplified Menu** shows the essentials of a menu.
- **Advanced Menu** shows all options of a menu, including the parameter name, and whether it is synced.
- **Export Animations** disables the menu, and lets your export the animations to files every time the avatar is being built, so that you may be able to use these animations inside other animators.
- **Conditional** is explained in the next few documentation pages (the Flags section), and lets you combine multiple conditions.
- **OSC** is a like an invisible menu item. You will need to control it using an OSC program. You **must not** use this for Contacts or PhysBones.
- **Contact** lets you use a VRC Contact to control the animation.
- **PhysBone** lets you use a VRC PhysBone to control the animation.

If you leave the parameter name blank on an Advanced Menu, Contact, or PhysBone, we will choose one for you.

### Interpolation

Most of the modes also have the following properties:

- You can set the **Interpolation Duration** in seconds, which is the time it takes for the element to go from active to inactive, and inversely.
- In most modes, if the Interpolation Duration is set, you can choose the **Interpolation Curve**. The interpolation controls the easing curve when the element goes from active to inactive.

### Custom bounds

:::note
This feature was added in V1.3.0.
:::

In Contact, PhysBone, or OSC Float modes, the control is inactive when the value is 0.0, and active when the value is 1.0.

You can choose custom bounds so that the element is inactive when the value is closest to the lower bound,
and active when the value is closest to the upper bound.
