---
title: Blendshape Viewer (V3)
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";
import HaiSupport from "/docs/_support.mdx";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

*Blendshape Viewer* を使用すると、ブレンドシェイプがモデルのどのエリアに影響するかを視覚化し、その値を微調整できます。

:::tip[互換性に関する注意]
- Unity 2022 および Unity 6.4 で動作確認済みであり、それ以降のバージョンでも動作するはずです。
- 🌊 特定のゲーム向け SDK は不要です。
- Unity 2022 未満のバージョンを使用する場合は、バージョン 2.1.2 を使用する必要があります。
:::

![Unity_Q4csWb8ty6.png](/assets/docs/products/blendshape-viewer/v3/Unity_Q4csWb8ty6.png)

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-25-45_Je9CWGeOH8.mp4"></HaiVideo>

## ダウンロード

このツールは [Booth.pm](https://hai-vr.booth.pm/items/3582541) でダウンロードできます：

ALCOM経由でインストールすることもできます：
- このリンクを使用して**[リポジトリリストをALCOMにインストール](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**してください。
- ALCOMを使用して *Haï ~ Blendshape Viewer* をプロジェクトに追加してください。

<HaiSupport/>

## 使い方

### プレビューするオブジェクトを選択する

プレビューしたい *SkinnedMeshRenderer* を選択します。インスペクターで 3 つの点（コンテキストメニュー）をクリックし、「Haï Blendshape Viewer」を選択します。

![how_to_open](/assets/docs/products/blendshape-viewer/v3/how_to_open.png)

### シーンビューをメッシュに合わせる

Scene タブを使用してメッシュにフォーカスするように周囲を見渡し、*更新* ボタンを押してサムネイルをリフレッシュします。サムネイルはシーンビューと同じカメラ設定を使用します。

サムネイルを大きくしたい場合は、*サムネイルサイズ* スライダーを変更し、再度 *更新* ボタンを押してください。

:::tip
より良い結果を得るために、Scene カメラの視野角 (Field of View) を変更できることを覚えておいてください。

![field_of_view](/assets/docs/products/blendshape-viewer/Untitled_5.png)
:::

### どのブレンドシェイプがどのエリアに影響するかを確認する

デフォルトでは、サムネイルに差異が表示されます。これを望まない場合は、*差異を表示* のチェックを外してください。

*Blendshape Viewer* ウィンドウ内にカーソルを置いた状態で ALT キーを押すと、差異がある場所をより正確に表示できます。

![alt](/assets/docs/products/blendshape-viewer/v3/alt.png)

### ブレンドシェイプを検索する

*検索* フィールドに入力して、ブレンドシェイプ名で結果をフィルタリングします。

検索語句をスペースで区切ることができます。検索クエリ `eye down` で `eye_lookdown` のような結果を見つけることができます。

### ブレンドシェイプ名をコピーする

**クリップボードアイコン** をクリックして、ブレンドシェイプ名をコピーします。

あるいは、ブレンドシェイプ名が含まれるテキストを選択することもできます。

### ブレンドシェイプの値を変更する

各ブレンドシェイプの下にあるスライダーは、シーン内のそのブレンドシェイプの値を変更します。

これはアニメーションの録画中にも使用できます。

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-18-15_4Kdbs1Hlck.mp4"></HaiVideo>

## 謝辞

- [Compute Shader](https://github.com/hai-vr/blendshape-viewer/commit/46db696df8be42d251f59c3f0fb240b117905c76) を提供してくれた [Pema](https://github.com/pema99/) に感謝します！
