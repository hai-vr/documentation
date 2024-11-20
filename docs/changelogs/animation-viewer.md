---
title: Animation Viewer
---

## 2.1.0

- Add support for CTRL-K Unity Search window.
- The "Animation Viewer" search provider must be enabled in that CTRL-K search window (three dots at the top right).
- Animation clips will show up in double in that Search window, as this version does not modify the stock Project search provider.
- The prefix `anim:<your search query>` may be used in your search query to only show *Animation Viewer* results.

<video controls width="816">
    <source src={'https://downscale.srv.hai-vr.dev/assets/docs/2024-08-15-p0-rvnD2iDbIn.mp4' ?? require('../../updates/img/2024-08-15-p0-rvnD2iDbIn.mp4').default}/>
</video>

## 2.0.4

- Fix null dereference when multiple Project tabs are open:
  - Check for a null value in listArea, which may happen when multiple Project tabs are open.
- Fix inconsistent use of GUILayout ScrollView:
  - Change EditorGUILayout to GUILayout for ScrollView.

The above changes have been contributed by **[mekanyanko (めかにゃんこ)](https://github.com/mekanyanko)** (first contribution).

## 2.0.3

- Fix an issue where avatars would fail to upload.
  - Fix scripts now compile when building.

## 2.0.2

- First public VCC release of Animation Viewer.
  - VCC install removes previous installations of this tool from Assets/
  - This tool now belongs in Packages/
