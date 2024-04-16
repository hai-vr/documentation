---
sidebar_position: 1
---

# Reference manual

## Download

The tool is free for download using VCC.

### VCC

You need to add **two** listings:

- Add **[Modular Avatar listing](https://modular-avatar.nadena.dev/)** by clicking on *Download (using VCC)*, and
- also **[install Haï~'s listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.

Then, add *Haï ~ Prefabulous* to your project using VCC.

## Where to put the Prefabulous components?

Unless stated otherwise, **you can place the components anywhere inside your avatar**, and *Prefabulous* will try its best to affect all
eligible components on your avatar without needing you to manually target individual components.

For example, most of our blendshape manipulation components such as [Recalculate Normals](./universal/recalculate-normals)
or [Delete polygons](./universal/delete-polygons) will target all SkinnedMeshRenderers of your avatar by default as long as that
SkinnedMeshRenderer has one of the blendshapes in question, in order to keep manual labor to a minimum.

<video controls autostart="false">
    <source src={require('./img/uI4KB1Gj4Y.mp4').default}/>
</video>

*Notice how this component finds all SkinnedMeshRenderer components that have the blendshapes that you select.<br />Prefabulous tries to keep manual labor to a minimum.*

## Component types

Add any of those components to any location inside your avatar. It is recommended that you put them in one or several child objects
so that you can reuse them on other avatars as a prefab:

- **[Universal Components](./universal)** lists components that can be used on any social VR platform, app, or non-social VR app.
- **[VRChat Platform](./vrchat)** lists components that can only be used on the VRChat Platform.
- **[VRM and VSeeFace](./vrm)** lists components that can only be used on the VRM-compatible apps, including VSeeFace.
