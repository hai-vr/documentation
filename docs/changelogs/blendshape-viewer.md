---
title: Blendshape Viewer
---

## 3.0.0-beta.1

Breaking changes:
- No longer supports Unity 2019. Unity 2022 minimum required.

Optimizations:
- UI should now be faster on models containing a large number of blendshapes (tested with 700 blendshapes).
- Rendering duration should now be faster.
  - Rendering used to be slow if the Blendshape Window was already open due to a quirk with Animation Mode garbage collection.
  - Unity's Animation Mode is no longer used to render the thumbnails.

Changes:
- The compute shader is now always used on computers that support the compute shader.
- If no change is visible on a blendshape thumbnail, the thumbnail now looks even darker.
- Checkboxes are now saved between Editor sessions.
- Auto-update on focus is now OFF by default.
- Window is now called "Blendshape Viewer" instead of "BlendshapeViewer".

Fixes:
- When the window is focused with auto-updates, updates are now delayed to prevent double-refresh.

## 2.1.2

- Fix layout errors should no longer be produced when the search returns 0 results.
- Prevents the editor from hanging up when the user mistakenly pastes a page long of unrelated content in the search field.
  - The search query is now limited to 100 characters max.

## 2.1.1

- Fix error when no mesh was selected.

## 2.1.0

Add Search and Copy to Clipboard:
- Add a Search field.
- Add Copy to Clipboard button.

## 2.0.3

- Fix an issue where avatars would fail to upload.
  - Fix scripts now compile when building.

## 2.0.2

- First public VCC release of Blendshape Viewer.
  - VCC install removes previous installations of this tool from Assets/
  - This tool now belongs in Packages/
