---
title: Lightbox Viewer
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} />

*Lightbox Viewer*（ライトボックス・ビューアー）を使用すると、さまざまな照明条件下でのシェーダーマテリアル設定の変化を同時に視覚化できます。

:::tip[互換性に関する注意事項]
- Unity 2019、Unity 2022、および Unity 6 で動作確認済みであり、それ以降のバージョンでも動作するはずです。
- 🌊 特定のゲーム用 SDK は不要です。
- <HaiTag requiresBasis={true} short={true} /> プロジェクトの場合、[URP モジュール](lightbox-viewer/urp)が必要です。
:::

## ダウンロード

ツールは無料でダウンロードできます。ALCOM を使用してダウンロードすることも可能です。

### 直接ダウンロード

- GitHub ([hai-vr/lightbox-viewer](https://github.com/hai-vr/lightbox-viewer))

### ALCOM

- このリンクを使用して **[ALCOM にリスティングをインストール](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)** してください。
- ALCOM を使用してプロジェクトに *Haï ~ Lightbox Viewer* を追加します。

## 使い方

### Lightbox Viewer でマテリアルをテストする

まず、オブジェクトを選択し、Transform コンポーネントの横にある 3 つの垂直な点 `⋮` をクリックして、*Haï LightboxViewer* を選択します。

![image](/unsorted_ghc/168523708-b1f94066-af60-49f2-9d04-73763eba20dc.png)

次に、*Activate LightboxViewer* を押します。これで、シーンカメラを動かして構図を変えたり、オブジェクトを動かしたりして、ライティングテストをリアルタイムで行うことができます。

このモードが有効な間は、エディタが重くなることがあります。使用しないときは再度 *Activate LightboxViewer* を押して、エディタのパフォーマンスを向上させてください。

<HaiVideo src="../../static/unsorted_ghc/githubio/sx_2022-05-16_07-18-28_Sda2clkyuk.mp4"></HaiVideo>

### 再生モード（Play mode）でテストする

*Lightbox Viewer* は再生モードでも使用できます。再生モードに入る前に *Activate LightboxViewer* を押してください。

<HaiVideo src="../../static/unsorted_ghc/githubio/sx_2022-05-16_07-24-50_VDkm4dNnOs.mp4"></HaiVideo>

<HaiSupport />

### ポストプロセッシング

ポストプロセッシング（Post Processing）がインストールされていない場合は、*Install Post-processing* を押すことができます。これにより、カラーグレーディング、ブルーム、その他のエフェクトをテストできるようになります。

*Post Processing* チェックボックスを使用して、オンとオフを切り替えます。

![image](/unsorted_ghc/168622378-444d3c29-f6bc-44ae-aae3-8233ef6f1724.png)

### 小さなオブジェクトを地面から浮かせる

小さなオブジェクトをテストする場合、地面に埋まってしまうことがあります。*Advanced* を押し、*Vertical Displacement* スライダーを変更して地面から浮かせます。

![image](/unsorted_ghc/168845888-17b8cf4b-de34-4614-b54b-b18a8dd551a9.png)

### ライトボックスのコレクションを切り替える

<HaiStartingFromTag version={"2.4.0"} />

左側に *Collections* というセクションがあります。これを使用して、テストに使用するライトボックスのセットを切り替えることができます。

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## 高度な使い方

### カメラロール

Camera Roll を使用するとカメラを回転させることができます。これは、一部のシェーダーの挙動をテストするために使用できます。特に、一部の matcap シェーダーは、VR で頭を横に傾けたときに奇妙に見えることがあります。

デフォルトでは *Counter-rotate* オプションが有効になっており、カメラが回転してもプレビューは直立したまま維持されます。

*Reset* を押すと、ビューを直立状態に戻します。

<HaiVideo src="../../static/unsorted_ghc/githubio/sx_2022-05-16_07-52-09_k7AkO3iYda.mp4"></HaiVideo>

### カスタムカメラ設定

カメラ設定（MSAA、HDR など）を微調整する必要がある場合は、*Advanced > Reference Camera* で参照カメラを選択できます。

これにより、ニアクリッププレーンやファークリッププレーンを含むほとんどのカメラ設定が使用されます。操作自体は引き続きシーンカメラで行います。

### オブジェクト移動後の再整列

動作中に *Advanced > Realign* をクリックすると、オブジェクトが移動した後にライトボックスをオブジェクトの中心に戻すことができます。

### 深度テクスチャのサポート（Support Depth Texture）

<HaiStartingFromTag version={"2.4.0"} />

[Poiyomi SSAO](https://www.poiyomi.com/shading/ssao) などの一部のシェーダーは、動作させるために特別なプレハブを必要とします。

*Advanced > Support Depth Texture* を有効にすることで、これらのシェーダー機能が動作するようにできます。

### オブジェクト内のライトを消灯する（Mute Lights Inside Object）

<HaiStartingFromTag version={"2.4.0"} />

オブジェクト内部のライトがライトボックスの見た目に干渉することがあります。

*Advanced > Mute Lights Inside Object* を有効にすると、プレビューのレンダリング時にオブジェクト内のライトを一時的にオフにします。

## ライトボリューム（Light Volumes）

<HaiStartingFromTag version={"2.3.0"} />

プロジェクトに [Light Volumes](https://github.com/REDSIM/VRCLightVolumes) パッケージ（0.7.2 以上）がインストールされている場合、ライトボックスはライトボリュームをサポートします。

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>
