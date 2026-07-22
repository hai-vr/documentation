---
title: Blendshape Viewer
---
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 3.0.0-beta.4

功能：
- 添加了仅显示值不为零的混合形状（blendshape）的按钮。

变更：
- 将抗锯齿从 8 更改为 4。
- 为 ALT 键添加了多个选项。
  - 添加了显示原图的选项。这现在是默认设置。
  - 添加了禁用 ALT 键功能的选项。
  - 高亮热点的选项已从复选框更改为两个选项。

修复：
- 修复了计算着色器（Compute Shader）不应在不受支持的环境中运行的问题。

## 3.0.0-beta.3

修复：
- 修复了计算着色器（Compute Shader）中抗锯齿需要更大容差（tolerance）的问题。
- 修复了不正确的 RenderTexture 释放调用。

## 3.0.0-beta.2

变更：
- 变亮的区域使用黄色显示，变暗的区域使用红色显示。
- 确保相机开启抗锯齿以生成缩略图。

## 3.0.0-beta.1

重大变更：
- 不再支持 Unity 2019。最低要求 Unity 2022。

优化：
- 在包含大量混合形状（已使用 700 个混合形状进行测试）的模型上，UI 现在运行速度更快。
- 渲染持续时间现在应该更快。
  - 由于 Animation Mode 垃圾回收的特性，如果 Blendshape 窗口已经打开，渲染曾经会很慢。
  - 现在不再使用 Unity 的 Animation Mode 来渲染缩略图。

功能：
- 按下 ALT 键现在将以黄色显示受混合形状影响的区域。
- 复选框状态现在会在编辑器会话之间保存。
- 添加本地化。

变更：
- 在支持计算着色器（Compute Shader）的计算机上现在始终使用计算着色器。
- 如果混合形状缩略图上没有明显变化，缩略图现在看起来会更暗。
- “鼠标移入时自动更新（Auto Update On Focus）”现在默认关闭。
- 窗口现在称为 “Blendshape Viewer” 而不是 “BlendshapeViewer”。

修复：
- 当窗口在自动更新状态下获得焦点时，更新现在会延迟以防止重复刷新。

## 2.1.2

- 修复了当搜索结果为 0 时不再产生布局错误。
- 防止用户误将一整页无关内容粘贴到搜索栏时导致编辑器挂起。
  - 搜索查询现在限制为最多 100 个字符。

## 2.1.1

- 修复了未选择网格（Mesh）时的错误。

## 2.1.0

添加搜索和复制到剪贴板：
- 添加搜索栏。
- 添加“复制到剪贴板”按钮。

## 2.0.3

- 修复了头像上传失败的问题。
  - 修复了构建时脚本现在的编译问题。

## 2.0.2

- Blendshape Viewer 的第一个公开 VCC 版本。
  - VCC 安装会从 Assets/ 中删除此工具之前的安装。
  - 此工具现在位于 Packages/ 中。
