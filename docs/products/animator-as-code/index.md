import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Animator As Code V1

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

**Animator As Code** is a small Unity Editor facility to generate animator controller layers and animations from a [fluent builder](https://en.wikipedia.org/wiki/Fluent_interface) syntax written in C#.

Initially created for use with VRChat Avatars 3.0, it is now a generic package that does not require it.

:::tip
AnimatorAsCode V1 does not require VRChat unless you use VRChat-specific functions.
:::

Describing your animators as code provides the following advantages:

- you do not need to edit your animations by hand every time you add remove or change the location of a component in your hierarchy
- you will not need to edit a hundred transitions by hand if you need to rectify your animator

It was initially written with VRChat Avatars 3.0 use cases in mind; the API is opinionated to facilitate writing such animators in a concise way,
hopefully requiring as little additional tweaking.

<HaiVideo src="../../../static/unsorted_ghc/157751278-475538c7-3310-4fa5-9a87-3651c85eaa1c.mp4"></HaiVideo>
