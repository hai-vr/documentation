---
title: Lightbox Viewer
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 2.5.0-beta.4

アンチエイリアシングを強制するオプションを追加しました。これは、一部のスタンドアロンプロジェクト設定（例：Basis Framework プロジェクト）で役立つ場合があります。

## 2.5.0-beta.3

エディットモードにおいて、シーン階層タブの可視性アイコンで非表示になっているオブジェクトを非表示にするようにしました。

修正：オブジェクト変更イベントがプレイモードでトリガーされないようにしました。これによりログにエラーが発生していた問題が解消されます。

## 2.5.0-beta.2

追加シーンにおける URP Adaptive Probe Volumes の問題により、lilToon 2.3.0 のプレビューが正しく表示されなかった問題を修正しました。

- 追加シーンでデフォルトのライティングデータが Adaptive Probe Volumes に悪影響を与えていた問題を修正：
  - デフォルトのシーンにはデフォルトのライティングデータアセットが割り当てられています。
  - このデフォルトのライティングデータによりレンダリング結果が異なって見え、特に lilToon 2.3.0 で顕著でした。
  - シーンが現在デフォルトのライティングデータを使用しているかチェックし、使用している場合は Lightbox 使用中のみ null に設定することで修正しました。
  - これにより Lightbox Viewer URP の https://github.com/hai-vr/lightbox-viewer-urp/issues/1 が修正されるはずです。

## 2.5.0-beta.1

Lightbox Viewer が以下のものと互換性を持つようになりました：
- BIRP Light Probes
- BIRP VRCLV
- URP Adaptive Probe Volumes
- URP Light Probes

URP Light Probes のサポートを追加：
- URP が現在のレンダーパイプラインである場合、Quality 設定で Adaptive Probe Volumes の代わりに Light Probes が使用されている場合に別のシーンに切り替えるようにしました。
- プロジェクト内に URP がある場合、Quality 設定の変更を検出するようにしました。

以前のアルファ版での提案とは異なり、macOS との互換性の試みは失敗したため、依然として macOS とは互換性がありません。

アルファ版からの以前の変更ログを時系列順に繰り返し（macOS の変更を除く）：

*2.4.1-alpha.1 より:*

- パフォーマンス向上のためエディットモードの戦略を変更：
    - 以前のエディットモードでは、アバターが誤って変更されないように毎フレームアバターをコピーしていました。
    - 今回の変更では、Object To View への参照が変わらない場合、階層内の非保存マーク付きの非表示 GameObject にアバターをコピーするようにしました。
    - オブジェクト変更イベントを使用して、シーン内の変更を検出します。トランスフォーム以外に関する変更があった場合、コピーされたオブジェクトを破棄して新しいものを作成します。
    - このコピーされたオブジェクトは、レンダリングサイクル間に下方に 10,000 ユニット移動されます。
    - アバターの有効化は低速であるため、レンダリングサイクル間に元のアバターを無効化しないようにしました。
    - コピーにおいて、バインドに時間がかかり不要な Animator を削除しました。

*2.4.1-alpha.2 より:*

- URP プロジェクトのサポートを追加：
    - プロジェクトが BIRP であるかを検出します。
    - BIRP でない場合、Post-Processing V2 パッケージのインストールを推奨しないようにしました。
    - BIRP でない場合、Light Volumes パッケージがインストールされていても URP シーンをロードするようにしました。

*2.5.0-alpha.2 より:*

- GPU から CPU へのテクスチャコピーの必要性をなくす最適化を試みました。

*2.5.0-alpha.3 より:*

- Unity 6.2 Basis プロジェクトで深度がビューのレンダリングに影響を与えていた問題の修正を試みました。

## 2.5.0-alpha.3

- Unity 6.2 Basis プロジェクトで深度がビューのレンダリングに影響を与えていた問題の修正を試みました。

## 2.5.0-alpha.2

GPU から CPU へのテクスチャコピーの必要性をなくす最適化を試みました。

これは 2.5.0-alpha.1 で導入された変更が効果的でなかった可能性があるため、macOS 上の Metal のサポートも改善する可能性があります。

## 2.5.0-alpha.1

Async GPU readback のないシステムのサポートを試行：
- Async GPU readback がないと思われる macOS 上の Metal のサポートを試みました。

*2.4.1-alpha.2 より:*

- URP プロジェクトのサポートを追加：
  - プロジェクトが BIRP であるかを検出します。
  - BIRP でない場合、Post-Processing V2 パッケージのインストールを推奨しないようにしました。
  - BIRP でない場合、Light Volumes パッケージがインストールされていても URP シーンをロードするようにしました。

*2.4.1-alpha.1 より:*

- パフォーマンス向上のためエディットモードの戦略を変更：
  - 以前のエディットモードでは、アバターが誤って変更されないように毎フレームアバターをコピーしていました。
  - 今回の変更では、Object To View への参照が変わらない場合、階層内の非保存マーク付きの非表示 GameObject にアバターをコピーするようにしました。
  - オブジェクト変更イベントを使用して、シーン内の変更を検出します。トランスフォーム以外に関する変更があった場合、コピーされたオブジェクトを破棄して新しいものを作成します。
  - このコピーされたオブジェクトは、レンダリングサイクル間に下方に 10,000 ユニット移動されます。
  - アバターの有効化は低速であるため、レンダリングサイクル間に元のアバターを無効化しないようにしました。
  - コピーにおいて、バインドに時間がかかり不要な Animator を削除しました。

- 垂直オフセット（Vertical Displacement）をリセットできなかった問題を修正しました。

## 2.4.1-alpha.2

URP プロジェクトのサポートを追加：
- プロジェクトが BIRP であるかを検出します。
- BIRP でない場合、Post-Processing V2 パッケージのインストールを推奨しないようにしました。
- BIRP でない場合、Light Volumes パッケージがインストールされていても URP シーンをロードするようにしました。

## 2.4.1-alpha.1

- パフォーマンス向上のためエディットモードの戦略を変更：
  - 以前のエディットモードでは、アバターが誤って変更されないように毎フレームアバターをコピーしていました。
  - 今回の変更では、Object To View への参照が変わらない場合、階層内の非保存マーク付きの非表示 GameObject にアバターをコピーするようにしました。
  - オブジェクト変更イベントを使用して、シーン内の変更を検出します。トランスフォーム以外に関する変更があった場合、コピーされたオブジェクトを破棄して新しいものを作成します。
  - このコピーされたオブジェクトは、レンダリングサイクル間に下方に 10,000 ユニット移動されます。
  - アバターの有効化は低速であるため、レンダリングサイクル間に元のアバターを無効化しないようにしました。
  - コピーにおいて、バインドに時間がかかり不要な Animator を削除しました。

- 垂直オフセット（Vertical Displacement）をリセットできなかった問題を修正しました。

## 2.4.0

- ライトボックスのコレクションを追加しました。ユーザーはデフォルトの 6 つのライトボックスから、より専門的な他のライトボックスに切り替えることができるようになりました。
  - Light Volumes 専用の特殊なライトボックスを追加しました。これには Light Volumes パッケージのインストールが必要です。
  - 以前は隠されていた Spotlight Cookie ライトボックスを公開しました。
- 以前は表示対象オブジェクト内のライトが無効化されていましたが、デフォルトでは無効化されないようになりました。
- 表示対象オブジェクト内のライトを無効化するオプションを追加しました。
- 深度テクスチャ（Depth Texture）を必要とするシェーダーをサポートするオプションを追加しました。
  - これは [Poiyomi's DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) のライト設定を使用していますが、インストールの競合を避けるために異なる GUID で再パッケージ化されています。
- Advanced メニューがサイドバーになりました。
- Lightbox Viewer ウィンドウを閉じたときにリセットされるのではなく、一部の設定がエディター全体で保存されるようになりました。
  - これには *Counter Rotate、Post Processing、Vertical Displacement、Mute Lights Inside Object、Support Depth Texture* が含まれます。

![Unity_a6UfNnk6f1.png](/assets/docs/products/lightbox-viewer/Unity_a6UfNnk6f1.png)

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## 2.4.0-beta.2

- Reload Domain がデフォルトのままの場合、プレイモードでコレクションが表示されなかった問題を修正しました。

## 2.4.0-beta.1

- ライトボックスのコレクションを追加しました。ユーザーはデフォルトの 6 つのライトボックスから、より専門的な他のライトボックスに切り替えることができるようになりました。
  - Light Volumes 専用の特殊なライトボックスを追加しました。これには Light Volumes パッケージのインストールが必要です。
  - 以前は隠されていた Spotlight Cookie ライトボックスを公開しました。
- 以前は表示対象オブジェクト内のライトが無効化されていましたが、デフォルトでは無効化されないようになりました。
- 表示対象オブジェクト内のライトを無効化するオプションを追加しました。
- 深度テクスチャ（Depth Texture）を必要とするシェーダーをサポートするオプションを追加しました。
  - これは [Poiyomi's DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) のライト設定を使用していますが、インストールの競合を避けるために異なる GUID で再パッケージ化されています。
- Advanced メニューがサイドバーになりました。
- Lightbox Viewer ウィンドウを閉じたときにリセットされるのではなく、一部の設定がエディター全体で保存されるようになりました。
  - これには *Counter Rotate、Post Processing、Vertical Displacement、Mute Lights Inside Object、Support Depth Texture* が含まれます。

## 2.3.0

プロジェクトに [Light Volumes](https://github.com/REDSIM/VRCLightVolumes) がインストールされている場合のサポートを追加しました。

ライトボックス自体は変更されないため、違いはわずかです。
Pink シーンが最も顕著で、左手がピンクに、右手が紫に照らされるようになります。

:::warning
**プレビュー**でライトボリュームを使用したい場合、*アバターのアップロードとは異なり*、lilToon 1.10 のような互換性のあるシェーダーがあるだけでは不十分であることをご理解ください。
アバタープロジェクトに実際の [Light Volumes パッケージ](https://github.com/REDSIM/VRCLightVolumes?tab=readme-ov-file#installation-through-vrchat-creator-companion)がインストールされている必要があります。
:::

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>

*ライトボリュームあり：*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*ライトボリュームなし：*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

## 2.3.0-beta.2

"Unknown error occurred while loading LightingData.asset" を修正：
- シーンを個別の .lighting ファイルでリベイクしました。
- これにより "Unknown error occurred while loading LightingData.asset" エラーが解消されるはずです。

## 2.3.0-beta.1

プロジェクトに Light Volumes がインストールされている場合のサポートを追加しました。

ライトボックス自体は変更されないため、違いはわずかです。
Pink シーンが最も顕著で、左手がピンクに、右手が紫に照らされるようになります。

*ライトボリュームあり：*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*ライトボリュームなし：*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

- Light Volumes をサポートするためのシーンを追加：https://github.com/REDSIM/VRCLightVolumes
  - シーンは CPU ではなく Progressive GPU を使用するため、メインシーンとは異なる方法でベイクされています。
  - シーンには Light Volumes が無効な非アクティブなライトボックスが含まれています。
- Light Volumes パッケージのバージョン 0.7.2 以降がインストールされている場合、このシーンがデフォルトで選択されます。

## 2.2.0

コピーからすべての MonoBehaviour を削除することで、エディットモードの速度向上を試行：
- コピーからすべての MonoBehaviour を削除することで、OnEnable/OnDestroy が呼び出されないようにし、エディットモードでの実行速度の向上を試みました。
- これは、コピーからすべての MonoBehaviour を削除する前に、コピーを無効化された親オブジェクトの子にすることで行われます。

## 2.1.0

Unity 2022 で Lightbox シーンのライティングをリベイク：
- 現在のライトマップが Unity 2022 で正しく動作しない（特に White ボックス）ようでした。
- Unity 2022 でライティングをリベイクしました。
- パッケージは Unity 2022.3 パッケージとして分類されるようになりました。

## 2.0.2

- アバターのアップロードに失敗する問題を修正しました。
  - ビルド時にスクリプトがコンパイルされるように修正しました。

## 2.0.1

- Lightbox Viewer の最初のパブリック VCC リリース。
  - VCC でのインストールにより、Assets/ 内の以前のインストールが削除されます。
  - このツールは Packages/ 内に配置されるようになりました。
