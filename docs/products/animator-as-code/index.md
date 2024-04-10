import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Animator As Code V1

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

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
    <source src="/unsorted_ghc/157751278-475538c7-3310-4fa5-9a87-3651c85eaa1c.mp4" />
</video>

# Install

At this time of writing, Animator As Code V1, **and this documentation**, are a work in progress.

You can install Animator As Code V1 using VCC, but the API is not deemed stable at the moment, and therefore is not currently suitable
for use in public-facing projects by third parties.
