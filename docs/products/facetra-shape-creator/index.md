﻿---
title: ⭐ FaceTra Shape Creator
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Haï's FaceTra Shape Creator

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

FaceTra Shape Creator is a Unity Editor tool that lets you create face tracking blendshapes on an avatar by morphing meshes. The original mesh asset is not modified, and the process is non-destructive, automating a large portion of this laborious process.

<HaiVideo src="./img/2023-10-26_17-41-25_ShareX.mp4"></HaiVideo>

:::tip
This tool has been tested to run on various applications, such as:
- Unity 2020 for <HaiTag compatibleWithVNyan={true} short={true} />,
- Unity 2021 for <HaiTag compatibleWithWarudo={true} short={true} /> & <HaiTag requiresChilloutVR={true} short={true} />,
- Unity 2022 for <HaiTag requiresVRChat={true} short={true} />, and
- Unity 6 for <HaiTag requiresBasis={true} short={true} />.

It may also work on applications other than those cited above.

*To install without VRChat support, you must follow special installation instructions described in the [Install](./facetra-shape-creator/install) page.*
:::

## Download

The tool is available to [Patreon supporters](https://www.patreon.com/vr_hai), **but it is currently a work in progress** as part of the [Face Tracking Trials](https://www.notion.so/f4032b4827e146fe9d2d3776e5da0f3b?pvs=21).

If you use this tool, it is highly recommended that you join the [Discord server](https://discord.com/invite/58fWAUTYF8) in order to stay up to date and get support as this tool will be rough to use at first.

- For users using Japanese currency:
    - Patreonをご利用になりたくないサポーターの方は、同じコンテンツにアクセスするために[pixivFANBOX (https://hai-vr.fanbox.cc/)](https://hai-vr.fanbox.cc/)でサポートを選択できます。
        - ソフトウェアへのアクセスの最低ティアは1000JPY 🌙⭐ です。

## Examples

The tool has been designed primarily for anime-like avatars.

It should also perform well with kemono avatars, and it has been used with furry avatars with some success.

### Anime-like avatar

<HaiVideo src="./img/haolan-facetra-test-f.mp4"></HaiVideo>
*Haolan*

### Kemono avatar

<HaiVideo src="./img/foshunia-facetra-f-an.mp4"></HaiVideo>
*Foshunia*

### Furry avatar

<HaiVideo src="./img/actias-demo-f-an.mp4"></HaiVideo>
*Actias*