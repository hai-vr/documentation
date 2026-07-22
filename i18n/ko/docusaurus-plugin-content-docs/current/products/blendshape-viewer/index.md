---
title: Blendshape Viewer (V3)
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";
import HaiSupport from "/docs/_support.mdx";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

*Blendshape Viewer*를 사용하면 모델의 어떤 영역이 블렌드쉐이프의 영향을 받는지 시각화하여 해당 값을 미세 조정할 수 있습니다.

:::tip[호환성 참고 사항]
- Unity 2022 및 Unity 6.4에서 작동 확인되었으며, 최신 버전에서도 작동할 것입니다.
- 🌊 특정 게임 전용 SDK는 필요하지 않습니다.
- Unity 2022 미만 버전을 사용하는 경우 버전 2.1.2를 사용해야 합니다.
:::

![Unity_Q4csWb8ty6.png](/assets/docs/products/blendshape-viewer/v3/Unity_Q4csWb8ty6.png)

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-25-45_Je9CWGeOH8.mp4"></HaiVideo>

## 다운로드

이 도구는 [Booth.pm](https://hai-vr.booth.pm/items/3582541)에서 다운로드할 수 있습니다:

ALCOM을 통해서도 설치할 수 있습니다:
- 이 링크를 사용하여 **[ALCOM에 저장소 목록 설치](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**를 하세요.
- ALCOM을 사용하여 프로젝트에 *Haï ~ Blendshape Viewer* 를 추가하세요.

<HaiSupport/>

## 사용 방법

### 프리뷰할 오브젝트 선택

프리뷰하려는 *SkinnedMeshRenderer*를 선택합니다. 인스펙터에서 점 세 개를 클릭하고 "Haï Blendshape Viewer"를 선택합니다.

![how_to_open](/assets/docs/products/blendshape-viewer/v3/how_to_open.png)

### 씬 뷰를 메쉬에 맞추기

Scene 탭을 사용하여 메쉬에 포커스를 맞추도록 둘러본 다음, *업데이트*를 눌러 썸네일을 새로 고칩니다. 썸네일은 씬 뷰와 동일한 카메라 설정을 사용합니다.

썸네일을 더 크게 만들려면 *썸네일 크기* 슬라이더를 변경하고 *업데이트* 버튼을 다시 누르십시오.

:::tip
더 나은 결과를 위해 Scene 카메라의 시야각(Field of View)을 변경할 수 있다는 점을 기억하십시오.

![field_of_view](/assets/docs/products/blendshape-viewer/Untitled_5.png)
:::

### 어떤 블렌드쉐이프가 어떤 영역에 영향을 주는지 확인하기

기본적으로 썸네일에는 차이점이 표시됩니다. 이를 원하지 않는 경우 *차이 표시*를 해제하십시오.

*Blendshape Viewer* 창 내부에 커서를 둔 상태에서 ALT 키를 누르면 블렌드쉐이프가 적용되지 않은 원본 사진이 표시됩니다.

ALT 키의 기능은 오른쪽 상단의 드롭다운에서 변경할 수 있습니다:

- ALT 키를 누르고 있는 동안 원본 사진을 보려면 *ALT 키로 원본 표시*를 선택하십시오.
- ALT 키를 누르고 있는 동안 차이점을 노란색으로 강조하려면 *ALT 키로 핫스팟 표시*를 선택하십시오.
- 기본적으로 차이점을 노란색으로 강조하려면 *기본적으로 핫스팟 표시*를 선택하십시오. 이 상태에서 ALT 키를 누르면 일반적인 영역이 표시됩니다.
- ALT 키의 기능을 비활성화하려면 *ALT 키가 아무것도 하지 않음*을 선택하십시오.

### 블렌드쉐이프 검색

*검색* 필드에 입력하여 블렌드쉐이프 이름으로 결과를 필터링합니다.

검색어는 공백으로 구분할 수 있습니다. 검색 쿼리 `eye down`은 `eye_lookdown`과 같은 결과를 찾을 수 있습니다.

### 블렌드쉐이프 이름 복사

**클립보드 아이콘**을 클릭하여 블렌드쉐이프 이름을 복사합니다.

또는 블렌드쉐이프 이름이 포함된 텍스트를 선택할 수도 있습니다.

### 블렌드쉐이프 값 변경

각 블렌드쉐이프 아래의 슬라이더는 씬에서 해당 블렌드쉐이프의 값을 수정합니다.

이는 애니메이션 녹화 중에도 사용할 수 있습니다.

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-18-15_4Kdbs1Hlck.mp4"></HaiVideo>

## 특별 감사

- [Compute Shader](https://github.com/hai-vr/blendshape-viewer/commit/46db696df8be42d251f59c3f0fb240b117905c76)를 제공해주신 [Pema](https://github.com/pema99/)님께 감사드립니다!
