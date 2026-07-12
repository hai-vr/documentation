---
title: スキン済みオフセットで有効化
sidebar_position: 2
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiSupport from "/i18n/ja/docusaurus-plugin-content-docs/current/_support.mdx";
import HaiLocalization from "/src/components/HaiLocalization";

# スキン済みオフセットで Constraint を有効化 (メニューオプション)

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} />

*この機能は上級者向けです。*

Parent Constraint コンポーネント（および <HaiTag requiresVRChat={true} short={true} /> Avatars SDK がインストールされている場合は VRC Parent Constraint コンポーネント）のインスペクターに新しいメニューオプションが追加されます。

このメニューオプションを押すと、Parent Constraint の *Activate* ボタンと同様に動作しますが、**異なるオフセットを計算します**。
これらのオフセットにより、Parent Constraint がウェイトペインティングやメッシュスキニングに近い挙動を示すようになります。

これは [Skinned Mesh Constraint Builder](./skinned-mesh-constraint) コンポーネントで使用されているのと同じアルゴリズムです。
既にそのコンポーネントを使用している場合は、これを使用する必要はありません。

:::tip[互換性に関する注意]
- Unity 2020、Unity 2022、および Unity 6 で動作確認済みであり、それ以降のバージョンでも動作するはずです。
- <HaiTag compatibleWithVNyan={true} short={true} />、<HaiTag requiresVRChat={true} short={true} />、および <HaiTag requiresBasis={true} short={true} /> プロジェクトでの動作を確認しています。他のアプリケーションでも互換性がある可能性があります。
:::

<HaiVideo src="../img/cJQrFaJahI.mp4"></HaiVideo>

*デフォルトの Activate ボタンと「スキン済みオフセットで有効化」の比較。*

## ダウンロード

ツールは ALCOM を使用して無料でダウンロードできます。

### ALCOM

- このリンクを使用して **[ALCOM にリスティングをインストール](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)** してください。
- ALCOM を使用して *Haï ~ Skinned Mesh Constraint* をプロジェクトに追加してください。

## 使い方

Parent Constraint のインスペクターに新しいメニューオプションが追加されます。

![mspaint_US2AvDUNAt.png](/assets/docs/products/constraint-tools/mspaint_US2AvDUNAt.png)

- まだ有効化していない *Parent Constraint* または *VRC Parent Constraint* コンポーネントを作成または編集します。
  - ソースとソースのトランスフォームを追加し、各ソースにウェイトを割り当てます。
- *Parent Constraint* コンポーネントの 3 つの垂直なドット `⋮` をクリックし、*Haï Activate with Skinned Offsets* を選択します。
- これで Constraint が有効化されました。**Activate ボタンは押さないでください！**

:::warning
その Constraint の *Activate* ボタンは**押さないでください**！

これは、*Activate* ボタンで発生する問題を回避するために、Constraint のオフセットを手動で計算します（*[詳細はこちら](/docs/research/other/constraint-activate.md)*）。
:::

## 詳細情報

- [Parent Constraint の「Activate」ボタンについて](/docs/research/other/constraint-activate.md)。

## バージョン

- **1.1.0**: 追加。

分類：*この機能はアプリケーションに依存しません。*
