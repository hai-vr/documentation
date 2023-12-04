---
title: ⚠️ Prefabulous Avatar
---

# Prefabulous Avatar

*Prefabulous Avatar* contains **non-destructive** components to automate common changes in your personal avatar. These components can be reused across
multiple avatars when you turn it into a prefab.

- Edit all [mesh bounds](./prefabulous-avatar/component-reference/edit-mesh-bounds)
and all [mesh anchor override](./prefabulous-avatar/component-reference/edit-mesh-anchor-override) for consistent visibility and lighting.
- [Change the avatar scale](./prefabulous-avatar/component-reference/change-avatar-scale) and viewpoint without rescaling the avatar in the scene.
- [Import an existing VRC Expression Parameters](./prefabulous-avatar/component-reference/import-expression-parameters) asset, such as face tracking parameters.
- Reset parts of the VRC Avatar Descriptor component without modifying it.

Although *Prefabulous Avatar* is meant to be used alongside **[Modular Avatar](https://modular-avatar.nadena.dev/)**, our components are not
really destined to be used inside distributed assets:

Unlike *Modular Avatar* components, most of our components are **invasive**. They will affect many components across the entire avatar,
or may not be able to coexist with other components.

Therefore you are encouraged to use these components only within personal avatars, and not as part of assets distributed to other users.

:::danger
*Prefabulous Avatar* is still in an early stage of development.
:::

![](img/pvsUzAgoIb.png)

## Download

The tool is free for download using VCC.

### VCC

You need to add **two** listings:

- Add **[Modular Avatar listing](https://modular-avatar.nadena.dev/)** by clicking on *Download (using VCC)*, and
- also **[install Haï~'s listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.

Then, add *Haï ~ Prefabulous Avatar (Alpha)* to your project using VCC.

## How to use

Add any of those components to any location inside your avatar. It is recommended that you put them in one or several child objects
so that you can reuse them on other avatars as a prefab:

- **[Component reference](./prefabulous-avatar/component-reference)** lists components that accomplish general tasks.
- **[Haï~ Components](./prefabulous-avatar/hai-components)** lists components that are either entire systems or integrations with other systems.
