---
title: Lightbox Viewer URP
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 1.0.0-beta.4

- Adaptive Probe Volumes 配置更改：
  - 启用了填充空白空间（Fill empty spaces）。
  - 减小了边界（Bounds）尺寸。
  - 间距更改为 0.1m。
- 场景已在 6000.4.11f1 中重新烘焙。

## 1.0.0-beta.3

- 重新烘焙 URP Light Probe 场景反射探针。
- 现在需要 Lightbox Viewer 2.5.0-beta.2 来修复叠加场景中 URP Adaptive Probe Volumes 的问题，该问题曾导致 lilToon 2.3.0 预览不正确。

## 1.0.0-beta.2

- 现在需要 Lightbox Viewer 2.5。

## 1.0.0-beta.1

- Lightbox Viewer URP 现在通过由 Lightbox Viewer 2.5 动态加载的两个不同场景同时支持 Light Probes 和 Adaptive Probe Volumes。

## 1.0.0-alpha.6

- 在 Unity 6.2 中重新烘焙场景。

## 1.0.0-alpha.5

- 修复了 package.json，现在指定 Unity 6。

## 1.0.0-alpha.4

- 最低需要 Lightbox Viewer 2.4.1-alpha.2。

## 1.0.0-alpha.3

- 最低需要 Lightbox Viewer 2.4.2-alpha.2。

## 1.0.0-alpha.2

- 修复了反射探针框尺寸不再引起光泽（sheen）的问题。

## 1.0.0-alpha.2

- 开始添加带 APV 的 URP 灯光箱场景：
  - 这使用 URP Adaptive Probe Volumes 而不是灯光探针。它仅适用于支持 APV 的着色器。
  - Poiyomi URP：截至 2025-07-10，仅适用于 Poiyomi URP *070825* 或更高版本。
  - ~~lilToon URP：截至 2025-07-10，尚不支持 lilToon URP。~~
  - lilToon URP：截至 2025-10-06，APV 将支持 lilToon URP *2.3.0* 或更高版本。
