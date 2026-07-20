---
displayed_sidebar: newProductsSidebar
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiLocalization from "/src/components/HaiLocalization";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";

# Transfer Assistant

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

此 Unity 工具將協助您使用 *.unitypackage* 匯出功能，在**將資源從一個項目轉移到另一個項目**時，剔除您認為不需要的資源。

![general_zh-tw.png](/assets/docs/products/transfer-assistant/general_zh-tw.png)

此工具將**故意忽略某些資源引用**，僅保留您主動需要的資源。

- 它不會匯出預設件引用的每個資源，而是僅匯出主化身上存在的資源。
  如果預設件使用了主化身未使用的資源，則該資源不會被包含。這是預設行為，但可以更改。
- 您可以選擇按類型或按組件忽略資源，以及它們引用的任何資源。示例：
  - 當您忽略材質時，它也會忽略這些材質使用的貼圖。
  - 當您忽略諸如 *Modular Avatar Menu Item* 之類的組件時，它也會忽略這些組件引用的圖標貼圖。
- 您可以選擇忽略標記為 EditorOnly 的對象所引用的資源。

如果匯出的內容中包含了意外的資源，*Transfer Assistant* 用戶界面可以幫助您定位哪個對象或組件依賴於它。

![dependency_zh-tw.png](/assets/docs/products/transfer-assistant/dependency_zh-tw.png)

*Transfer Assistant* 永遠不會修改場景或預設件的内容。

此工具的預期用途是**在不同的遊戲之間匯出化身項目文件**，例如，從 Unity 2022 BIRP 項目轉移到獨立的 Unity 6.4 URP 項目。
在這樣的項目中，資源分散在多個文件夾中，而在這些文件夾中，有些資源是您想要排除的，因為它們在目標項目中沒有任何用處，例如動畫控制器或動畫文件。

### 此工具不適用於以下情況

如果您是一名產品創作者，此工具**並非**為匯出打算作為發布版本一部分進行發布和分發的 *.unitypackage* 文件而設計的，因為此類資源通常需要在文件夾結構上進行更嚴格的規範。
此工具的某些功能可用於内省目的，但**不建議**將此工具用於產品發布管理。

## 下載

此工具可以在 [Booth.pm](https://hai-vr.booth.pm/items/8628836) 上下載：

它也可以通過 ALCOM 安裝：
- 使用此連結 **[將我們的列表安裝到 ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**。
- 使用 ALCOM 將 *Haï ~ Transfer Assistant* 添加到您的項目中。

<HaiSupport/>

## 如何使用

以下是使用該工具的基本步驟：

- [選擇要分析的資源。](#選擇要分析的資源)
- [縮小您想要保留的資源引用範圍。](#縮小您想要保留的資源引用範圍)
- [探索哪些資源需要其他資源。](#探索哪些資源需要其他資源)
- [準備匯出以預覽將匯出的資源文件。](#準備匯出以預覽將匯出的資源文件)
- [找出為什麼需要意外的資源文件。](#找出為什麼需要意外的資源文件)
- [匯出選定的資源。](#匯出選定的資源)

## 選擇要分析的資源

首先，選擇以下操作之一：

- [分析預設件](#分析預設件)，或
- [分析場景](#分析場景)。

### 分析預設件

在 *Project* 選項卡中，右鍵單擊預設件並選擇 *Transfer Assistant...*

或者，您可以轉到 *Window > Haï~ > Transfer Assistant*，然後選擇一個預設件，並點擊 *執行分析* 按鈕。

:::info
如果您正在製作化身，您應該在 Project 視圖中選擇包含您的化身的預設件。
:::

![project_menu.png](/assets/docs/products/transfer-assistant/project_menu.png)

### 分析場景

要分析場景中包含的對象，您必須：

- 在 Unity 編輯器中打開場景。
- 轉到 *Window > Haï~ > Transfer Assistant*。
- 如有需要，[請按照下一節的說明更改窗口語言](#更改窗口語言)。
- 將右上角的下拉菜單設置為 **當前場景**。
- 點擊 *執行分析* 按鈕。

![window_menu.png](/assets/docs/products/transfer-assistant/window_menu.png)

![scenes_zh-tw.png](/assets/docs/products/transfer-assistant/scenes_zh-tw.png)

### 其他詳細信息

右上角的下拉菜單允許您在不同的對象選擇模式之間切換。

- **單一目標**: 僅分析一個根對象。
- **多目標**: 分析多個根對象。
- **當前場景**: 分析打開場景的所有根對象，並將場景本身添加到匯出列表中。
  - 這**不包括**場景中的渲染設置。天空盒、光照數據和其他場景引用將不會包含在匯出中。
  - 如果您打開了多個場景，則都會被分析。

如果您決定更改目標，或者對任何資源進行了修改，請點擊 *執行分析* 按鈕以刷新內容。

## 更改窗口語言

您可以使用窗口底部的下拉菜單更改語言，該下拉菜單顯示英文單詞 *"Language"*。 <!-- AI: On this line, the word Language which is in quotes at near the end of the sentence must be kept written in English using alphabetical characters. -->

:::note
如果您的語言不可用，但您精通技術，您可以：
- 要求大語言模型將 `Packages/dev.hai-vr.transfer-assistant/Scripts/Editor/Locale/en.json` 文件翻譯成一個新的 `.json` 文件，
- 然後在 Unity 編輯器窗口中按 `CTRL-R`，
- 然後點擊語言選擇下拉菜單右側的刷新按鈕。
:::

![language.png](/assets/docs/products/transfer-assistant/language.png)

## 縮小您想要保留的資源引用範圍

按下左側側邊欄中的複選框以影響將匯出的資源。

這些複選框具有**級聯效應**；例如，取消選中 Materials 將影響哪些貼圖被匯出。

:::info
*Transfer Assistant* **從不修改**預設件或場景，因此點擊任何按鈕都是安全的。
:::

![checkboxes_zh-tw.png](/assets/docs/products/transfer-assistant/checkboxes_zh-tw.png)

#### 包含 EditorOnly

- 選中時，包含所有對象。**這是預設選項。**
- 取消選中時，不包含 EditorOnly 對象及其任何子對象中引用的資源。
  - 但是，為了避免導入過程中出現錯誤，預設件源始終會被包含，即使預設件實例是 EditorOnly。

即使在匯出過程中，這也不會從預設件中刪除標記為 EditorOnly 的 GameObject 或組件；它只是忽略它們包含的引用。

是否選中此項取決於您的工作流程。

#### 包含 Prefab 中的隱藏項目

此選項處理覆蓋預設件實例如何隱藏源預設件内部資源的問題。

- 選中時，即使您的目標對象因為覆蓋而在層級結構中未使用該資源，源預設件中引用的資源也會被包含。
- 取消選中時，源預設件中引用的資源不會被包含，因此僅包含您的目標對象主動使用的資源。**這是預設選項。**
  - 對於**化身類項目**，這是推薦的選項，因為您通常只對化身上主動使用的内容感興趣。

> ![simplehidden.png](/assets/docs/products/transfer-assistant/simplehidden.png)
>
> 預設情況下， *包含 Prefab 中的隱藏項目* 處於未選中狀態。保持未選中狀態有時會導致匯出的資源數量大幅減少。
>
> 在這個例子中，通過將材質轉換為 NonToon 修改了一個化身。
> - 預設件源仍然引用轉換之前的舊材質，儘管化身並未主動使用這些材質。
> - 通過保持 *包含 Prefab 中的隱藏項目* 為未選中狀態，那些舊材質將不包含在匯出中，僅包含 NonToon 材質。

#### 剔除

- 選中某種資源類型時，該資源類型將被包含，並且該資源類型引用的任何其他資源也將被包含。
- 取消選中某種資源類型時，該資源類型將不被包含，並且該資源類型引用的資源也不被包含。

>![culling.png](/assets/docs/products/transfer-assistant/culling.png)
>
> 取消選中 *Animator Controller* 不僅會從匯出中刪除 *Animator Controllers*，還會從匯出中刪除這些 *Animator Controllers* 使用的 *Blend Tree* 資源和 *Animation Clip* 資源。

#### 組件

- 選中某個組件時，該組件引用的任何資源都將被包含，並且這些資源引用的任何其他資源也將被包含。
- 取消選中某個組件時，這些組件引用的資源將不被包含，並且這些資源引用的資源也不被包含。

即使在匯出過程中，這也不會從預設件中刪除組件。

## 探索哪些資源需要其他資源

*Transfer Assistant* 的主面板包含一個對象的依賴樹。該樹的顯示方式是根節點依賴於子節點（即子節點是對象所依賴的内容）。

許多對象（如材質或貼圖）會被多次使用，這意味著它們會有多個父節點；當發生這種情況時，您會在該樹中多次看到同一個對象。

為了簡明起見，每個對象僅顯示其子節點一次；其他出現的地方將在右側添加文字 "*(已顯示)*"。

點擊任何對象以高亮顯示該對象的位置。

使用以下功能進行導航並弄清楚為什麼需要某些對象：
- 按下**特定對象上的放大鏡圖標**以聚焦於該對象。<br/>使用此功能了解它依賴於哪些對象以及哪些對象依賴於它。
- 按下**側邊欄上的放大鏡圖標**以聚焦於這些資源類型。<br/>使用此功能可視化需要這些資源類型的每個依賴項。
- 在**搜索框**中輸入文本以查找特定的資源名稱。

您可以再次點擊放大鏡圖標以清除搜索。

![search_zh-tw.png](/assets/docs/products/transfer-assistant/search_zh-tw.png)

:::note
顏色編碼如下：

- 大多數變灰的對象都不是資源，例如，它們可能是組件或非預設件的 GameObject。組件顯示為變灰的黃色。
- 藍色對象是 *Prefab Sources* 或 *Prefab Models*，這是項目中以文件形式存在的預設件資源。
- 綠色對象是 *Prefab Instances*，這是場景對象。它們可能存在於場景中或在其他預設件内部。

*Prefab Instances* 通常與它所依賴的 *Prefab Source* 同名，這可能會導致閱讀混淆。這就是它們被顏色編碼的原因。
:::

## 準備匯出以預覽將匯出的資源文件

在側邊欄中，按下 *準備匯出...* 按鈕。這將打開一個新窗口，看起來類似於 *Export .unitypackage* 窗口。

在這裡，您可以檢查將匯出哪些文件並細化您的選擇。

該窗口的側邊欄有每種資源類型的按鈕。這些按鈕**不**具有級聯效應。

- **Select**: 選擇該類型的資源，這會將它們包含在匯出中。
- **Deselect**: 取消選擇該類型的資源，這會將它們從匯出中排除。
- **Deselect and Hide**: 取消選擇該類型的資源並將其從“匯出”窗口中刪除。
    - *注意：按下 Deselect and Hide 將**不會**取消選擇被這些資源引用的資源，因此這與 Transfer Assistant 窗口中的 Culling 選項不同。*

![export_zh-tw.png](/assets/docs/products/transfer-assistant/export_zh-tw.png)

:::warning
在 *Transfer Assistant* 窗口中所做的更改將不會反映在 *Prepare Export* 窗口中：

如果您決定縮小或擴大依賴關係，您將需要再次按下 *準備匯出...* 按鈕。
:::

## 找出為什麼需要意外的資源文件

在 *Prepare Export* 窗口中，您有時可能會看到某些文件，但不明白為什麼要匯出它們。

在這種情況下，按下 *Prepare Export* 窗口右側的**放大鏡圖標**。這將在 *Transfer Assistant* 窗口内搜索該資源。

您可以使用此信息來弄清楚層級結構中的哪個對象需要該資源。

:::tip
即使您不打算匯出文件，也可以按下 *準備匯出...* 按鈕。

由於 *Prepare Export* 窗口將您的依賴關係表示為文件和文件夾，因此這對於幫助定位意外資源非常有用。
:::

![exportexplain.png](/assets/docs/products/transfer-assistant/exportexplain.png)

## 匯出選定的資源

在 *Prepare Export* 窗口底部附近，按下 *匯出到檔案...* 按鈕將選定的資源匯出到您選擇的文件。

或者，按下 *快速匯出* 按鈕匯出或覆蓋到 `export.unitypackage` 文件中。
