---
title: Prefabulous for VRM
---

## 2.0.1 (Planned)

:::danger
This change has not been released yet.
:::

- Compilation should no longer fail in non-VRChat projects that still have the `VRC_SDK_VRCSDK3` scripting define around.
    - Components now extend VRChat's `IEditorOnly` class only if the VRChat Avatars SDK is installed.

## 2.0.0

Prefabulous has been split into:
- *[Prefabulous Universal](./prefabulous)*
- *[Prefabulous for VRChat](./prefabulous-for-vrchat)*
- *Prefabulous for VRM* (this page)

See [update](/updates/2024/06/13/p0) page.

### ☀️ New component: [Add ARKit to BlendShapeAvatar](/docs/products/prefabulous/vrm/add-arkit-to-blendshapeavatar)

A new component, [Add ARKit to BlendShapeAvatar](/docs/products/prefabulous/vrm/add-arkit-to-blendshapeavatar), has been added to Prefabulous for VRM.

This component automatically links all blendshapes found in your meshes as ARKit-named BlendShapeClips for use by VRM apps.
