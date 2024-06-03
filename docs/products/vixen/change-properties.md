---
sidebar_position: 1
---

# Change Properties

The Change Properties panel lets you customize material/shader properties, blendshapes, constraints, and swap materials in renderers,
position, rotation, scale, and other object properties. 

This page goes into further detail with the Change Properties panel.

For an introduction to Change Properties, see the [Getting started guide](getting-started).

## Object groups

An object group will change the properties of one or multiple objects in the same way.

You can have multiple object groups in your control, so that you can change properties of different objects in different ways.

The properties that can be changed are fetched from the first object in that list.

### Change all objects of the avatar at once

You can choose to affect all components of the same type across the entirety of the avatar by changing the *Selection* setting to **Everything**.

- It will only change blendshapes on the meshes that have that blendshape when the avatar is being built.
- It will change materials on the meshes, even if the materials do not currently have that property, so that it works if you swap the material later.

If you set the *Selection* setting to **Recursive Search**, it will only affect all components of the same type under hierarchy (and including itself) of the objects you specify.

The properties that can be changed are specified in the *Sample from* field.

## Adding properties

### Search for properties

In the components that will show up below, click one of *Properties*, *Materials*, *BlendShapes*, or *Other* to start looking for properties to animate.

In the search field, type a few letters corresponding to the property you're looking for, and press the Add button to add it.

When done, press the _ button at the top right to minimize the search.

### Edit the property

Move the slider of the property to change the value. You can also choose a value out of range of the slider by editing the number above the slider.

- If the button on the right says "When active", it means the value will be changed to that value when the menu is active.
- If the button on the right says "When inactive", it means the value will be changed to that value when the menu is inactive.
- Press that button to switch between the two.

## Default property value

By default, you define properties by specifying a new value, and the default value will be sampled from the scene when the avatar builds.

If you have a reason not to use the scene value, you can choose a custom value.

:::warning
The Custom feature was added in V1.1.0.
:::

- The property has a button labelled **"S" for "Scene"**. When the button shows **"S"**, it uses the Scene values.
  - When multiple objects are used (i.e. selecting multiple objects, or recursive selection), the value in the Scene may be different for each object (i.e. different outline width for each object).
    - Vixen will animate all of these values independently from the value of each respective object to the scene value.
    
- If you click that button, it will change to **"C" for "Custom"**: The value in the scene objects are ignored.
  - The scene objects remain unchanged, the default value is not baked.
  - This means that if the user has safety settings set to keep animations OFF, Vixen Control has no effect on the appearance of your avatar: the scene remains the source of truth.
  - When multiple objects are used (i.e. selecting multiple objects, or recursive selection), the value in the Scene may be different for each object (i.e. different outline width for each object).
    - They will effectively be overriden by the default value, which makes this different from **"S"** mode.

## Arbitrary blendshapes

Some plugins may generate blendshapes only when the avatar is being built.

When you are editing the properties of a SkinnedMeshRenderer, the field at the bottom of that panel lets you add arbitrary blendshape names,
even if they don't exist in Edit mode.

:::warning
The feature was added in V1.2.0.
:::

## Property types

### Swap materials

To swap materials on a renderer, search for properties containing the word `array` in the *Material* tab.
You will find a property that has a Material reference inside of it instead of the usual number.

Add this property, and specify a new Material asset to swap to.
