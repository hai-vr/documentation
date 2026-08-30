---
sidebar_position: 40
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

# メッシュの可視性 (Mesh Visibility)

<HaiTags>
<HaiTag requiresBasis={true} />
<HaiStartingFromTag version={"未リリース"} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

**HVR Mesh Visibility** コンポーネントは、どの Renderer コンポーネントや GameObject が有効になっているかに基づいて、*Vixxy Control* コンポーネントの値を一時的に上書きする追加条件です。

このコンポーネントの主な目的は以下の通りです：
- 別のトグルで制御されているメッシュが表示されているときに、メッシュを非表示にする。
- 複数のメッシュのいずれかが表示されているときに、ブレンドシェイプを縮小させる。

## 何が「表示」と見なされますか？

オブジェクトに *Renderer* コンポーネントが含まれている場合、その *Renderer* が有効であり、かつ GameObject が階層内でアクティブである（つまり、すべての親もアクティブである）かどうかを確認します。

それ以外の場合は、GameObject が階層内でアクティブである（つまり、すべての親もアクティブである）かどうかのみを確認します。

## 条件 (Conditions)

条件は上から順に処理されます。一番上の条件が優先されます。

- **Is Any Visible**: 指定されたオブジェクトの少なくとも1つが表示されているときに条件が満たされます。
- **Are All Visible**: 指定されたすべてのオブジェクトが表示されているときに条件が満たされます。
- **Is Any Hidden**: 指定されたオブジェクトの少なくとも1つが非表示のときに条件が満たされます。
- **Are All Hidden**: 指定されたすべてのオブジェクトが非表示のときに条件が満たされます。

条件が満たされると、次の2つのうちいずれかが発生します：

- **Override Value**: コントロールの値が、指定された値で一時的に上書きされます。
- **Do Not Override**: コントロールの値は上書きされなくなり、メニューや他のデータソースからの現在の値が適用されます。

## 実行コスト

*Mesh Visibility* コンポーネントは、*Vixxy Control* に渡された少なくとも1つの値が変更された後にのみ評価されます。つまり、*Mesh Visibility* コンポーネントはほとんどの時間スリープ状態にあります。

*Mesh Visibility* コンポーネントが *Vixxy Control* への変更をトリガーした場合、連鎖的な可視性の切り替えが行えるよう、1フレームあたり最大5回まで *Mesh Visibility* コンポーネントの評価を継続します。
