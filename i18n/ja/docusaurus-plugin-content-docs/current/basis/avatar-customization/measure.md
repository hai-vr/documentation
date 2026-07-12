---
sidebar_position: 40
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

# Measure (計測)

<HaiTags>
<HaiTag requiresBasis={true} />
<HaiStartingFromTag version={"2026年5月21日"} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} />

**HVR Measure** コンポーネントを使用すると、アバター上のさまざまなものを計測できます。計測された値は、[Vixxy](/docs/basis/avatar-customization/vixxy) を使用してアバターのエフェクトをトリガーするために使用できます。

## 計測タイプ

アバターに *HVR Measure* コンポーネントを追加します。階層内での *HVR Measure* コンポーネントの場所はどこでも構いません。

以下の計測タイプが用意されています：

- **Distance**: 2つのオブジェクト間の距離を計測します。
- **Angle**: 3つのオブジェクト間の角度を計測します。
- **Rotation Difference**: 2つのオブジェクトの回転の差を計測します。

[//]: # (- ~~**Speed**: オブジェクトの移動速度を計測します。~~)

[//]: # (- ~~**Raycast**: コライダーへのレイキャスト距離を計測します~~。)

*将来的に、Speed や Raycast などの追加の計測タイプが利用可能になる可能性があります。*

ほとんどの計測タイプでは、Angle の変化率や、2つのオブジェクト間の Distance の変化率など、時間経過に伴う変化率を計算することもできます。

結果は、*Output* セクションの対応するチェックボックスをオンにすることで、任意のアドレスに書き込まれます。

## Distance (距離)

計測タイプが *Distance* に設定されている場合、*Source* と *Target* の間の距離を計測します。

デフォルトでは、計測はアバター空間で行われるため、アバターのスケールに合わせて計測値も変化します。
例えば、腕の長さに依存する計測は、アバターのスケールに関係なく同じ結果になります。

## 角度の計測

角度を計測するには、**Angle** と **Rotation Difference** の2つの方法があります。*Angle* オプションの方が理解しやすく使いやすいですが、*Rotation Difference* オプションは、必要に応じて *Angle* では計測できないものを計測できます。

### Angle (角度)

計測タイプが *Angle* に設定されている場合：

*Angle* は、*Origin, Target A, Target B* の3つのオブジェクトの位置を取得し、Origin-Target A と Origin-Target B によって形成される角度を計測します。

結果は度数法（degrees）で出力されるため、[Convert Range](#convert-range-範囲変換) オプションを使用してください。

:::tip
下腿のボーンを *Origin*、大腿のボーンを *Target A*、足のボーンを *Target B* に設定することで、脚の角度を計測できます。
:::

### Rotation Difference (回転差)

計測タイプが *Rotation Difference* に設定されている場合：

*Rotation Difference* は、2つのオブジェクトの絶対回転を取得し、それらの間の角度差を計測します。これら2つのオブジェクトの位置は関係ありません。

*Rotation Difference* には *Roll* オプションがあります：
- *Include Roll* が選択されている場合、すべての方向の回転が考慮されます。
- *Do Not Include Roll* が選択されている場合、各オブジェクトの前方ベクトル（青い矢印）の差によって角度が計測されます。

結果は度数法（degrees）で出力されるため、[Convert Range](#convert-range-範囲変換) オプションを使用してください。

[//]: # (## Speed)

[//]: # ()
[//]: # (:::danger)

[//]: # (このオプションは現在利用できません。)

[//]: # (:::)

[//]: # ()
[//]: # (*Speed* は *Source* オブジェクトの速度を計測します。)

[//]: # ()
[//]: # (*Speed Measurement* では、計測を平面または軸に制限できます。)

[//]: # (- *Three Dimensional* は、3次元の速度を計測します。)

[//]: # (- *Project On Plane 2D* は、2次元の速度を計測します。これは、ジャンプを無視するために垂直軸などの特定の軸を除外するために使用できます。)

[//]: # (- *Project On Line 1D* は、1次元の速度を計測します。これは、ジャンプのみを計測するために垂直軸などの特定の1つの軸のみを含めるために使用できます。)

[//]: # ()
[//]: # (定義上、速度が負になることはありません。)

[//]: # ()
[//]: # (## Raycast)

[//]: # ()
[//]: # (:::danger)

[//]: # (このオプションは現在利用できません。)

[//]: # (:::)

## Convert range (範囲変換)

計測された値は、入力範囲から出力範囲に変換できます。これは、最小および最大の距離や角度を定義するために使用できます。

*Angle* 計測を使用する場合は、*Convert range* 機能を使用して、度数から使用可能な範囲に変換することを強くお勧めします。

例えば、*Angle* 計測の場合、(30, 180) から (0, 1) に変換すると、30度は 0.0、180度は 1.0 として出力されます。30度と180度の中間である105度は 0.5 になります。

*Clamp to bounds* チェックボックスは、出力範囲をその特定の範囲に制限します。上記の例を使用すると、*Clamp to bounds* がチェックされている場合、0度は 0.0 になりますが、チェックされていない場合、0度は -0.2 になります。

## Vixxy Control への接続

計測値は、**[Vixxy](/docs/basis/avatar-customization/vixxy)** を使用してアバターのエフェクトをトリガーするために使用できます。

*Measure* コンポーネントを設定した後、**Vixxy Control** コンポーネントに移動し、*Select...* ボタンを押します。アドレスは *Measurements* カテゴリで利用可能になります。
