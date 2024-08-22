---
title: Prefabulous for Platform Conversions
---

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
