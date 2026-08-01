---
title: Lightbox Viewer URP
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 1.0.0-beta.4

- Adaptive Probe Volumes の設定変更:
  - Fill empty spaces を有効化。
  - Bounds の寸法を縮小。
  - Spacing を 0.1m に変更。
- シーンを 6000.4.11f1 で再ベイクしました。

## 1.0.0-beta.3

- URP Light Probe シーンの反射プローブを再ベイクしました。
- 加算シーンにおける URP Adaptive Probe Volumes の問題（lilToon 2.3.0 のプレビューが正しくなかった問題）を修正するため、Lightbox Viewer 2.5.0-beta.2 以降が必須となりました。

## 1.0.0-beta.2

- Lightbox Viewer 2.5 が必須となりました。

## 1.0.0-beta.1

- Lightbox Viewer URP は、Lightbox Viewer 2.5 によって動的にロードされる 2 つの異なるシーンを通じて、Light Probes と Adaptive Probe Volumes の両方をサポートするようになりました。

## 1.0.0-alpha.6

- シーンを Unity 6.2 で再ベイクしました。

## 1.0.0-alpha.5

- package.json が Unity 6 を指定するように修正しました。

## 1.0.0-alpha.4

- 最小要件として Lightbox Viewer 2.4.1-alpha.2 が必要になりました。

## 1.0.0-alpha.3

- 最小要件として Lightbox Viewer 2.4.2-alpha.2 が必要になりました。

## 1.0.0-alpha.2

- 反射プローブのボックスサイズが光沢（sheen）を引き起こさなくなるよう修正しました。

## 1.0.0-alpha.2

- APV を使用した URP ライトボックスシーンの追加を開始:
  - これはライトプローブの代わりに URP Adaptive Probe Volumes を使用します。APV をサポートするシェーダーでのみ動作します。
  - Poiyomi URP: 2025-07-10 時点で、Poiyomi URP *070825* 以降でのみ動作します。
  - ~~lilToon URP: 2025-07-10 時点で、lilToon URP ではまだ動作しません。~~
  - lilToon URP: 2025-10-06 時点で、lilToon URP *2.3.0* 以降で APV が動作するようになりました。
