---
sidebar_position: 1
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiSupport from "/docs/_support.mdx";
import HaiLocalization from "/src/components/HaiLocalization";

# Skinned Mesh Constraint Builder

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={true} />

Skinned Mesh Renderer の最も近いポリゴンと同様に動くように重み付けされた Parent Constraint を作成します。

オブジェクトを体にアタッチする際、ボーンへの親子付けほど単純ではないと感じた場合にこのコンポーネントを使用してください。

これはブレンドシェイプの動きには追従**せず**、クロス（Cloth）メッシュの動きにも追従**しません**。

:::tip[互換性に関する注意]
- Unity 2020、Unity 2022、および Unity 6 で動作確認済みであり、それ以降のバージョンでも動作するはずです。
- <HaiTag requiresVRChat={true} short={true} /> および <HaiTag requiresBasis={true} short={true} /> プロジェクトでの動作を確認しています。他のアプリケーションでも互換性がある可能性があります。
:::

<HaiVideo src="../img/oSEDSUFVRj.mp4"></HaiVideo>

![Unity_4rDudyR3MY.png](/assets/docs/products/constraint-tools/Unity_4rDudyR3MY.png)

## ダウンロード

ツールは ALCOM を使用して無料でダウンロードできます。[Booth.pm でもダウンロード可能](https://hai-vr.booth.pm/items/8628778)です。

### ALCOM

- このリンクを使用して **[ALCOM にリスティングをインストール](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)** してください。
- ALCOM を使用して *Haï ~ Skinned Mesh Constraint* をプロジェクトに追加してください。

## 使い方

このコンポーネントは、*Skinned Mesh Constraint Builder* コンポーネントを配置したのと同じオブジェクトに Parent Constraint を生成します。

Parent Constraint は、最も近いポリゴンのボーンウェイトを再利用することで、メッシュ自体と同様の方法でウェイトが塗られるように構成されます。

オブジェクトを体にアタッチする際、ボーンへの親子付けほど単純ではないと感じた場合にこのコンポーネントを使用してください。

<HaiSupport/>

このコンポーネントを使用するには：
- Constraint を適用したい GameObject に "Skinned Mesh Constraint Builder" コンポーネントを追加します。
- *Source Mesh*（ソースメッシュ）フィールドで、このオブジェクトをアタッチしたいポリゴンを含む Skinned Mesh Renderer を選択します。
- 理想的には、そのオブジェクトの原点は、アタッチしたいポリゴンの近くに既にある必要があります。
    - オブジェクトの原点を変更できない場合は、*Sampler Offset*（サンプラーオフセット）フィールドにオフセットを追加して、その面に近づけます。
- *Create Parent Constraint*（Parent Constraintを作成）ボタンをクリックします。
- 完了した場合、この *Skinned Mesh Constraint Builder* は削除できます。または、将来の参考のためにアバターに残しておくこともできます。
    - このコンポーネントはビルド時には影響しません。

:::warning
Constraint の *Activate* ボタンは**押さないでください**！

*Skinned Mesh Constraint Builder* は、*Activate* ボタンで発生する問題を回避するために、Constraint のオフセットを手動で計算します（*[詳細はこちら](/docs/research/other/constraint-activate.md)*）。
:::

<HaiVideo src="../img/s21QFOIwqK.mp4" autoWidth={true}></HaiVideo>
> 🟧 *修正前* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🟦 *修正後*
>
> このアバターで GameObject を Hip ボーンの親子にすると、足が回転した後に位置が正しくなくなります（🟧）。
> これは、メッシュのこの領域が Hip に加えて足にもウェイト付けされているためです。
>
> この Parent Constraint は最も近い面と同じボーンウェイトを使用するため、頂点のように動きます（🟦）。

## オプション：Bind Method（バインド方法）

デフォルトでは、Constraint のウェイトは、メッシュの最も近い三角形の 3 つの頂点に関連付けられたボーンをサンプリングし、重心座標を使用して重み付けされます。

最も近い面の代わりに最も近い頂点を使用したい場合は、*Bind Method*（バインド方法）を *Closest Vertex*（最も近い頂点）に変更してください。

*Create* または *Update* をクリックすると、選択された三角形または頂点が 5 秒間表示されます。

## オプション：Vendor（ベンダー）

プロジェクトに <HaiTag requiresVRChat={true} short={true} /> Avatars SDK 3.7.3 以上がインストールされている場合、Unity の *Parent Constraint* の代わりに *VRC Parent Constraint* を作成します。

Constraint を作成する前に *Vendor*（ベンダー）フィールドを *Unity* に変更することで、この動作を上書きし、Unity の *Parent Constraint* を作成するようにできます。

## 詳細情報

- [Parent Constraint の「Activate」ボタンについて](/docs/research/other/constraint-activate.md)。

## バージョン

- **1.2.0**: VRCSDK 3.10 がインストールされている場合に導入された破壊的変更との互換性を修正。
- **1.0.1**: 追加。

分類：*このコンポーネントはアプリケーションに依存しません。*
