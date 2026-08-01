---
title: Lightbox Viewer URP
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 1.0.0-beta.4

- Adaptive Probe Volumes 설정 변경:
  - Fill empty spaces 활성화.
  - Bounds 크기 축소.
  - Spacing을 0.1m로 변경.
- 6000.4.11f1에서 씬을 다시 베이크했습니다.

## 1.0.0-beta.3

- URP Light Probe 씬 리플렉션 프로브를 다시 베이크했습니다.
- 추가(additive) 씬에서 URP Adaptive Probe Volumes 문제로 인해 lilToon 2.3.0 프리뷰가 정확하지 않았던 문제를 해결하기 위해 이제 Lightbox Viewer 2.5.0-beta.2 이상이 필요합니다.

## 1.0.0-beta.2

- 이제 Lightbox Viewer 2.5가 필요합니다.

## 1.0.0-beta.1

- Lightbox Viewer URP는 이제 Lightbox Viewer 2.5에 의해 동적으로 로드되는 두 가지 다른 씬을 통해 Light Probes와 Adaptive Probe Volumes를 모두 지원합니다.

## 1.0.0-alpha.6

- Unity 6.2에서 씬을 다시 베이크했습니다.

## 1.0.0-alpha.5

- package.json이 이제 Unity 6를 지정하도록 수정했습니다.

## 1.0.0-alpha.4

- 최소 Lightbox Viewer 2.4.1-alpha.2가 필요합니다.

## 1.0.0-alpha.3

- 최소 Lightbox Viewer 2.4.2-alpha.2가 필요합니다.

## 1.0.0-alpha.2

- 리플렉션 프로브 박스 크기가 더 이상 광택(sheen)을 유발하지 않도록 수정했습니다.

## 1.0.0-alpha.2

- APV가 포함된 URP 라이트박스 씬 추가 시작:
  - 라이트 프로브 대신 URP Adaptive Probe Volumes를 사용합니다. APV를 지원하는 셰이더에서만 작동합니다.
  - Poiyomi URP: 2025-07-10 현재, Poiyomi URP *070825* 이상에서만 작동합니다.
  - ~~lilToon URP: 2025-07-10 현재, lilToon URP에서는 아직 작동하지 않습니다.~~
  - lilToon URP: 2025-10-06 현재, lilToon URP *2.3.0* 이상에서 APV가 작동합니다.
