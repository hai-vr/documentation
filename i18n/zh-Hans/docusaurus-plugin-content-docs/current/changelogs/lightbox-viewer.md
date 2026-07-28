---
title: Lightbox Viewer
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 2.5.0-beta.4

添加强制抗锯齿选项。这可能对某些独立项目设置（例如 Basis Framework 项目）有所帮助。

## 2.5.0-beta.3

在编辑模式下，隐藏在场景层级选项卡中通过可见性图标隐藏的对象。

修复：对象更改事件不应再在播放模式下触发，这曾导致日志中出现错误。

## 2.5.0-beta.2

修复了叠加场景中 URP Adaptive Probe Volumes 的一个问题，该问题曾导致 lilToon 2.3.0 预览不正确。

- 修复了默认光照数据对叠加场景中 Adaptive Probe Volumes 的负面影响：
  - 默认场景分配了一个默认光照数据资产。
  - 此默认光照数据会导致渲染效果不同，这在 lilToon 2.3.0 上最为明显。
  - 通过检查场景当前是否使用默认光照数据进行修复。如果是，则在 lightbox 使用期间将其设为 null。
  - 这应该能修复 Lightbox Viewer URP 中的 https://github.com/hai-vr/lightbox-viewer-urp/issues/1。

## 2.5.0-beta.1

Lightbox Viewer 现在兼容：
- BIRP Light Probes。
- BIRP VRCLV。
- URP Adaptive Probe Volumes。
- URP Light Probes。

添加对 URP Light Probes 的支持：
- 如果 URP 是当前渲染管线，且质量设置使用 Light Probes 而不是 Adaptive Probe Volumes，则切换到不同的场景。
- 如果项目中存在 URP，检测质量设置的更改。

与之前的 alpha 版本建议不同，由于兼容性尝试失败，这仍然不兼容 macOS。

按时间顺序重复 alpha 版本的先前更改日志，不含 macOS 更改：

*源自 2.4.1-alpha.1：*

- 更改编辑模式策略以提高性能：
    - 以前，编辑模式每一帧都会复制化身，以免意外修改化身。
    - 此更改现在如果“要查看的对象”引用未更改，则将化身复制到层级中标记为“不保存”的隐藏游戏对象中。
    - 使用对象更改事件来检测场景中的任何更改。如果有任何与非变换相关的更改，我们将销毁复制的对象并创建一个新对象。
    - 此复制对象在渲染周期之间向下移动 10,000 个单位。
    - 不要在渲染周期之间禁用原始化身，因为启用化身很慢。
    - 在副本中移除 Animator，因为它们需要时间绑定且我们不需要它们。

*源自 2.4.1-alpha.2：*

- 添加对 URP 项目的支持：
    - 检测项目是否为 BIRP。
    - 如果不是 BIRP，不建议安装 Post-Processing V2 包。
    - 如果不是 BIRP，即使安装了 Light Volumes 包，也加载 URP 场景。

*源自 2.5.0-alpha.2：*

- 尝试进行一项优化，消除将纹理从 GPU 复制到 CPU 的需要。

*源自 2.5.0-alpha.3：*

- 尝试修复 Unity 6.2 Basis 项目中深度影响视图渲染的问题。

## 2.5.0-alpha.3

- 尝试修复 Unity 6.2 Basis 项目中深度影响视图渲染的问题。

## 2.5.0-alpha.2

尝试进行一项优化，消除将纹理从 GPU 复制到 CPU 的需要。

这也可以改善对 macOS 上 Metal 的支持，因为 2.5.0-alpha.1 中引入的更改可能无效。

## 2.5.0-alpha.1

尝试支持没有异步 GPU 回读的系统：
- 尝试支持 macOS 上的 Metal，它似乎没有异步 GPU 回读。

*源自 2.4.1-alpha.2：*

- 添加对 URP 项目的支持：
  - 检测项目是否为 BIRP。
  - 如果不是 BIRP，不建议安装 Post-Processing V2 包。
  - 如果不是 BIRP，即使安装了 Light Volumes 包，也加载 URP 场景。

*源自 2.4.1-alpha.1：*

- 更改编辑模式策略以提高性能：
  - 以前，编辑模式每一帧都会复制化身，以免意外修改化身。
  - 此更改现在如果“要查看的对象”引用未更改，则将化身复制到层级中标记为“不保存”的隐藏游戏对象中。
  - 使用对象更改事件来检测场景中的任何更改。如果有任何与非变换相关的更改，我们将销毁复制的对象并创建一个新对象。
  - 此复制对象在渲染周期之间向下移动 10,000 个单位。
  - 不要在渲染周期之间禁用原始化身，因为启用化身很慢。
  - 在副本中移除 Animator，因为它们需要时间绑定且我们不需要它们。

- 修复垂直位移无法重置的问题。

## 2.4.1-alpha.2

添加对 URP 项目的支持：
- 检测项目是否为 BIRP。
- 如果不是 BIRP，不建议安装 Post-Processing V2 包。
- 如果不是 BIRP，即使安装了 Light Volumes 包，也加载 URP 场景。

## 2.4.1-alpha.1

- 更改编辑模式策略以提高性能：
  - 以前，编辑模式每一帧都会复制化身，以免意外修改化身。
  - 此更改现在如果“要查看的对象”引用未更改，则将化身复制到层级中标记为“不保存”的隐藏游戏对象中。
  - 使用对象更改事件来检测场景中的任何更改。如果有任何与非变换相关的更改，我们将销毁复制的对象并创建一个新对象。
  - 此复制对象在渲染周期之间向下移动 10,000 个单位。
  - 不要在渲染周期之间禁用原始化身，因为启用化身很慢。
  - 在副本中移除 Animator，因为它们需要时间绑定且我们不需要它们。

- 修复垂直位移无法重置的问题。

## 2.4.0

- 添加灯箱集合。用户现在可以从默认的六个灯箱切换到其他更专业的灯箱。
  - 添加专门用于 Light Volumes 的特殊灯箱。这需要安装 Light Volumes 包。
  - 公开之前隐藏的 Spotlight Cookie 灯箱。
- 以前，被查看对象内部的灯光会被禁用。现在默认情况下不再如此。
- 添加禁用被查看对象内部灯光的选项。
- 添加支持需要深度纹理的着色器的选项。
  - 这使用 [Poiyomi 的 DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) 灯光设置，但使用不同的 GUID 重新打包以避免安装冲突。
- “高级”菜单现在是一个侧边栏。
- 一些设置现在保存在整个编辑器中，而不是在关闭 Lightbox Viewer 窗口时重置。
  - 这包括 *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*。

![Unity_a6UfNnk6f1.png](/assets/docs/products/lightbox-viewer/Unity_a6UfNnk6f1.png)

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## 2.4.0-beta.2

- 修复了当重新加载域保持默认时，播放模式不显示集合的问题。

## 2.4.0-beta.1

- 添加灯箱集合。用户现在可以从默认的六个灯箱切换到其他更专业的灯箱。
  - 添加专门用于 Light Volumes 的特殊灯箱。这需要安装 Light Volumes 包。
  - 公开之前隐藏的 Spotlight Cookie 灯箱。
- 以前，被查看对象内部的灯光会被禁用。现在默认情况下不再如此。
- 添加禁用被查看对象内部灯光的选项。
- 添加支持需要深度纹理的着色器的选项。
  - 这使用 [Poiyomi 的 DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) 灯光设置，但使用不同的 GUID 重新打包以避免安装冲突。
- “高级”菜单现在是一个侧边栏。
- 一些设置现在保存在整个编辑器中，而不是在关闭 Lightbox Viewer 窗口时重置。
  - 这包括 *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*。

## 2.3.0

如果项目中安装了 [Light Volumes](https://github.com/REDSIM/VRCLightVolumes)，则添加支持。

灯箱本身没有变化，所以差异很细微。
粉红色场景最为明显，因为左手会被照成粉红色，右手会被照成紫色。

:::warning
如果你希望**预览**使用 light volumes，请理解*与化身上传不同*，仅拥有 lilToon 1.10 等兼容着色器是不够的；
你需要在化身项目中安装实际的 [Light Volumes 包](https://github.com/REDSIM/VRCLightVolumes?tab=readme-ov-file#installation-through-vrchat-creator-companion)。
:::

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>

*使用 light volumes：*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*不使用 light volumes：*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

## 2.3.0-beta.2

修复“加载 LightingData.asset 时发生未知错误”：
- 使用单独的 .lighting 文件重新烘焙场景。
- 这应该能解决“加载 LightingData.asset 时发生未知错误”的问题。

## 2.3.0-beta.1

如果项目中安装了 Light Volumes，则添加支持。

灯箱本身没有变化，所以差异很细微。
粉红色场景最为明显，因为左手会被照成粉红色，右手会被照成紫色。

*使用 light volumes：*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*不使用 light volumes：*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

- 添加支持 Light Volumes 的场景：https://github.com/REDSIM/VRCLightVolumes
  - 场景烘焙方式与主场景不同，因为它使用 Progressive GPU 而非 CPU。
  - 场景包含禁用 Light Volumes 的非活动灯箱。
- 如果安装了 0.7.2 或更高版本的 Light Volumes 包，默认选择此场景。

## 2.2.0

通过从副本中移除所有 MonoBehaviour 来尝试提高编辑模式下的速度：
- 尝试通过从副本中移除所有 MonoBehaviour 来提高编辑模式下的运行速度，这样就不会调用 OnEnable/OnDestroy。
- 这是通过在从副本中移除所有 MonoBehaviour 之前将副本设为已禁用父对象的子对象来实现的。

## 2.1.0

在 Unity 2022 中重新烘焙 Lightbox 场景的光照：
- 当前光照贴图在 Unity 2022 中似乎表现异常，尤其是 White box。
- 光照已在 Unity 2022 中重新烘焙。
- 该包现在被归类为 Unity 2022.3 包。

## 2.0.2

- 修复化身无法上传的问题。
  - 修复构建时脚本编译的问题。

## 2.0.1

- Lightbox Viewer 的首个公开 VCC 版本。
  - VCC 安装会从 Assets/ 中移除此工具的先前安装
  - 此工具现在位于 Packages/ 中
