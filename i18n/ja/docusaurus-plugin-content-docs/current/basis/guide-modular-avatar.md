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

2026年4月28日現在、以下のパッケージをインストールすることで、BasisでModular Avatarが動作することが確認されています：

- [Modular Avatar](https://modular-avatar.nadena.dev/docs/intro) **1.17.0-beta.0**
- [NDMF](https://modular-avatar.nadena.dev/docs/intro) **1.11.0**
- [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) **1.2.0** ([ここから直接ダウンロード](https://github.com/hai-vr/chillaxins/releases/download/1.2.0/dev.hai-vr.chillaxins-1.2.0.unitypackage))

これらはすべて、希望すればALCOM経由でインストール可能です。

Modular AvatarやNDMFのより新しいバージョンが動作する可能性もありますが、Unity 6.4や6.5へのインストールはModular Avatarによって公式にサポートされていないため、各自で検証する必要があります。たまたまこれらの特定のバージョンが、追加のパッチなしで動作しています。
