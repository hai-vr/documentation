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

2026年8月30日現在、Basis FrameworkはUnity 6.5で動作していますが、このバージョンのUnityでは破壊的な変更が導入されています。

Modular Avatarは、デフォルトでUnity 6.5のBasisで動作することが確認されています。最新バージョンのModular Avatarを使用してください：

- [Modular Avatar](https://modular-avatar.nadena.dev/docs/intro) **1.18.5** 以上のバージョン
- [NDMF](https://modular-avatar.nadena.dev/docs/intro) **1.14.8** 以上のバージョン

その後、NDMFパッケージフォルダ内にある `SetupStandalone.ps1` を実行してください。
