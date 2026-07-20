---
sidebar_position: 20
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

# フェイストラッキング

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

アバターにフェイストラッキング用に設計されたブレンドシェイプがある場合、Basisがそれらを認識できるようにコンポーネントを追加する必要があります。

これには[VRCFaceTracking ソフトウェア](https://docs.vrcft.io/)が必要です。このガイドでは、VRCFaceTrackingおよび自身のハードウェアに既に習熟していることを前提としています。

## アバターのセットアップ

アバターをセットアップするには：

- アバター内に新しいGameObjectを作成します。*FaceTracking*など、好きな名前を付けます。
- **Automatic Face Tracking**コンポーネントを追加します。
- *Automatic Face Tracking*コンポーネントのインスペクターで、*"Create VRCFaceTracking JSON file"*ボタンを押します。

<HaiVideo src="./img/ShWakJTG9n.mp4" halfWidth={true}></HaiVideo>

*Automatic Face Tracking*コンポーネントを追加した際、アバターに*HVR.Networking*という名前のプレハブが追加されたはずです。
このコンポーネントはアバターのネットワーク通信を担当します。このプレハブはルートに置いたままにしてください。

セットアップは完了です。*Automatic Face Tracking*は、[*Unified Expressions*](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes)、*ARKit*、または*SRAnipal*の命名規則に従ったフェイストラッキング用ブレンドシェイプを持つすべてのアバターメッシュを検出します。

:::danger
フェイストラッキングの実装はAnimatorシステムを使用しません。**VRC用に設計されたフェイストラッキングのAnimatorテンプレートは使用しないでください。**
これらは機能せず、干渉する可能性さえあります。
:::

## テスト

ビルド前にアバターをテストするには：

- *他のソーシャルVRアプリケーションが現在実行されていないことを確認してください。他のアプリがフェイストラッキングデータをキャプチャしている可能性があります。*
- VRCFaceTrackingを起動します。
- Play Modeに入り、アバターのルートにある*Basis Avatar*コンポーネントの**Test in Editor**ボタンを押します。
- すべてが正常に動作すれば、VRCFaceTrackingソフトウェアに*HVR.Basis Fake Client*という名前のアバターが検出されたと表示されます。
- ヘッドセットを装着し、自身のアバターの顔を見て、どのように動くかを確認してください。

アバターにロードすると、以下のことが起こります：
- Basisはポート9000にOSCサーバーを作成し、ポート9001（VRCFaceTrackingが動作している場所）にメッセージを送信して、アバターが変更されたことを伝えます。古いバージョンのVRCFaceTrackingはこのメッセージに反応します。
- また、ランダムなポートで偽のOSCQueryサーバーを起動します。Steam版のVRCFaceTrackingはこのOSCQueryサーバーを検出します。
- VRCFaceTrackingは、フェイストラッキングパラメータを送信することでBasisとの通信を開始します。
- 成功すると、VRCFaceTrackingウィンドウに次のように表示されます：
![basisfakeclient.png](/assets/docs/basis/avatar-customization/basisfakeclient.png)

その後、シーンビューで自身のアバターの顔を見て、どのように動くかを確認してください。

## 技術仕様

[ほとんどのアドレス](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/parameters)をサポートしています。EyeLeftYとEyeRightYの代わりにEyeYが使用されます。

すべてのアドレスは、1アドレスあたり1バイトを使用して送信されます。

利用可能な範囲で線形量子化が使用されているため、フェイストラッキングの目的には十分な精度を持っています。

- 0.0から1.0までの値の場合、ステップは約0.004（0.4%）です。
- -1.0から1.0までの値の場合、ステップは約0.008（0.8%）です。
- -1.0、1.0、および0.0の値は、量子化後も同じ値を維持することが保証されています。

接続されたハードウェアがアドレスをサポートしていない場合、そのアドレスによってネットワークが消費されることはありません。 <HaiStartingFromTag version={"21st of May 2026"} small={true} />

リモートユーザーの場合、フェイストラッキングはデフォルトで補間されます。