---
title: Blendshape Viewer
---
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 3.0.1

Fixes:
- Fix "Show only non-zero" button was not visible in Unity 2022.

## 3.0.0

Breaking changes:
- No longer supports Unity 2019. Unity 2022 minimum required.

Optimizations:
- UI should now be faster on models containing a large number of blendshapes (tested with 700 blendshapes).
- Rendering duration should now be faster.
  - Rendering used to be slow if the Blendshape Window was already open due to a quirk with Animation Mode garbage collection.
  - Unity's Animation Mode is no longer used to render the thumbnails.
  - Rendering and detecting differences are now separate operations.

Features:
- Holding down the ALT key can now help you more accurately compare the differences:
  - By default, holding down the ALT key shows the original picture, without the blendshape applied.
  - Alternatively, using the dropdown option, holding down the ALT key can highlight the differences in color.
  - Yellow color is used for areas that became brighter, and red color for areas that became darker.
- Add a new filter which, once clicked, only shows blendshapes that have a value other than zero.
- Checkboxes are now saved between Editor sessions.
- Add localization.

Changes:
- The compute shader is now always used on computers that support the compute shader.
- If no change is visible on a blendshape thumbnail, the thumbnail now looks even darker.
- Auto-update on focus is now OFF by default.
- Antialiasing is now enabled.
- Increase margin of the rectangle from 2 pixels to 5 pixels.
- Window is now called "Blendshape Viewer" instead of "BlendshapeViewer".

Fixes:
- When the window is focused with auto-updates, updates are now delayed to prevent double-refresh.

## 3.0.0-beta.4

Features:
- Add button to only show blendshapes that have a value other than zero.

Changes:
- Change antialiasing from 8 to 4.
- Add multiple options for the ALT key.
  - Add option to display the original picture. This is now the default.
  - Add option to disable the function of the ALT key.
  - The options for the highlighted hotspots have changed from a checkbox into two options.

Fixes:
- Fix compute shader should not run on unsupported environments.

## 3.0.0-beta.3

Changes:
- Rendering of diff textures is now done separately from capturing the thumbnails while the Editor is running.
- Increase margin of the diff rectangle from 2 pixels to 5 pixels.

Fixes:
- Fix antialiasing requires greater tolerance in the compute shader.
- Fix improper RenderTexture release invocation.

## 3.0.0-beta.2

Changes:
- Use yellow color for areas that became brighter, and red color for areas that became darker.
- Ensure camera has anti-aliasing for the generation of thumbnails.

## 3.0.0-beta.1

Breaking changes:
- No longer supports Unity 2019. Unity 2022 minimum required.

Optimizations:
- UI should now be faster on models containing a large number of blendshapes (tested with 700 blendshapes).
- Rendering duration should now be faster.
  - Rendering used to be slow if the Blendshape Window was already open due to a quirk with Animation Mode garbage collection.
  - Unity's Animation Mode is no longer used to render the thumbnails.

Features:
- Pressing the ALT key will now display the areas affected by the blendshape in yellow.
- Checkboxes are now saved between Editor sessions.
- Add localization.

Changes:
- The compute shader is now always used on computers that support the compute shader.
- If no change is visible on a blendshape thumbnail, the thumbnail now looks even darker.
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
