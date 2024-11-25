---
title: BlendTree Viewer
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

*BlendTree Viewer* lets you browse large blend trees in a compact view.

:::tip
This does not require VRChat to run. It has been tested to work on Unity 2019, and should work on newer versions.
:::

<HaiVideo src="./img/blendtree-viewer/2023-11-17_00-10-56_ShareX.mp4"></HaiVideo>

## Download

The tool is free for download. It can also be downloaded using VCC.

### Direct download

- GitHub ([hai-vr/blendtree-viewer](https://github.com/hai-vr/blendtree-viewer))

### VCC

- Use this link to **[install our listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ BlendTree Viewer* to your project using VCC.

## How to use

Open *Window > Haï > BlendTree Viewer*.

In Unity's Animator window, click on an animator state that contains a blend tree. You do not need to double click the animator state.

*BlendTree Viewer* will automatically focus on the currently selected blend tree, or on the blend tree that is contained within the currently selected animator state.

You can prevent this automatic focus by unchecking *Sync With Animator*. You may then click the *Select* button to focus on the currently selected blend tree.

All of the fields of this viewer window are read-only. Use the Inspector window as normal to edit the objects.
