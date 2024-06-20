---
title: Lightbox Viewer
---

## 2.2.0

Try to improve speed in Edit mode by removing all MonoBehaviours from the copy:
- Try to improve the runtime speed in Edit mode by removing all MonoBehaviours from the copy, so that the OnEnable/OnDestroy don't get invoked.
- This is done by parenting the copy to a disabled parent before removing all MonoBehaviours from the copy.

## 2.1.0

Re-bake lighting of Lightbox scene in Unity 2022:
- The current lightmap seems to misbehave in Unity 2022, especially the White box.
- Lighting has been re-baked in Unity 2022.
- The package is now classified as being a Unity 2022.3 package.

## 2.0.2

- Fix an issue where avatars would fail to upload.
  - Fix scripts now compile when building.

## 2.0.1

- First public VCC release of Lightbox Viewer.
  - VCC install removes previous installations of this tool from Assets/
  - This tool now belongs in Packages/
