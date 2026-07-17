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

이 Unity 도구는 *.unitypackage* 내보내기 기능을 사용하여 불필요하다고 판단되는 에셋을 제거하면서 **한 프로젝트에서 다른 프로젝트로 에셋을 전송**할 때 도움을 줍니다.

![general_ko.png](/assets/docs/products/transfer-assistant/general_ko.png)

이 도구는 **일부 에셋 참조를 의도적으로 무시**하여 실제로 필요한 에셋만 유지합니다.

- 프리팹에서 참조하는 모든 에셋을 내보내는 대신, 메인 아바타에 존재하는 에셋만 내보냅니다.
  프리팹이 메인 아바타가 사용하지 않는 에셋을 사용하는 경우 해당 에셋은 포함되지 않습니다. 이는 기본 동작이지만 변경할 수 있습니다.
- 타입이나 컴포넌트별로 에셋을 무시하도록 선택할 수 있으며, 해당 에셋들이 참조하는 다른 에셋들도 함께 무시됩니다. 예:
  - 머티리얼을 무시하면 해당 머티리얼에서 사용하는 텍스처도 무시됩니다.
  - *Modular Avatar Menu Item* 과 같은 컴포넌트를 무시하면 해당 컴포넌트에서 참조하는 아이콘 텍스처도 무시됩니다.
- EditorOnly로 표시된 오브젝트가 참조하는 에셋을 무시하도록 선택할 수 있습니다.

내보내기에 예기치 않은 에셋이 포함된 경우, *Transfer Assistant* 사용자 인터페이스를 통해 어떤 오브젝트나 컴포넌트가 해당 에셋에 의존하고 있는지 확인할 수 있습니다.

![dependency_ko.png](/assets/docs/products/transfer-assistant/dependency_ko.png)

*Transfer Assistant* 는 씬이나 프리팹의 내용을 절대 수정하지 않습니다.

이 도구의 주된 용도는 **서로 다른 게임 간에 아바타 프로젝트 파일을 내보내는 것**입니다. (예: Unity 2022 BIRP 프로젝트에서 독립형 Unity 6.4 URP 프로젝트로)
이러한 프로젝트에서는 에셋이 여러 폴더에 흩어져 있으며, 그 안에는 애니메이터 컨트롤러나 애니메이션 파일과 같이 대상 프로젝트에서 필요하지 않아 제외하고 싶은 에셋들이 포함되어 있을 수 있습니다.

### 이 도구가 적합하지 않은 경우

제품 제작자인 경우, 이 도구는 출시 및 배포를 위한 *.unitypackage* 파일을 내보내기 위해 설계된 것이 **아닙니다**. 이러한 에셋은 일반적으로 폴더 구조에서 더 엄격한 관리가 필요하기 때문입니다.
이 도구의 일부 기능은 내부 조사 목적으로 사용될 수 있지만, 제품 출시 관리용으로 사용하는 것은 **권장되지 않습니다**.

## 다운로드

이 도구는 Booth.pm에서 다운로드할 수 있습니다:

<p style={{color:"#FF0000"}}>**TODO: LINK TO BOOTH PAGE**</p>

ALCOM을 통해서도 설치할 수 있습니다.

<HaiLocalization languages={['en', 'ja']} />

## 사용 방법

도구 사용의 기본 단계는 다음과 같습니다:

- [분석할 에셋 선택하기.](#분석할-에셋-선택하기)
- [유지하고 싶은 에셋 참조 좁히기.](#유지하고-싶은-에셋-참조-좁히기)
- [어떤 에셋이 다른 에셋을 필요로 하는지 살펴보기.](#어떤-에셋이-다른-에셋을-필요로-하는지-살펴보기)
- [어떤 에셋 파일이 내보내질지 미리 보기 위해 내보내기 준비하기.](#어떤-에셋-파일이-내보내질지-미리-보기 위해-내보내기-준비하기)
- [왜 예기치 않은 에셋 파일이 필요한지 알아내기.](#왜-예기치-않은-에셋-파일이-필요한지-알아내기)
- [선택한 에셋 내보내기.](#선택한-에셋-내보내기)

## 분석할 에셋 선택하기

시작하려면 다음 중 하나를 선택하세요:

- [프리팹 분석](#프리팹-분석), 또는
- [씬 분석](#씬-분석).

### 프리팹 분석

*Project* 탭에서 프리팹을 우클릭하고 *Transfer Assistant...* 를 선택합니다.

또는 *Window > Haï~ > Transfer Assistant* 로 이동하여 프리팹을 선택한 다음 *분석 실행* 버튼을 클릭합니다.

:::info
아바타 작업을 하는 경우, Project 뷰에서 아바타가 포함된 프리팹을 선택해야 합니다.
:::

![project_menu.png](/assets/docs/products/transfer-assistant/project_menu.png)

### 씬 분석

씬 내에 포함된 오브젝트를 분석하려면 다음을 수행해야 합니다:

- Unity 에디터에서 씬을 엽니다.
- *Window > Haï~ > Transfer Assistant* 로 이동합니다.
- 오른쪽 상단의 드롭다운을 **현재 씬** 로 설정합니다.
- *분석 실행* 버튼을 클릭합니다.

![window_menu.png](/assets/docs/products/transfer-assistant/window_menu.png)

![scenes_ko.png](/assets/docs/products/transfer-assistant/scenes_ko.png)

### 추가 상세 정보

오른쪽 상단의 드롭다운을 통해 다양한 오브젝트 선택 모드 간에 전환할 수 있습니다.

- **단일 대상**: 하나의 루트 오브젝트만 분석합니다.
- **여러 대상**: 여러 개의 루트 오브젝트를 분석합니다.
- **현재 씬**: 열려 있는 씬의 모든 루트 오브젝트를 분석하며, 씬 자체도 내보내기에 추가됩니다.
  - 여기에는 씬의 렌더 설정은 **포함되지 않습니다**. 스카이박스, 라이팅 데이터 및 기타 씬 참조는 내보내기에 포함되지 않습니다.
  - 여러 씬이 열려 있는 경우 모두 분석됩니다.

대상을 변경하거나 에셋을 수정한 경우 *분석 실행* 버튼을 클릭하여 내용을 새로 고침하세요.

## 창 언어 변경하기

창 하단에 영어로 *"Language"* 라고 적힌 드롭다운을 사용하여 언어를 변경할 수 있습니다. <!-- AI: On this line, the word Language which is in quotes at near the end of the sentence must be kept written in English using alphabetical characters. -->

:::note
원하는 언어를 사용할 수 없지만 기술적인 지식이 있는 경우 다음과 같이 할 수 있습니다:
- LLM(대규모 언어 모델)에게 `Packages/dev.hai-vr.transfer-assistant/Scripts/Editor/Locale/en.json` 파일을 새로운 `.json` 파일로 번역하도록 요청합니다.
- Unity 에디터 창에서 `CTRL-R` 을 누릅니다.
- 언어 선택 드롭다운 오른쪽에 있는 새로 고침 버튼을 누릅니다.
:::

![language.png](/assets/docs/products/transfer-assistant/language.png)

## 유지하고 싶은 에셋 참조 좁히기

왼쪽 사이드바의 체크박스를 눌러 내보낼 에셋에 영향을 줍니다.

이 체크박스들은 **연쇄 효과(cascading effect)** 를 가집니다. 예를 들어, Materials 체크를 해제하면 내보낼 Textures에도 영향을 미칩니다.

:::info
*Transfer Assistant* 는 프리팹이나 씬을 **절대 수정하지 않으므로**, 어떤 버튼이든 안심하고 클릭해도 됩니다.
:::

![checkboxes_ko.png](/assets/docs/products/transfer-assistant/checkboxes_ko.png)

#### EditorOnly 포함

- 체크하면 모든 오브젝트가 포함됩니다. **기본 옵션입니다.**
- 체크를 해제하면 EditorOnly 오브젝트 및 그 자식 오브젝트 내부에서 참조되는 에셋은 포함되지 않습니다.
  - 하지만 임포트 시 오류를 방지하기 위해 프리팹 인스턴스가 EditorOnly이더라도 프리팹 소스는 항상 포함됩니다.

내보내는 동안에도 프리팹에서 EditorOnly로 표시된 GameObject나 컴포넌트를 제거하지는 않으며, 포함된 참조만 무시합니다.

체크 여부는 워크플로우에 따라 결정하세요.

#### 프리팹 내 숨겨진 항목 포함

이 옵션은 프리팹 인스턴스를 오버라이딩할 때 소스 프리팹 내부의 에셋이 숨겨지는 경우를 처리합니다.

- 체크하면 대상 오브젝트가 계층 구조에서 오버라이드하여 사용하지 않더라도 소스 프리팹 내에서 참조되는 에셋이 포함됩니다.
- 체크를 해제하면 소스 프리팹 내에서 참조되는 에셋은 포함되지 않으며, 대상 오브젝트가 실제로 사용 중인 에셋만 포함됩니다. **기본 옵션입니다.**
  - 아바타 프로젝트에서는 대개 아바타에서 실제로 사용 중인 것에만 관심이 있으므로 이 옵션이 **권장**됩니다.

> ![simplehidden.png](/assets/docs/products/transfer-assistant/simplehidden.png)
>
> 기본적으로 *프리팹 내 숨겨진 항목 포함* 은 체크 해제되어 있습니다. 체크를 해제해 두면 내보내는 에셋의 수가 급격히 줄어들 수 있습니다.
>
> 이 예시에서는 머티리얼을 NonToon으로 변환하여 아바타를 수정했습니다.
> - 프리팹 소스는 아바타가 해당 머티리얼을 실제로 사용하지 않음에도 불구하고 변환 전의 이전 머티리얼을 여전히 참조하고 있습니다.
> - *프리팹 내 숨겨진 항목 포함* 를 체크 해제하면 해당 이전 머티리얼들은 내보내기에 포함되지 않고 NonToon 머티리얼만 포함됩니다.

#### 솎아내기

- 에셋 타입을 체크하면 해당 에셋 타입이 포함되며, 해당 에셋 타입이 참조하는 다른 에셋들도 포함됩니다.
- 에셋 타입 체크를 해제하면 해당 에셋 타입이 포함되지 않으며, 해당 에셋 타입이 참조하는 에셋들도 포함되지 않습니다.

>![culling.png](/assets/docs/products/transfer-assistant/culling.png)
>
> *Animator Controller* 체크를 해제하면 내보내기에서 *Animator Controller* 가 제거될 뿐만 아니라, 해당 *Animator Controller* 가 사용하는 *Blend Tree* 에셋과 *Animation Clip* 에셋도 내보내기에서 제거됩니다.

#### 컴포넌트

- 컴포넌트를 체크하면 해당 컴포넌트가 참조하는 모든 에셋이 포함되며, 해당 에셋이 참조하는 다른 모든 에셋들도 포함됩니다.
- 컴포넌트 체크를 해제하면 해당 컴포넌트가 참조하는 에셋이 포함되지 않으며, 해당 에셋이 참조하는 다른 에셋들도 포함되지 않습니다.

내보내는 동안에도 프리팹에서 컴포넌트를 제거하지는 않습니다.

## 어떤 에셋이 다른 에셋을 필요로 하는지 살펴보기

*Transfer Assistant* 의 메인 패널에는 오브젝트의 의존성 트리(dependency tree)가 포함되어 있습니다. 이 트리는 루트가 자식에 의존하는 형식으로 표시됩니다. (= 자식은 오브젝트가 의존하는 대상입니다)

머티리얼이나 텍스처와 같은 많은 오브젝트는 여러 번 사용되므로 여러 부모를 가질 수 있습니다. 이 경우 트리에서 동일한 오브젝트를 여러 번 볼 수 있습니다.

간결함을 위해 각 오브젝트는 자식을 한 번만 표시합니다. 다른 위치에 나타날 때는 텍스트 오른쪽에 "*(이미 표시됨)*" 이 추가됩니다.

오브젝트를 클릭하여 해당 오브젝트의 위치를 강조 표시할 수 있습니다.

다음 기능을 사용하여 탐색하고 일부 오브젝트가 왜 필요한지 파악하세요:
- **특정 오브젝트의 돋보기 아이콘**을 눌러 해당 오브젝트에 포커스합니다.<br/>이를 통해 해당 오브젝트가 어떤 에셋에 의존하고 있으며, 어떤 에셋이 해당 오브젝트에 의존하는지 파악할 수 있습니다.
- **사이드바의 돋보기 아이콘**을 눌러 해당 에셋 타입에 포커스합니다.<br/>이를 통해 해당 에셋 타입을 필요로 하는 모든 의존성을 시각화할 수 있습니다.
- **검색 필드**에 텍스트를 입력하여 특정 에셋 이름을 검색합니다.

돋보기 아이콘을 다시 클릭하면 검색이 초기화됩니다.

![search_ko.png](/assets/docs/products/transfer-assistant/search_ko.png)

:::note
색상 코드는 다음과 같습니다:

- 회색으로 표시된 대부분의 오브젝트는 에셋이 아닙니다. 예를 들어, 프리팹이 아닌 컴포넌트나 GameObject일 수 있습니다. 컴포넌트는 회색빛이 도는 노란색으로 표시됩니다.
- 파란색 오브젝트는 프로젝트에 파일로 존재하는 프리팹 에셋인 *Prefab Sources* 또는 *Prefab Models* 입니다.
- 초록색 오브젝트는 씬 오브젝트인 *Prefab Instances* 입니다. 씬 내부 또는 다른 프리팹 내부에 존재할 수 있습니다.

*Prefab Instances* 는 종종 의존하는 *Prefab Source* 와 이름이 같아서 혼동될 수 있습니다. 그래서 색상으로 구분됩니다.
:::

## 어떤 에셋 파일이 내보내질지 미리 보기 위해 내보내기 준비하기

사이드바에서 *내보내기 준비...* 버튼을 누릅니다. 그러면 *Export .unitypackage* 창과 유사한 새 창이 열립니다.

거기서 어떤 파일들이 내보내질지 검토하고 선택 사항을 세부적으로 조정할 수 있습니다.

해당 창의 사이드바에는 각 에셋 타입별 버튼이 있습니다. 이 버튼들은 **연쇄 효과를 가지지 않습니다**.

- **Select**: 해당 타입의 에셋을 선택하여 내보내기에 포함합니다.
- **Deselect**: 해당 타입의 에셋 선택을 해제하여 내보내기에서 제외합니다.
- **Deselect and Hide**: 해당 타입의 에셋 선택을 해제하고 내보내기 창에서 제거합니다.
    - *참고: Deselect and Hide를 눌러도 해당 에셋들이 참조하는 에셋들의 선택이 해제되지는 않으므로, Transfer Assets 창의 Culling 옵션과는 다릅니다.*

![export_ko.png](/assets/docs/products/transfer-assistant/export_ko.png)

:::warning
*Transfer Assistant* 창에서 변경한 내용은 *Prepare Export* 창에 반영되지 않습니다:

의존성을 좁히거나 넓히기로 결정했다면 *내보내기 준비...* 버튼을 다시 눌러야 합니다.
:::

## 왜 예기치 않은 에셋 파일이 필요한지 알아내기

*Prepare Export* 창에서 가끔 왜 내보내지는지 알 수 없는 파일들을 볼 수 있습니다.

그런 경우 *Prepare Export* 창 오른쪽에 있는 **돋보기 아이콘**을 누르세요. 그러면 *Transfer Assistant* 창 내에서 해당 에셋을 검색합니다.

이 정보를 사용하여 계층 구조의 어떤 오브젝트가 해당 에셋을 필요로 하는지 파악할 수 있습니다.

:::tip
파일을 실제로 내보낼 생각이 없더라도 *내보내기 준비...* 버튼을 누를 수 있습니다.

*Prepare Export* 창은 의존성을 파일 및 폴더로 표시하므로 예기치 않은 에셋을 찾는 데 유용한 정보가 됩니다.
:::

![exportexplain.png](/assets/docs/products/transfer-assistant/exportexplain.png)

## 선택한 에셋 내보내기

*Prepare Export* 창 하단 근처에 있는 *파일로 내보내기...* 버튼을 눌러 선택한 에셋을 원하는 파일로 내보냅니다.

또는 *빠른 내보내기* 버튼을 눌러 `export.unitypackage` 파일로 내보내거나 덮어씁니다.
