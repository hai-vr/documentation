---
title: Prefabulous for VRChat
---

## 2.2.0

- Now requires Animator As Code 1.2.0 or above, in order to use the asset container provider API.
- As I am no longer focusing on VRChat content creation, the package will now install without warnings,
  even if VRChat introduces breaking changes.
  - VRChat upper bound raised to VRChat SDK999.
- Add support for cross-application build compatibility being introduced in NDMF 1.8.
- This explicitly prevents the VRC-specific plugins from being executed in Resonite.

## 2.2.0-beta.1

- Now requires Animator As Code 1.2.0-beta.1 or above, in order to use the asset container provider API.
- If NDMF 1.6.0 is installed, Prefabulous for VRChat will use the new APIs in NDMF to save generated assets.
  - NDMF 1.6.0 is not explicitly required, to avoid a possible [unresolved issue with VCC](https://github.com/vrchat-community/creator-companion/issues/29).

## 2.1.0

- Allow installation with VRChat 3.7.x.
- Allow installation with Animator As Code 1.1.x.
- Allow installation with Animator As Code - Modular Avatar functions 1.1.x.
- Allow installation with Animator As Code - VRChat 1.1.x.
- An additional component [Accurate Eye Tracking Transforms](/docs/products/prefabulous/vrchat/accurate-eye-tracking-transforms) is made available
  for users who wish to try, but it is not documented as it is not ready.

## 2.1.0-beta.1

- Allow installation with VRChat 3.7.x.
- Allow installation with Animator As Code 1.1.x.
- Allow installation with Animator As Code - Modular Avatar functions 1.1.x.
- Allow installation with Animator As Code - VRChat 1.1.x.

## 2.1.0-alpha.1

- Add alpha version of [Accurate Eye Tracking Transforms](/docs/products/prefabulous/vrchat/accurate-eye-tracking-transforms).

## 2.0.0

Prefabulous has been split into:
- *[Prefabulous Universal](./prefabulous)*
- *Prefabulous for VRChat* (this page)
- *[Prefabulous for VRM](./prefabulous-for-vrm)*

See [update](/updates/2024/06/13/p0) page.
