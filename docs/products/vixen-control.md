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

:::caution
*Vixen Control* requires [Modular Avatar](https://modular-avatar.nadena.dev/) to be installed in your project.
:::

## Toggle objects and components

:::danger
*Vixen Control* is not currently available. Please check back another time!
:::

In *Toggle objects*, drag and drop objects from your avatar into the *Enable these when active* slot to enable them, or the *Disable these when active* to disable them.

You can also drop components from specific objects to toggle that component, or use the *Type...* dropdown to specify which component to toggle.

The objects or components in *Enable these when active* will be enabled when the control is active, and disabled when the control is inactive, regardless of the current state of that object or component in the scene.

The objects or components in *Disable these when active* will be disabled when the control is active, and enabled when the control is inactive, regardless of the current state of that object or component in the scene.

## Change properties

:::danger
*Vixen Control* is not currently available. Please check back another time!
:::

### Object groups

Vixen uses *Object groups* to change properties .

The properties in that object group will affect all objects in that group.

You can define multiple object groups if you need to change different properties in different groups.

### Changing specific objects

The properties that you can change will be determined by the first object that you put in the *Targets* list.

The object group has an option called *Selection*. By default, *Selection* is set to *Normal*, so the properties will affect the objects in the *Targets* list.

### Changing multiple objects without specifying them

If *Selection* is set to *Everything*, the properties will affect all objects in the avatar. You can also set it to *Recursive Search* so that it only affects specific object hierarchies of your choosing.

This is useful if you want to apply a change to all materials of your avatar, such as the outline width or the minimum light level.

The properties only applies to the objects that contain that same component type. This is also true even if the component does not currently have an property with that name (i.e. when it uses a different material).

The object specified in *Targets* is only used as a reference to let you select which properties to change.

:::caution
If you have a property affecting a component of type *SkinnedMeshRenderer* type, it will not affect the components of type *MeshRenderer*.

If you need to affect both, create an additional object group that targets an object of the other type.
:::

When targeting multiple objects exclude specific objects. The objects that you define in *Do not change these objects* are not excluded recursively.
