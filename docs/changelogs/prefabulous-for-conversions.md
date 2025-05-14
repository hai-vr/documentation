---
title: Prefabulous for Platform Conversions
---

## 2.1.0-alpha.0

- Fix ConvertVRCConstraintsToUnityConstraints should run after Modular Avatar creates constraints:
  - Run after Modular Avatar, because MA Convert Constraints and MA World Fixed Object create VRCConstraint.
  - Also, remove this component during the build to help missing script issues (e.g. better handles CVR).
  - The above changes have been contributed by **[Narazaka](https://github.com/Narazaka)** (first contribution).
- Integrate with NDMF 1.8 cross-application builds:
  - Add support for cross-application build compatibility being introduced in NDMF 1.8.
  - MA/NDMF for Resonite does not support Unity constraints at this time of writing, but as far as I am aware there is no harm done enabling this conversion plugin pass for all platforms.
  - Conditionally compiled when NDMF 1.8.0-alpha.0 is installed:
    - Prefabulous for Platform Conversions still needs to be compatible with VNyan (Unity 2020) and Warudo (Unity 2021), meaning we still need to support NDMF 1.4 (last known working version in Unity 2020).

## 2.0.0

### ☀️ New component: Convert VRC Constraints to Unity Constraints

A new component, [Convert VRC Constraints to Unity Constraints](/docs/products/prefabulous/conversions/convert-vrc-constraints-to-unity-constraints), has been added to Prefabulous for Platform Conversions.

It converts VRC Constraint components back to native Unity Constraints, to the extent applicable.

- VRC-specific features (local axis, freeze to world) are not supported.
- The VRChat SDK assemblies and DLLs do not need to be installed in the project, as long as the types exist, so they could be mere stubs.

## 2.0.0-beta.4

- Fix missing assembly definition reference:
  - Fix missing Universal reference.
  - Errors located within conditional compilation blocks are really annoying.

## 2.0.0-beta.3

- Fix Universal is needed:
  - Conversions depends on a class from Universal.
- Edit NDMF naming.

## 2.0.0-beta.2

- Fix NDMF naming of Convert VRC Constraints to Unity Constraints plugin (inter-release).

## 2.0.0-beta.1

### ☀️ New component: Convert VRC Constraints to Unity Constraints

A new component, [Convert VRC Constraints to Unity Constraints](/docs/products/prefabulous/conversions/convert-vrc-constraints-to-unity-constraints), has been added to Prefabulous for Platform Conversions.

It converts VRC Constraint components back to native Unity Constraints, to the extent applicable.

- VRC-specific features (local axis, freeze to world) are not supported.
- The VRChat SDK assemblies and DLLs do not need to be installed in the project, as long as the types exist, so they could be mere stubs.
