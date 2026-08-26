---
sidebar_position: 30
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

# BasisプロジェクトでのModular Avatar使用ガイド

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

*Modular Avatar* はBasisプロジェクトでは公式にサポートされていません。

このページは、BasisプロジェクトでModular Avatarを動作させるための非公式なガイドです。

:::danger
Basisプロジェクトには**絶対に** VRChat SDKをインストールしないでください。インストールすると、**プロジェクト設定が書き換えられ、元に戻すことができなくなります**。

これは、VRChat SDKがアセットやシェーダーをVRChatプラットフォーム内で動作するようにビルドするために、Unityプロジェクトの設定を専用に準備するためです。
:::

## Unity 6.5 (2026年8月26日時点のBasis Frameworkのバージョン)

2026年8月26日現在、Basis FrameworkはUnity 6.5で動作していますが、このバージョンのUnityでは破壊的な変更が導入されています。

本稿執筆時点（2026年8月26日）では、Modular AvatarとNDMFはUnity 6.5と互換性がありません。

以下に示すように、Modular AvatarとNDMFの非公式バージョンをインストールする必要がある場合があります。

ALCOMに以下のリスティングを追加してください：

```
https://hai-vr.github.io/unofficial-modular-avatar-basis-listing/index.json
```

（[このリスティングのGitHubリポジトリを確認](https://github.com/hai-vr/unofficial-modular-avatar-basis-listing)することで、内容を監査できます）

次に、以下のバージョンをインストールしてください：
- NDMF **1.14.6-unofficial.basis.1** (https://github.com/hai-vr/ndmf/releases でホストされています)
- Modular Avatar **1.18.3-unofficial.basis.1** (https://github.com/hai-vr/modular-avatar/releases でホストされています)

また、以下もインストールしてください：
- [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) **1.2.0** ([ここから直接ダウンロード](https://github.com/hai-vr/chillaxins/releases/download/1.2.0/dev.hai-vr.chillaxins-1.2.0.unitypackage))

Modular AvatarやNDMFのより新しいバージョンが動作する可能性もありますが、Unity 6.4や6.5へのインストールはModular Avatarによって公式にサポートされていないため、各自で検証する必要があります。

![mspaint_tzwtFeXOnl.png](/assets/docs/basis/mspaint_tzwtFeXOnl.png)

### Modular Avatar Shape Changer を使用しないでください

Modular Avatar には [Shape Changer](https://modular-avatar.nadena.dev/docs/reference/reaction/shape-changer) という名前のコンポーネントがあります。

Basis Framework はアバターメッシュの簡略版（LOD）を生成しますが、本稿執筆時点（2026年8月26日）では、Modular Avatar はこれらの簡略版を認識しません。その結果、Shape Changer の影響を受けるメッシュにおいて、簡略版と詳細版が同時に表示されてしまう可能性があります。

このため、Modular Avatar Shape Changer や、Modular Avatar に含まれるその他の同様のメッシュ改変ツールは使用できない場合があります。

![fTKJolFI4M.png](/assets/docs/basis/fTKJolFI4M.png)

## Unity 6.4 (以前のバージョンのBasis Framework)

Unity 6.4をまだ使用している古いバージョンのBasis Frameworkを使用している場合、以下のバージョンが動作することが確認されていました：

- [Modular Avatar](https://modular-avatar.nadena.dev/docs/intro) **1.17.0-beta.0**
- [NDMF](https://modular-avatar.nadena.dev/docs/intro) **1.11.0**
- [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) **1.2.0** ([ここから直接ダウンロード](https://github.com/hai-vr/chillaxins/releases/download/1.2.0/dev.hai-vr.chillaxins-1.2.0.unitypackage))
