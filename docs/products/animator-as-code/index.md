# Animator As Code V1

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

**Animator As Code** is a small Unity Editor facility to generate Avatars 3.0 Animator layers and animations from a [fluent builder](https://en.wikipedia.org/wiki/Fluent_interface) syntax written in C#.

:::tip
AnimatorAsCode V1 does not require VRChat unless you use VRChat-specific functions.
:::

Describing your animators as code provides the following advantages:

- you do not need to edit your animations by hand every time you add remove or change the location of a component in your hierarchy
- you will not need to edit a hundred transitions by hand if you need to rectify your animator

It is written with VRChat Avatars 3.0 use cases in mind; the API is opinionated to facilitate writing such animators in a concise way, hopefully requiring as little additional tweaking.

<video controls width="816" autostart="false">
    <source src="https://user-images.githubusercontent.com/60819407/157751278-475538c7-3310-4fa5-9a87-3651c85eaa1c.mp4" />
</video>

# Install

There are currently no releases.

Clone the repository within a subfolder of your Unity project, or download the source code and install in any subfolder of your project.

The project can be located within `Assets/AnimatorAsCodeFramework` but you can choose any location.
