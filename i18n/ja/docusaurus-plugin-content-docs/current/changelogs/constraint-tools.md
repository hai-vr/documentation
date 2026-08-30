import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={true} />

# Constraint Tools

## 1.4.0

Basis Framework の Constraint サポートを追加：
- プロジェクト内に Basis SDK パッケージ（com.basis.sdk）が存在する場合、BasisParentConstraint を作成します。

## 1.3.0

- フランス語、日本語、韓国語、簡体字中国語、繁体字中国語の言語選択機能を追加。

## 1.2.1

- VRCSDK の互換性をより将来にわたって維持できるように修正。
  - 内部メソッド `VRCConstraintBase.GetPerSourcePositionOffsets()` を呼び出さないように変更。

## 1.2.0

- `VRCConstraintBase.GetPerSourcePositionOffsets()` がパブリックではなくなった VRCSDK 3.10 との互換性を修正。
  - この問題を報告してくださった @JLChnToZ さんに感謝します（[#2](https://github.com/hai-vr/constraint-tools/issues/2)）。
- シーン内のコンポーネントアイコンを非表示にする際、コンポーネントの起動時間を改善。

## 1.2.0-beta.1

- `VRCConstraintBase.GetPerSourcePositionOffsets()` がパブリックではなくなった VRCSDK 3.10 との互換性を修正。
  - この問題を報告してくださった @JLChnToZ さんに感謝します（[#2](https://github.com/hai-vr/constraint-tools/issues/2)）。
- シーン内のコンポーネントアイコンを非表示にする際、コンポーネントの起動時間を改善。

## 1.1.1

Skinned Mesh Constraint Builder コンポーネントのインスペクターに、クリック可能なヘルプ URL を追加。

## 1.1.0

### ☀️ 新しいメニューオプション：[Activate with Skinned Offsets（スキン済みオフセットでアクティブ化）](/docs/products/constraint-tools/activate-with-skinned-offsets)

Parent Constraint および VRC Parent Constraint コンポーネントのインスペクターに、[Activate with Skinned Offsets（スキン済みオフセットでアクティブ化）](/docs/products/constraint-tools/activate-with-skinned-offsets) という名前の新しいメニューオプションが追加されました。

このメニューオプションを押すと、Parent Constraint の *Activate* ボタンと同様に動作しますが、**異なるオフセットを計算します**：
これらのオフセットにより、Parent Constraint がウェイトペイント/メッシュスキニングに近い動作をするようになります。

これは [Skinned Mesh Constraint Builder](/docs/products/constraint-tools/skinned-mesh-constraint) コンポーネントで使用されているものと同じアルゴリズムです。
そのコンポーネントを既に使用している場合は、これを使用する必要はありません。

![mspaint_US2AvDUNAt.png](/assets/docs/products/constraint-tools/mspaint_US2AvDUNAt.png)

## 1.0.1

### ☀️ 新しいコンポーネント：[Skinned Mesh Constraint Builder（スキンメッシュコンストレイントビルダー）](/docs/products/constraint-tools/skinned-mesh-constraint)

Constraint Tools に新しいコンポーネント [Skinned Mesh Constraint Builder](/docs/products/constraint-tools/skinned-mesh-constraint) が追加されました。

このコンポーネントは、Skinned Mesh Renderer の最も近いポリゴンと一緒に動く Parent Constraint を作成します。

オブジェクトを体にアタッチする際、ボーンへの親子付けほど単純ではないと感じた場合にこのコンポーネントを使用してください。

<HaiVideo src="/docs/products/constraint-tools/img/oSEDSUFVRj.mp4"></HaiVideo>
