---
sidebar_position: 1
---

# Reference manual

## Where to put the Prefabulous Avatar components?

Unless stated otherwise, **you can place the components anywhere inside your avatar**, and *Prefabulous Avatar* will try its best to affect all
eligible components on your avatar without needing you to manually target individual components.

For example, most of our blendshape manipulation components such as [Recalculate Normals](./hai-components/recalculate-normals)
or [Delete polygons](./hai-components/delete-polygons) will target all SkinnedMeshRenderers of your avatar by default as long as that
SkinnedMeshRenderer has one of the blendshapes in question, in order to keep manual labor to a minimum.

<video controls autostart="false">
    <source src={require('./img/uI4KB1Gj4Y.mp4').default}/>
</video>

*Notice how this component finds all SkinnedMeshRenderer components that have the blendshapes that you select.<br />Prefabulous Avatar tries to keep manual labor to a minimum.*

## Component types

Add any of those components to any location inside your avatar. It is recommended that you put them in one or several child objects
so that you can reuse them on other avatars as a prefab:

- **[Component reference](./component-reference)** lists components that accomplish general tasks.
- **[Haï~ Components](./hai-components)** lists components that are either entire systems or integrations with other systems.
