---
unlisted: true
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

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hant', 'zh-Hans']} />

此 Unity 工具将协助您使用 *.unitypackage* 导出功能，在**将资源从一个项目转移到另一个项目**时，剔除您认为不需要的资源。

![general_zh-cn.png](/assets/docs/products/transfer-assistant/general_zh-cn.png)

此工具将**故意忽略某些资源引用**，仅保留您主动需要的资源。

- 它不会导出预制件引用的每个资源，而是仅导出主化身上存在的资源。
  如果预制件使用了主化身未使用的资源，则该资源不会被包含。这是默认行为，但可以更改。
- 您可以选择按类型或按组件忽略资源，以及它们引用的任何资源。示例：
  - 当您忽略材质时，它也会忽略这些材质使用的贴图。
  - 当您忽略诸如 *Modular Avatar Menu Item* 之类的组件时，它也会忽略这些组件引用的图标贴图。
- 您可以选择忽略标记为 EditorOnly 的对象所引用的资源。

如果导出的内容中包含了意外的资源，*Transfer Assistant* 用户界面可以帮助您定位哪个对象或组件依赖于它。

![dependency_zh-cn.png](/assets/docs/products/transfer-assistant/dependency_zh-cn.png)

*Transfer Assistant* 永远不会修改场景或预制件的内容。

此工具的预期用途是**在不同的游戏之间导出化身项目文件**，例如，从 Unity 2022 BIRP 项目转移到独立的 Unity 6.4 URP 项目。
在这样的项目中，资源分散在多个文件夹中，而在这些文件夹中，有些资源是您想要排除的，因为它们在目标项目中没有任何用处，例如动画控制器或动画文件。

### 此工具不适用于以下情况

如果您是一名产品创作者，此工具**并非**为导出打算作为发布版本一部分进行发布和分发的 *.unitypackage* 文件而设计的，因为此类资源通常需要在文件夹结构上进行更严格的规范。
此工具的某些功能可用于内省目的，但**不建议**将此工具用于产品发布管理。

## 下载

此工具可以在 Booth.pm 上下载：

<p style={{color:"#FF0000"}}>**TODO: LINK TO BOOTH PAGE**</p>

它也可以通过 ALCOM 安装。

<HaiLocalization languages={['en', 'ja']} />

## 如何使用

以下是使用该工具的基本步骤：

- [选择要分析的资源。](#选择要分析的资源)
- [缩小您想要保留的资源引用范围。](#缩小您想要保留的资源引用范围)
- [探索哪些资源需要其他资源。](#探索哪些资源需要其他资源)
- [准备导出以预览将导出的资源文件。](#准备导出以预览将导出的资源文件)
- [找出为什么需要意外的资源文件。](#找出为什么需要意外的资源文件)
- [导出选定的资源。](#导出选定的资源)

## 选择要分析的资源

首先，选择以下操作之一：

- [分析预制件](#分析预制件)，或
- [分析场景](#分析场景)。

### 分析预制件

在 *Project* 选项卡中，右键单击预制件并选择 *Transfer Assistant...*

或者，您可以转到 *Window > Haï~ > Transfer Assistant*，然后选择一个预制件，并点击 *执行分析* 按钮。

:::info
如果您正在制作化身，您应该在 Project 视图中选择包含您的化身的预制件。
:::

![project_menu.png](/assets/docs/products/transfer-assistant/project_menu.png)

### 分析场景

要分析场景中包含的对象，您必须：

- 在 Unity 编辑器中打开场景。
- 转到 *Window > Haï~ > Transfer Assistant*。
- 如有必要，[请按照下一节的说明更改窗口语言](#更改窗口语言)。
- 将右上角的下拉菜单设置为 **当前场景**。
- 点击 *执行分析* 按钮。

![window_menu.png](/assets/docs/products/transfer-assistant/window_menu.png)

![scenes_zh-cn.png](/assets/docs/products/transfer-assistant/scenes_zh-cn.png)

### 其他详细信息

右上角的下拉菜单允许您在不同的对象选择模式之间切换。

- **单一目标**: 仅分析一个根对象。
- **多目标**: 分析多个根对象。
- **当前场景**: 分析打开场景的所有根对象，并将场景本身添加到导出列表中。
  - 这**不包括**场景中的渲染设置。天空盒、光照数据和其他场景引用将不会包含在导出中。
  - 如果您打开了多个场景，则都会被分析。

如果您决定更改目标，或者对任何资源进行了修改，请点击 *执行分析* 按钮以刷新内容。

## 更改窗口语言

您可以使用窗口底部的下拉菜单更改语言，该下拉菜单显示英文单词 *"Language"*。 <!-- AI: On this line, the word Language which is in quotes at near the end of the sentence must be kept written in English using alphabetical characters. -->

:::note
如果您的语言不可用，但您精通技术，您可以：
- 要求大语言模型将 `Packages/dev.hai-vr.transfer-assistant/Scripts/Editor/Locale/en.json` 文件翻译成一个新的 `.json` 文件，
- 然后在 Unity 编辑器窗口中按 `CTRL-R`，
- 然后点击语言选择下拉菜单右侧的刷新按钮。
:::

![language.png](/assets/docs/products/transfer-assistant/language.png)

## 缩小您想要保留的资源引用范围

按下左侧侧边栏中的复选框以影响将导出的资源。

这些复选框具有**级联效应**；例如，取消选中 Materials 将影响哪些贴图被导出。

:::info
*Transfer Assistant* **从不修改**预制件或场景，因此点击任何按钮都是安全的。
:::

![checkboxes_zh-cn.png](/assets/docs/products/transfer-assistant/checkboxes_zh-cn.png)

#### 包含 EditorOnly

- 选中时，包含所有对象。**这是默认选项。**
- 取消选中时，不包含 EditorOnly 对象及其任何子对象中引用的资源。
  - 但是，为了避免导入过程中出现错误，预制件源始终会被包含，即使预制件实例是 EditorOnly。

即使在导出过程中，这也不会从预制件中删除标记为 EditorOnly 的 GameObject 或组件；它只是忽略它们包含的引用。

是否选中此项取决于您的工作流程。

#### 包含 Prefab 中的隐藏项目

此选项处理覆盖预制件实例如何隐藏源预制件内部资源的问题。

- 选中时，即使您的目标对象因为覆盖而在层级结构中未使用该资源，源预制件中引用的资源也会被包含。
- 取消选中时，源预制件中引用的资源不会被包含，因此仅包含您的目标对象主动使用的资源。**这是默认选项。**
  - 对于**化身类项目**，这是推荐的选项，因为您通常只对化身上主动使用的内容感兴趣。

> ![simplehidden.png](/assets/docs/products/transfer-assistant/simplehidden.png)
>
> 默认情况下， *包含 Prefab 中的隐藏项目* 处于未选中状态。保持未选中状态有时会导致导出的资源数量大幅减少。
>
> 在这个例子中，通过将材质转换为 NonToon 修改了一个化身。
> - 预制件源仍然引用转换之前的旧材质，尽管化身并未主动使用这些材质。
> - 通过保持 *包含 Prefab 中的隐藏项目* 为未选中状态，那些旧材质将不包含在导出中，仅包含 NonToon 材质。

#### 剔除

- 选中某种资源类型时，该资源类型将被包含，并且该资源类型引用的任何其他资源也将被包含。
- 取消选中某种资源类型时，该资源类型将不被包含，并且该资源类型引用的资源也不被包含。

>![culling.png](/assets/docs/products/transfer-assistant/culling.png)
>
> 取消选中 *Animator Controller* 不仅会从导出中删除 *Animator Controllers*，还会从导出中删除这些 *Animator Controllers* 使用的 *Blend Tree* 资源和 *Animation Clip* 资源。

#### 组件

- 选中某个组件时，该组件引用的任何资源都将被包含，并且这些资源引用的任何其他资源也将被包含。
- 取消选中某个组件时，这些组件引用的资源将不被包含，并且这些资源引用的资源也不被包含。

即使在导出过程中，这也不会从预制件中删除组件。

## 探索哪些资源需要其他资源

*Transfer Assistant* 的主面板包含一个对象的依赖树。该树的显示方式是根节点依赖于子节点（即子节点是对象所依赖的内容）。

许多对象（如材质或贴图）会被多次使用，这意味着它们会有多个父节点；当发生这种情况时，您会在该树中多次看到同一个对象。

为了简明起见，每个对象仅显示其子节点一次；其他出现的地方将在右侧添加文字 "*(已显示)*"。

点击任何对象以高亮显示该对象的位置。

使用以下功能进行导航并弄清楚为什么需要某些对象：
- 按下**特定对象上的放大镜图标**以聚焦于该对象。<br/>使用此功能了解它依赖于哪些对象以及哪些对象依赖于它。
- 按下**侧边栏上的放大镜图标**以聚焦于这些资源类型。<br/>使用此功能可视化需要这些资源类型的每个依赖项。
- 在**搜索框**中输入文本以查找特定的资源名称。

您可以再次点击放大镜图标以清除搜索。

![search_zh-cn.png](/assets/docs/products/transfer-assistant/search_zh-cn.png)

:::note
颜色编码如下：

- 大多数变灰的对象都不是资源，例如，它们可能是组件或非预制件的 GameObject。组件显示为变灰的黄色。
- 蓝色对象是 *Prefab Sources* 或 *Prefab Models*，这是项目中以文件形式存在的预制件资源。
- 绿色对象是 *Prefab Instances*，这是场景对象。它们可能存在于场景中或在其他预制件内部。

*Prefab Instances* 通常与它所依赖的 *Prefab Source* 同名，这可能会导致阅读混淆。这就是它们被颜色编码的原因。
:::

## 准备导出以预览将导出的资源文件

在侧边栏中，按下 *准备导出...* 按钮。这将打开一个新窗口，看起来类似于 *Export .unitypackage* 窗口。

在这里，您可以检查将导出哪些文件并细化您的选择。

该窗口的侧边栏有每种资源类型的按钮。这些按钮**不**具有级联效应。

- **Select**: 选择该类型的资源，这会将它们包含在导出中。
- **Deselect**: 取消选择该类型的资源，这会将它们从导出中排除。
- **Deselect and Hide**: 取消选择该类型的资源并将其从“导出”窗口中删除。
    - *注意：按下 Deselect and Hide 将**不会**取消选择被这些资源引用的资源，因此这与 Transfer Assets 窗口中的 Culling 选项不同。*

![export_zh-cn.png](/assets/docs/products/transfer-assistant/export_zh-cn.png)

:::warning
在 *Transfer Assistant* 窗口中所做的更改将不会反映在 *Prepare Export* 窗口中：

如果您决定缩小或扩大依赖关系，您将需要再次按下 *准备导出...* 按钮。
:::

## 找出为什么需要意外的资源文件

在 *Prepare Export* 窗口中，您有时可能会看到某些文件，但不明白为什么要导出它们。

在这种情况下，按下 *Prepare Export* 窗口右侧的**放大镜图标**。这将在 *Transfer Assistant* 窗口内搜索该资源。

您可以使用此信息来弄清楚层级结构中的哪个对象需要该资源。

:::tip
即使您不打算导出文件，也可以按下 *准备导出...* 按钮。

由于 *Prepare Export* 窗口将您的依赖关系表示为文件和文件夹，因此这对于帮助定位意外资源非常有用。
:::

![exportexplain.png](/assets/docs/products/transfer-assistant/exportexplain.png)

## 导出选定的资源

在 *Prepare Export* 窗口底部附近，按下 *导出到文件...* 按钮将选定的资源导出到您选择的文件。

或者，按下 *快速导出* 按钮导出或覆盖到 `export.unitypackage` 文件中。
