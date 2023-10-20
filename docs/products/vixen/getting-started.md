---
sidebar_position: 1
---

# Getting started

:::danger
*Vixen* is not currently available; the documentation is being written. Please check back another time!
:::

## Method of operation

*Vixen* is a **non-destructive** tool. The animators, menus and parameters are generated right before your avatar uploads, leaving your assets on-disk clean.

Compatibility notes:

- Although *Vixen* does not require you to learn how to use Modular Avatar, it is built on top of [Modular Avatar](https://modular-avatar.nadena.dev/).
- It uses the NDM Framework.
- It should be compatible with projects that use [VRCFury](https://vrcfury.com/).

## Install Vixen

First, [download Vixen](../vixen).

Vixen requires the use of the VRChat Creator Companion.

You need to add **two** listings:

- Add **[Modular Avatar listing](https://modular-avatar.nadena.dev/)** by clicking on *Download (using VCC)*, and
- also **[install our listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**

In VCC, add the **"Haï~ - VCC Dependencies for Vixen"** package to your project.

Finally, add Vixen downloaded in the first step to your project.

## Menu items

To create a menu item, create a new GameObject inside your avatar, and attach a **Vixen Control** component to it. Give a name to your menu.

If you want to put that menu item inside a sub-folder of your Expressions menu, create a new GameObject inside your avatar, and attach a **Vixen Folder** component to it. Move your menu items into that GameObject.

## Toggle objects

Drag objects into the Toggle category:

- Objects placed in *Enable these when active* will be visible when the menu is turned on.
- Object placed in *Disable these when active* will be visible when the menu is turned off.

If you want to toggle a component instead of the object itself, drag the object into the Toggle category, and then choose the desired component in the dropdown.

## Previewing changes

At the top, you can press *Preview when active* to preview the avatar when the menu is active.

Conversely, press *Preview when inactive* to preview the avatar when the menu is inactive.

If you're testing for effects over time such as a dissolve, press one of the *Preview* buttons, and scrub the slider.

*You may not be able to test for particle effects or other complex effects in this mode.*

## Change properties

### Create the first object group

In the Properties category, click + to create a group.

Drag the objects to change into that group.

### Search for properties

In the components that will show up below, click one of *Properties*, *Materials*, *BlendShapes*, or *Other* to start looking for properties to animate.

In the search field, type a few letters corresponding to the property you're looking for, and press the Add button to add it.

When done, press the _ button at the top right to minimize the search.

### Edit the property

Move the slider of the property to change the value. You can also choose a value out of range of the slider by editing the number above the slider.

- The checkbox on the left means the value will be changed to that value when the menu is turned on.
- If that checkbox is ticked off, it means the value will be changed to that value when the menu is turned off.

### Change all renderers of the avatar at once

You can choose to affect all components of the same type across the entirety of the avatar by changing the *Selection* setting to **Everything**.

- It will only change blendshapes on the meshes that have that blendshape when the avatar is being built.
- It will change materials on the meshes, even if the materials do not currently have that property, so that it works if you swap the material later.

### Multiple object groups

If you need to change the properties of different objects in a different way, press + to create another group.

## Advanced Menu and Non-menus

In the Menu category, you can choose other modes:

- **Simplified Menu** shows the essentials of a menu.
- **Advanced Menu** shows all options of a menu, including the parameter name, and whether it is synced. If you leave the parameter name blank, we will choose one for you.
- **Export Animations** disables the menu, and lets your export the animations to files every time the avatar is being built, so that you may be able to use these animations inside other animators.
- No not use **Conditional** for now, as it will be developed further in later versions.
- **OSC** is a bit like a menu that doesn't exist. You will need to control it using an OSC program.
- **Contact** lets you use a VRC Contact to control the animation.
- **PhysBone** lets you use a VRC PhysBone to control the animation.

Most of the modes also have the following properties:

- You can set the **Interpolation Duration** in seconds, which is the time it takes for the element to go from active to inactive, and inversely.
- In most modes, if the Interpolation Duration is set, you can choose the **Interpolation Curve**. The interpolation controls the easing curve when the element goes from active to inactive.
