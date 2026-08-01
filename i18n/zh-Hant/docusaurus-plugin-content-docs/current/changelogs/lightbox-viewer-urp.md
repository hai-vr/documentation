---
title: Lightbox Viewer URP
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 1.0.0-beta.4

- Adaptive Probe Volumes 配置更改：
  - 啟用了填充空白空間（Fill empty spaces）。
  - 減小了邊界（Bounds）尺寸。
  - 間距更改為 0.1m。
- 場景已在 6000.4.11f1 中重新烘焙。

## 1.0.0-beta.3

- 重新烘焙 URP Light Probe 場景反射探針。
- 現在需要 Lightbox Viewer 2.5.0-beta.2 來修復疊加場景中 URP Adaptive Probe Volumes 的問題，該問題曾導致 lilToon 2.3.0 預覽不正確。

## 1.0.0-beta.2

- 現在需要 Lightbox Viewer 2.5。

## 1.0.0-beta.1

- Lightbox Viewer URP 現在通過由 Lightbox Viewer 2.5 動態加載的兩個不同場景同時支持 Light Probes 和 Adaptive Probe Volumes。

## 1.0.0-alpha.6

- 在 Unity 6.2 中重新烘焙場景。

## 1.0.0-alpha.5

- 修復了 package.json，現在指定 Unity 6。

## 1.0.0-alpha.4

- 最低需要 Lightbox Viewer 2.4.1-alpha.2。

## 1.0.0-alpha.3

- 最低需要 Lightbox Viewer 2.4.2-alpha.2。

## 1.0.0-alpha.2

- 修復了反射探針框尺寸不再引起光澤（sheen）的問題。

## 1.0.0-alpha.2

- 開始添加帶 APV 的 URP 燈光箱場景：
  - 這使用 URP Adaptive Probe Volumes 而不是燈光探針。它僅適用於支持 APV 的著色器。
  - Poiyomi URP：截至 2025-07-10，僅適用於 Poiyomi URP *070825* 或更高版本。
  - ~~lilToon URP：截至 2025-07-10，尚不支持 lilToon URP。~~
  - lilToon URP：截至 2025-10-06，APV 將支持 lilToon URP *2.3.0* 或更高版本。
