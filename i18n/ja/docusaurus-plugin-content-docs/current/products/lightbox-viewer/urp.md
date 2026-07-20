---
title: URP版 Lightbox Viewer
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiTags>
<HaiTag requiresBasis={true} short={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} />

*Lightbox Viewer*（ライトボックス・ビューアー）は、Unity 6.4 の URP プロジェクトで動作します。

Quality 設定に基づき、*Adaptive Probe Volumes* と *Light Probes* の両方をサポートしています。

:::warning[互換性に関する注意事項]
- Unity 6.4 でのみ動作確認されています。古いバージョンでは動作しない可能性があります。
- このツールは、これまでのところ <HaiTag requiresBasis={true} short={true} /> プロジェクトでのみテストされています。Basis 以外のプロジェクトでも動作するはずですが、テストは行われていません。
:::

## ダウンロード

ツールは ALCOM を使用して無料でダウンロードできます。

### ALCOM

- このリンクを使用して **[ALCOM にリスティングをインストール](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)** してください。
- ALCOM を使用して、プロジェクトに *Haï ~ Lightbox Viewer URP for the Basis framework* を追加します。

## Adaptive Probe Volumes

Quality 設定で **Adaptive Probe Volumes** を使用している場合は、Adaptive Probe Volumes をサポートするシェーダーを使用する必要があります。

- **Poiyomi URP**: ✅ 2025-07-10 時点において、Poiyomi URP *9.3.48* 以上（旧バージョン 070825）で APV が動作します。
- **lilToon URP**: ✅ 2025-10-06 時点において、lilToon URP *2.3.0* 以上で APV が動作します。
