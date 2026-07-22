---
title: Blendshape Viewer (V3)
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";
import HaiSupport from "/docs/_support.mdx";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

*Blendshape Viewer* 让您可以直观地查看模型中受 blendshape 影响的区域，以便您可以调整它们的值。

:::tip[兼容性说明]
- 已在 Unity 2022 和 Unity 6.4 上测试通过，也应适用于更高版本。
- 🌊 不需要特定于游戏的 SDK。
- 如果您使用的 Unity 版本低于 2022，则必须使用 2.1.2 版本。
:::

![Unity_Q4csWb8ty6.png](/assets/docs/products/blendshape-viewer/v3/Unity_Q4csWb8ty6.png)

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-25-45_Je9CWGeOH8.mp4"></HaiVideo>

## 下载

此工具可以在 [Booth.pm](https://hai-vr.booth.pm/items/3582541) 上下载：

它也可以通过 ALCOM 安装：
- 使用此链接 **[将我们的列表安装到 ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**。
- 使用 ALCOM 将 *Haï ~ Blendshape Viewer* 添加到您的项目中。

<HaiSupport/>

## 如何使用

### 选择要预览的对象

选择您想要预览的 *SkinnedMeshRenderer*。在检查器 (Inspector) 中，点击三个点，然后选择“Haï Blendshape Viewer”。

![how_to_open](/assets/docs/products/blendshape-viewer/v3/how_to_open.png)

### 将场景视图与网格对齐

使用 Scene 选项卡环顾四周以对焦您的网格，然后按 *更新* 以刷新缩略图。缩略图使用与场景视图相同的相机设置。

如果您希望缩略图更大，请更改 *缩略图大小* 滑块，然后再次按 *更新* 按钮。

:::tip
为了获得更好的效果，请记住您可以更改 Scene 相机的视野 (field of view)。

![field_of_view](/assets/docs/products/blendshape-viewer/Untitled_5.png)
:::

### 识别哪个 blendshape 影响哪个区域

默认情况下，缩略图将显示差异。如果您不希望这样，请取消选中 *显示差异*。

将光标置于 *Blendshape Viewer* 窗口内时，按 ALT 键可以显示未应用 blendshape 的原图。

ALT 键的功能可以通过右上角的下拉菜单进行更改：

- 要在按住 ALT 键时显示原图，请选择 *ALT 显示原图*。
- 要在按住 ALT 键时以黄色高亮显示差异，请选择 *ALT 显示热点*。
- 选择 *默认显示热点* 以黄色高亮显示差异；此时按住 *ALT* 键将显示常规区域。
- 要禁用 ALT 键的功能，请选择 *ALT 不执行任何操作*。

### 搜索 blendshape

在 *搜索* 栏中输入内容，按 blendshape 名称过滤结果。

您可以用空格分隔搜索词。搜索查询 `eye down` 可以找到类似 `eye_lookdown` 的结果。

*搜索* 栏右侧标有 *仅显示非零值* 的按钮是一个过滤器，它将仅显示值不为零的混合形状（blendshape）。

### 复制 blendshape 名称

点击 **剪贴板图标** 即可复制 blendshape 名称。

或者，您也可以选择包含 blendshape 名称的文本。

### 更改 blendshape 的值

每个 blendshape 下方的滑块将修改场景中该 blendshape 的值。

这也可以在录制动画时使用。

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-18-15_4Kdbs1Hlck.mp4"></HaiVideo>

## 特别鸣谢

- 感谢 [Pema](https://github.com/pema99/) 提供的 [Compute Shader](https://github.com/hai-vr/blendshape-viewer/commit/46db696df8be42d251f59c3f0fb240b117905c76)！
