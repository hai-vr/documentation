---
title: エフェクトの切り替えとトリガー
sidebar_position: 30
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

# Vixxyを使用したエフェクトの切り替えとトリガー

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

**Vixxy**は、Basis Frameworkプロジェクトにおいて、アバターのエフェクトを切り替えたりトリガーしたりするための、ユーザーがアクセス可能なインターフェースです。

主に、**プログラマーではないユーザー**がUnityインスペクターを通じて直接使用することを想定しています。

<HaiVideo src="../img/gX02sy0QQp-f.mp4"></HaiVideo>

エフェクトは、メニュー、音声、アバターのさまざまな測定値、フェイストラッキング、または外部のハードウェアやソフトウェアからの入力に基づいてトリガーできます。

オブジェクトのON/OFFの切り替え、シェーダーのマテリアル設定の変更、ブレンドシェイプ、マテリアル内のテクスチャ、TextMeshProコンポーネント内のテキストなどを変更できます。

<HaiVideo src="./img/bdH9zKqkQE-f.mp4"></HaiVideo>

## インストール

*Vixxy*は、2026年5月1日以降、公式のBasis Frameworkリポジトリの`Basis/Packages/dev.hai-vr.basis.comms/`フォルダにデフォルトで含まれています。

Basis Demo（現在はBasis Labsと呼ばれています）アプリケーションの参加者は、通常のアバター作成手順に従ってください。

新しく追加された機能を利用するには、プロジェクトを更新する必要がある場合があります。<HaiStartingFromTag version={"2026年5月21日"} small={true} />

## 開発者向けの序文

*Vixxy*は、Basisでエフェクトを作成するための**さまざまな方法の1つ**です。主に非プログラマーのユーザーが利用しやすいように設計されていますが、開発者も使用できます。

とはいえ、あなたがソフトウェア開発者であれば、他のアプローチを検討することをお勧めします：
- アプリケーション開発者であれば、Basis Frameworkアバター通信APIを直接使用する。
- [Cilbox](https://docs.basisvr.org/en/docs/scripting/scripting)によるスクリプト作成を検討し、GameObjectやコンポーネントを直接変更する。

*Vixxy*のネットワーキングはBasis Frameworkアバター通信APIを使用して構築されていますが、それ以外は純粋なUnityソフトウェアです。
*Vixxy*コードの大部分は、Basis Framework APIに依存せずにシングルプレイヤーで使用できます。

## メニューで切り替えを作成する

アバターに新しいGameObjectを作成し、**HVR Vixxy Control**コンポーネントを追加します。

*What activates this control*で*Select...*をクリックし、**Menu Item**を選択します。このボタンをクリックすると、このコンポーネントの上に**HVR Vixxy Menu**コンポーネントが自動的に作成されます。

![mspaint_ahQVxKtu9A.png](/assets/docs/basis/avatar-customization/vixxy/mspaint_ahQVxKtu9A.png)

オブジェクトを*Toggle Objects*カテゴリにドラッグします。

各オブジェクトの横にチェックボックスが表示されます。このチェックボックスは、各選択肢に対するオブジェクトの表示/非表示を定義します。

- #1はメニューが**OFF**であることに対応します。これにチェックを入れると、メニューがOFFのときにオブジェクトが表示されます。チェックを外すと、OFFのときに非表示になります。
- #2はメニューが**ON**であることに対応します。これにチェックを入れると、メニューがONのときにオブジェクトが表示されます。チェックを外すと、ONのときに非表示になります。

メニューのデフォルト値を変更するには、上部にある対応する選択肢の**Default**ボタンをクリックします。

![Unity_zcRHyS5cpb.png](/assets/docs/basis/avatar-customization/vixxy/Unity_zcRHyS5cpb.png)

オブジェクトそのものではなくコンポーネントを切り替えたい場合は、オブジェクトを*Toggle Objects*カテゴリにドラッグしてから、ドロップダウンで目的のコンポーネントを選択します。

::::note
*HVR Vixxy Control*コンポーネントを追加すると、アバターに*HVR.Networking*というプレハブが追加されているはずです。

このコンポーネントは、アバターのネットワーク通信を担当します。このプレハブはルートに置いておいてください。
::::

## 3つ以上の選択肢を使用する

3つ以上の選択肢が必要な場合は、上部にある*"+ Add choice"*ボタンをクリックします。

選択肢を追加した後は、各選択肢に説明（Description）を入力してください。この説明がメニューに表示されます。

新しい選択肢が増えるごとに、トグルにはさらに多くのチェックボックスが表示されます（#3、#4など）。選択肢に応じて各オブジェクトの状態を制御するために、チェックボックスをオンまたはオフにします。

![Unity_msP1E4flDG.png](/assets/docs/basis/avatar-customization/vixxy/Unity_msP1E4flDG.png)

## メニューを設定する

先ほど作成された*HVR Vixxy Menu Item*コンポーネントを通じて、メニューのタイプを変更できます。

実現可能なコントロールには3つのタイプがあります：
- 2つの選択肢（OFF/ON）の切り替え。
- 3つ以上の選択肢からのドロップダウン選択。
- 任意の数の選択肢の間で使用できるスライダー。

![Unity_9gBBi4tM4Z.png](/assets/docs/basis/avatar-customization/vixxy/Unity_9gBBi4tM4Z.png)

::::info
オブジェクトの切り替えやエフェクトのトリガーはメニューだけではありません。エフェクトは、さまざまな測定値や音声を使用してトリガーすることもできます。

これについては、このページの後半にある**[メニューなしでエフェクトをトリガーする](#メニューなしでエフェクトをトリガーする)**で説明されています。
::::

これらのコントロールは、アプリ内の*"Settings > Avatar Customization"*からアクセスできます。

![Unity_GWuNR4ZCCz.png](/assets/docs/basis/avatar-customization/vixxy/Unity_GWuNR4ZCCz.png)

## プロパティの変更（ブレンドシェイプ、シェーダーなど）

ブレンドシェイプの値を変更したり、マテリアル内の値を変更してシェーダーに影響を与えたりする必要がある場合は、*Change Properties*カテゴリを開きます。

### 最初のオブジェクトグループを作成する

*Change Properties*カテゴリで、+をクリックしてグループを作成します。

変更したいオブジェクトをそのグループにドラッグします。

### プロパティの検索

下に表示されるコンポーネントで、*Properties*、*Materials*、*BlendShapes*のいずれかをクリックして、影響を与えたいプロパティの検索を開始します。

上部に検索フィールドが表示されます。探しているプロパティに対応する文字を数文字入力し、*"Add"*ボタンを押して追加します。

完了したら、右上の _ ボタンを押して検索を最小化します。

![Unity_emEfEG0hzt.png](/assets/docs/basis/avatar-customization/vixxy/Unity_emEfEG0hzt.png)

### プロパティの編集

各選択肢に対して異なる値を入力して、プロパティを編集します。

値の右側にある下向き矢印ボタン `⤓` を押すと、シーンから現在の値をサンプリングできます。

![Unity_OxCwv2QpzO.png](/assets/docs/basis/avatar-customization/vixxy/Unity_OxCwv2QpzO.png)

### 利用可能な機能

現在のバージョンでは以下のことが可能です：
- ✅ GameObjectや多くのコンポーネントタイプのON/OFFの切り替え（前述の*Toggle Objects*セクションを使用）。
- ✅ ブレンドシェイプの値を変更。
- ✅ マテリアルプロパティのfloat値を変更。
- ✅ マテリアルプロパティのカラー値を変更。
- ✅ オブジェクトの移動、回転、スケール。<HaiStartingFromTag version={"2026年5月21日"} small={true} />

アニメーションベースのシステムに慣れている方にとっては不可能だった、特筆すべき機能は以下の通りです：
- ✅ マテリアルプロパティのテクスチャスロットを変更。
- ✅ TextMeshPro / TextMeshProUGUI / Textコンポーネントのテキスト文字列を、浮動小数点数の書式付きで変更。

現在のバージョンでは、以下はまだ利用できません。
- ❌ Rendererのマテリアルスロットの変更。
- ❌ その他のプロパティの変更。

### 複数のオブジェクトグループ

異なるオブジェクトのプロパティを異なる方法で変更する必要がある場合は、+を押して別のグループを作成します。

### TextMeshPro内に数値を表示する

TextMeshProコンポーネントおよびTextコンポーネント内のテキストを変更できます。使い始めるための例をいくつか挙げます。

`{0}`、`{0:0}`、または `{0:0.00}` を使用して絶対値を表示できます。

値が 93.1234 の場合：

- `Heart rate: {0}` は *Heart rate: 93.1234* と表示されます
- `Heart rate: {0:0}` は *Heart rate: 93* と表示されます
- `Heart rate: {0:0.0}` は *Heart rate: 93.1* と表示されます
- `Heart rate: {0:0.00}` は *Heart rate: 93.12* と表示されます

値が0.0で0%、1.0で100%を表す場合、`{1}`、`{1:0}`、または `{1:0.00}` を使用してパーセンテージとして表示できます。必要なければパーセント記号を表示する必要はありません。

値が 0.123456 の場合：

- `Power: {1}%` は *Power: 12.3456%* と表示されます
- `Power: {1:0}%` は *Power: 12%* と表示されます
- `Power: {1:0.0}%` は *Power: 12.3%* と表示されます
- `Power: {1:0.00}%` は *Power: 12.34%* と表示されます

![Unity_pOt5W729BJ.png](/assets/docs/basis/avatar-customization/vixxy/Unity_pOt5W729BJ.png)

コンピューターのOS言語がフランス語に設定されていても、小数点記号には常にピリオド `.` が使用されます。

## トランジション

<HaiTags><HaiStartingFromTag version={"2026年5月21日"} /></HaiTags>

トグルが完全にONまたはOFFになる前に、トランジション時間を導入することを選択できます。

**Transition**設定は常に表示されており、選択肢の下の上部付近にあります。デフォルトではトランジションはありません。

### 簡易トランジション (Simplified Transition)

**Transition**設定を**Simplified**に設定すると、トランジション時間を秒単位で指定できます。

トランジション時間は、最小値の選択肢から最大値の選択肢に移行するのにかかる時間です。

![Unity_a3gRJ02bAV.png](/assets/docs/basis/avatar-customization/vixxy/Unity_a3gRJ02bAV.png)

### 高度なトランジション (Advanced Transitions)

**Transition**設定を**Advanced**に設定すると、**Advanced**セクションに**Advanced Transition**という新しいタブが表示されます。

- **Smooth towards value**: 目標値に近づくにつれてトランジションが速く始まり、ゆっくりと進みます。
    - これはスライダーや、中間値が極端な値と同じくらい重要な一部のコントロールに適しています。
- **Linear towards value**: トランジションは目標値に向かって線形に進みます。
    - これはトグルとスライダーの両方に適しています。
- *Linear towards value* は **Curve** とうまく組み合わせることができます：入力値をリマップして曲線に従わせることができます。
    - *Linear towards value* と *Curve* の組み合わせはトグルには適していますが、スライダーには適していません。
    - *Linear towards value* と *Curve* を組み合わせる場合、*Curve* は通常、リストの最後の項目にする必要があります。

*Simplified*トランジションは2つのフィルターを使用します：
- 1番目のスロット：`（最大値 - 最小値） * トランジション時間` に等しい秒/ユニット（Seconds Per Unit）を持つ *Linear towards value*
- 2番目のスロット：イーズイン・アウトの形状で `t=最小値, value=最小値` から `t=最大値, value=最大値` に移行する *Curve*

![Unity_GwkTM2Q2aU.png](/assets/docs/basis/avatar-customization/vixxy/Unity_GwkTM2Q2aU.png)

#### トランジションカーブの追加

**Transitions**セクションでは、入力値に特定のしきい値を適用したい場合、トランジション時間の効果なしで **Curve** を単独で使用することもできます。

*Smooth towards value* を使用しているときにトランジションカーブを使用することは推奨されません。

#### 秒/ユニット (Seconds per unit)

トランジション時間は**秒/ユニット**で定義されますが、多くの場合、**秒単位のトランジション時間**と同じであると考えてそのままにしておいても構いません。

トランジションに0.5秒かかかるようにしたい場合は、0.5に設定してください。

::::note
細かい詳細は以下の通りです：これは、値0から値1に移行するのにかかる秒数を意味します。

単純なトグルの場合のように、選択肢が2つだけで、選択肢のデフォルト値を維持している場合、*duration in seconds per unit* は単に **秒単位の時間** を意味します：
- 値0から1へのトランジションは、*1 second per unit* で1秒かかります。
- 値0から1へのトランジションは、*0.5 second per unit* で0.5秒かかります。

**ただし、**多肢選択のスライダーがある場合、各選択肢に値が割り当てられ、選択肢の値を変更していない場合、それらの値は0、1、**2**になる可能性があります。この場合：
- 値0から**2**へのトランジションは、*1 second per unit* で2秒かかります。
- 値0から**2**へのトランジションは、*0.5 second per unit* で1秒かかります。

選択肢の値を0、0.5、1、あるいは好きな値に変更することもできます。
::::

## メニューなしでエフェクトをトリガーする

<HaiTags><HaiStartingFromTag version={"2026年5月21日"} /></HaiTags>

アバターのエフェクトの切り替えやトリガーは、メニューに限定されません。

### フェイストラッキング

アバターでフェイストラッキングを使用している場合、既存のフェイストラッキングアドレスを指定して、アバターのエフェクトをトリガーできます。例えば、アバターの耳を口の表情（例：`FT/v2/MouthStretchLeft`）に接続するなどです。

*Select...* ボタンを使用し、*Face Tracking* カテゴリを開いて使用したいアドレスを選択します。

詳細については、[フェイストラッキングアドレス](./vixxy/face-tracking-addresses)を参照してください。

![mspaint_uKlixIZsWG.png](/assets/docs/basis/avatar-customization/vixxy/mspaint_uKlixIZsWG.png)

### 音声

音声に基づいてエフェクトをトリガーできます。

- 音声のゲインに基づいてエフェクトをトリガーしたい場合は、*Select...* ボタンをクリックして *Voice Gain* を選択します。
- 特定のヴィゼム（Viseme）に基づいてエフェクトをトリガーしたい場合は、*Select...* ボタンをクリックし、*Viseme* カテゴリを開いて使用したいアドレスを選択します。

::::note
音声エフェクトはオーディオレンジ設定に依存します。アバターを着用している人が他の人のオーディオレンジ外にいる場合、その人は通常音声でトリガーされるはずのエフェクトを見ることができない場合があります。
::::

### 測定 (Measurements)

**HVR Measure**コンポーネントを使用して、アバターのさまざまな項目を測定できます。その結果得られた値を、アバターのエフェクトのトリガーに使用できます。

- **Distance**: 2つのオブジェクト間の距離を測定します。
- **Angle**: 3つのオブジェクト間の角度を測定します。
- **Rotation Difference**: 2つのオブジェクトの回転の差を測定します。

*将来的に、速度（Speed）やレイキャスト（Raycast）などの追加の測定タイプが利用可能になる可能性があります。*

詳細については、[Measureコンポーネントについてのページ](/docs/basis/avatar-customization/measure)を参照してください。

*Measure* コンポーネントを設定した後、*Vixxy Control* コンポーネントに移動して *Select...* ボタンを押すと、*Measurements* カテゴリでアドレスが利用可能になります。

<HaiVideo src="./img/bdH9zKqkQE-f.mp4"></HaiVideo>

## 追加設定

### ネットワーキング

**Networked** オプションがチェックされている場合、このオブジェクトの状態は他のユーザーから見えるようになります。

*Advanced Networking* ドロップダウンは現在効果がありません。
