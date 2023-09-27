---
title: 🔒 Vixen Control
---

# Vixen Control

*Vixen Control* is an Unity Editor tool that provides another approach to create interactive elements and toggles on your avatar.

:::caution
This tool requires VRChat, and is currently incompatible with other apps and platforms.
:::

## Download ⭐

This tool is not yet available at this time.

## Method of operation

:::danger
*Vixen Control* is not currently available. Please check back another time!
:::

## Modular Avatar or VRCFury?

:::danger
*Vixen Control* is not currently available. Please check back another time!
:::

*Vixen Control* strongly recommends you to install [Modular Avatar](https://modular-avatar.nadena.dev/) in your project to benefit from all of its features.

However, if you use [VRCFury](https://vrcfury.com/) and you cannot install Modular Avatar, you can use [VRCFury's Toggle](https://vrcfury.com/components/toggle) to create toggles, and switch the *Vixen Control* mode to *Intermodule*.

In *Intermodule* mode, *Vixen Control* will automatically generate animations that can then be used by VRCFury. **Without Modular Avatar, some features from *Vixen Control* will not be usable.**

If you do not wish to use Modular Avatar nor VRCFury, you can still switch *Vixen Control* mode to *Intermodule*.

## Toggle objects and components

:::danger
*Vixen Control* is not currently available. Please check back another time!
:::

In *Toggle objects*, drag and drop objects from your avatar into the *Enable these when active* slot to enable them, or the *Disable these when active* to disable them.

You can also drop components from specific objects to toggle that component, or use the *Type...* dropdown to specify which component to toggle.

Additionally, the objects or components in *Enable these when active* will be disabled when the control is inactive, and those in *Disable these when active* will be enabled when the control is inactive, regardless of the current state of those objects or components in the scene.

## Change properties

:::danger
*Vixen Control* is not currently available. Please check back another time!
:::

### Changing specific objects

Vixen uses *Object groups* to change properties. The properties in that object group will affect all objects in that group.

For example, if you want to change the emission intensity of three specific objects, target those three objects in that group.

You can define multiple object groups if you need to change different properties in different groups.

Choose the objects you want to change in the *Targets* list of that group. The properties that you can change will be determined by the first object that you put in the *Targets* list.

### Changing multiple objects without specifying them

The object group has an option called *Selection*. By default, *Selection* is set to **Normal**. As described above, in Normal mode, you need to explicitly specify the objects to change.

If *Selection* is set to **Everything**, the properties will affect all objects in the avatar. You can also set it to **Recursive Search** so that it only affects specific object hierarchies of your choosing.

This is useful if you want to apply a change to all materials of your avatar, such as the outline width or the minimum light level.

The properties only apply to the objects that contain that same component type. This is also true even if the component does not currently have a property with that name (i.e. when it uses a different material).

The object specified in *Sample from* in the Properties section is only used as a reference to let you select which properties to change.

You can exclude specific objects from being affected by adding them in the *Do not change these objects* list. This only excludes the specified objects in that list; not their children.

:::caution
If you have a property affecting a component of type *MeshRenderer* type, it will not affect the components of type *SkinnedMeshRenderer*, and inversely.

If you need to affect both, create an additional object group that samples from an object of the other type.
:::

### Adding properties

After having chosen your target object or sample source, you can add the properties you are interested in.

In the Properties section, locate the component that you are interested in, then browse the available properties by clicking the following buttons:

- *Materials* contains the material properties, and the material slots.
- *Blendshapes* contains the blendshapes of a SkinnedMeshRenderer.
- *Other*/*Properties* contains all the other properties.

Search for the properties you're interested in by typing in the search box.

When you have located the property to change, press *Add*.

To close the search box, press the *_* button.

:::tip
You can separate search terms with a space, so the search query `color rim` can find results such as `material._RimLitTexColor`.
:::

### Modifying the value of properties

Once a property has been added, you can change its value by editing the fields, or in some cases, moving the slider or clicking the color picker.

Some properties have a type shown, such as *Color (XYZ)* or *Vector3*. We don't know what's the actual type of the property, so the displayed property is only a guess. In such cases, you can specify the type of the property yourself:

- The types *Color (XYZ), Vector3, Position, Scale*, are compatible with each other.
- The types *Color (XYZW), Vector4, Rotation,* are compatible with each other.

*Position, Scale, or Rotation* are special types: You will need to specify a Transform in your scene to sample the local position, local scale, or local rotation values from.

## Create more complex conditions

By default, *Vixen Control* lets you describe the **active state** of your control. The **inactive state** is simply the opposite of the toggles, using the current values of the properties in your scene.

The control will switch between the active state and the inactive state depending on whether the menu item is active or not.

That menu item controls a parameter.
- If your control uses the *Simplified* mode, that parameter has a random name that is hidden from you.
- If your control uses the *Advanced* mode, you get to choose the parameter name yourself.

If you need more than one parameter, click *Add Conditional* to create a new control that uses the *Conditional* mode. 

### Conditionals

