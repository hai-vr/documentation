---
title: Lightbox Viewer
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 2.5.0-beta.4

안티앨리어싱 강제 옵션을 추가했습니다. 이는 일부 스탠드얼론 프로젝트 설정(예: Basis Framework 프로젝트)에서 도움이 될 수 있습니다.

## 2.5.0-beta.3

편집 모드에서 씬 계층 구조 탭의 가시성 아이콘으로 숨겨진 오브젝트를 숨깁니다.

수정: 오브젝트 변경 이벤트가 더 이상 플레이 모드에서 트리거되지 않아야 합니다. 이로 인해 로그에 오류가 발생하던 문제가 해결되었습니다.

## 2.5.0-beta.2

추가 씬에서 URP Adaptive Probe Volumes 문제로 인해 lilToon 2.3.0 프리뷰가 올바르지 않던 문제를 수정했습니다.

- 기본 라이팅 데이터가 추가 씬의 Adaptive Probe Volumes에 부정적인 영향을 미치던 문제 수정:
  - 기본 씬에는 기본 라이팅 데이터 에셋이 할당되어 있습니다.
  - 이 기본 라이팅 데이터로 인해 렌더링 결과가 다르게 보였으며, 이는 lilToon 2.3.0에서 가장 두드러졌습니다.
  - 현재 씬이 기본 라이팅 데이터를 사용하는지 확인하여 수정했습니다. 사용하는 경우 라이트박스 사용 기간 동안 null로 설정합니다.
  - 이로써 Lightbox Viewer URP의 https://github.com/hai-vr/lightbox-viewer-urp/issues/1 문제가 해결될 것입니다.

## 2.5.0-beta.1

이제 Lightbox Viewer가 다음 항목과 호환됩니다:
- BIRP Light Probes
- BIRP VRCLV
- URP Adaptive Probe Volumes
- URP Light Probes

URP Light Probes 지원 추가:
- 현재 렌더 파이프라인이 URP인 경우, 품질 설정에서 Adaptive Probe Volumes 대신 Light Probes를 사용하면 다른 씬으로 전환합니다.
- 프로젝트에 URP가 있는 경우, 품질 설정 변경을 감지합니다.

이전 알파 버전에서 제안된 것과 달리, 호환성 시도가 실패하여 여전히 macOS와 호환되지 않습니다.

알파 버전의 이전 변경 로그를 시간순으로 반복(macOS 변경 사항 제외):

*2.4.1-alpha.1 버전:*

- 성능 향상을 위해 편집 모드 전략 변경:
    - 이전에는 아바타가 실수로 수정되지 않도록 매 프레임 아바타를 복사했습니다.
    - 이번 변경으로 'Object To View'에 대한 참조가 변경되지 않는 경우, 계층 구조 내의 저장되지 않는 숨겨진 GameObject로 아바타를 복사합니다.
    - 오브젝트 변경 이벤트를 사용하여 씬의 변경 사항을 감지합니다. 트랜스폼 이외의 변경 사항이 발생하면 복사된 오브젝트를 파괴하고 새로 생성합니다.
    - 이 복사된 오브젝트는 렌더링 사이클 사이에 아래로 10,000 유닛 이동됩니다.
    - 아바타 활성화는 느리기 때문에 렌더링 사이클 사이에 원본 아바타를 비활성화하지 않습니다.
    - 복사본에서는 바인딩에 시간이 걸리고 불필요한 Animator를 제거했습니다.

*2.4.1-alpha.2 버전:*

- URP 프로젝트 지원 추가:
    - 프로젝트가 BIRP인지 감지합니다.
    - BIRP가 아닌 경우 Post-Processing V2 패키지 설치를 권장하지 않습니다.
    - BIRP가 아닌 경우 Light Volumes 패키지가 설치되어 있더라도 URP 씬을 로드합니다.

*2.5.0-alpha.2 버전:*

- GPU에서 CPU로 텍스처를 복사할 필요가 없는 최적화를 시도했습니다.

*2.5.0-alpha.3 버전:*

- Unity 6.2 Basis 프로젝트에서 깊이(depth)가 뷰 렌더링에 영향을 미치던 문제를 해결하려고 시도했습니다.

## 2.5.0-alpha.3

- Unity 6.2 Basis 프로젝트에서 깊이(depth)가 뷰 렌더링에 영향을 미치던 문제를 해결하려고 시도했습니다.

## 2.5.0-alpha.2

GPU에서 CPU로 텍스처를 복사할 필요가 없는 최적화를 시도했습니다.

이는 2.5.0-alpha.1에서 도입된 변경 사항이 효과가 없었을 수 있으므로 macOS의 Metal 지원을 개선할 수도 있습니다.

## 2.5.0-alpha.1

Async GPU readback이 없는 시스템 지원 시도:
- Async GPU readback이 없는 것으로 보이는 macOS의 Metal 지원을 시도했습니다.

*2.4.1-alpha.2 버전:*

- URP 프로젝트 지원 추가:
  - 프로젝트가 BIRP인지 감지합니다.
  - BIRP가 아닌 경우 Post-Processing V2 패키지 설치를 권장하지 않습니다.
  - BIRP가 아닌 경우 Light Volumes 패키지가 설치되어 있더라도 URP 씬을 로드합니다.

*2.4.1-alpha.1 버전:*

- 성능 향상을 위해 편집 모드 전략 변경:
  - 이전에는 아바타가 실수로 수정되지 않도록 매 프레임 아바타를 복사했습니다.
  - 이번 변경으로 'Object To View'에 대한 참조가 변경되지 않는 경우, 계층 구조 내의 저장되지 않는 숨겨진 GameObject로 아바타를 복사합니다.
  - 오브젝트 변경 이벤트를 사용하여 씬의 변경 사항을 감지합니다. 트랜스폼 이외의 변경 사항이 발생하면 복사된 오브젝트를 파괴하고 새로 생성합니다.
  - 이 복사된 오브젝트는 렌더링 사이클 사이에 아래로 10,000 유닛 이동됩니다.
  - 아바타 활성화는 느리기 때문에 렌더링 사이클 사이에 원본 아바타를 비활성화하지 않습니다.
  - 복사본에서는 바인딩에 시간이 걸리고 불필요한 Animator를 제거했습니다.

- 수정: 수직 변위(Vertical Displacement)를 리셋할 수 없던 문제를 수정했습니다.

## 2.4.1-alpha.2

URP 프로젝트 지원 추가:
- 프로젝트가 BIRP인지 감지합니다.
- BIRP가 아닌 경우 Post-Processing V2 패키지 설치를 권장하지 않습니다.
- BIRP가 아닌 경우 Light Volumes 패키지가 설치되어 있더라도 URP 씬을 로드합니다.

## 2.4.1-alpha.1

- 성능 향상을 위해 편집 모드 전략 변경:
  - 이전에는 아바타가 실수로 수정되지 않도록 매 프레임 아바타를 복사했습니다.
  - 이번 변경으로 'Object To View'에 대한 참조가 변경되지 않는 경우, 계층 구조 내의 저장되지 않는 숨겨진 GameObject로 아바타를 복사합니다.
  - 오브젝트 변경 이벤트를 사용하여 씬의 변경 사항을 감지합니다. 트랜스폼 이외의 변경 사항이 발생하면 복사된 오브젝트를 파괴하고 새로 생성합니다.
  - 이 복사된 오브젝트는 렌더링 사이클 사이에 아래로 10,000 유닛 이동됩니다.
  - 아바타 활성화는 느리기 때문에 렌더링 사이클 사이에 원본 아바타를 비활성화하지 않습니다.
  - 복사본에서는 바인딩에 시간이 걸리고 불필요한 Animator를 제거했습니다.

- 수정: 수직 변위(Vertical Displacement)를 리셋할 수 없던 문제를 수정했습니다.

## 2.4.0

- 라이트박스 컬렉션을 추가했습니다. 이제 사용자는 기본 6개 라이트박스에서 다른 전문적인 라이트박스로 전환할 수 있습니다.
  - Light Volumes 전용 특수 라이트박스를 추가했습니다. 이를 위해서는 Light Volumes 패키지 설치가 필요합니다.
  - 이전에는 숨겨져 있던 Spotlight Cookie 라이트박스를 노출했습니다.
- 이전에는 뷰 대상 오브젝트 내부의 라이트가 비활성화되었습니다. 이제 기본적으로 비활성화되지 않습니다.
- 뷰 대상 오브젝트 내부의 라이트를 비활성화하는 옵션을 추가했습니다.
- 깊이 텍스처(Depth Texture)가 필요한 쉐이더를 지원하는 옵션을 추가했습니다.
  - 이는 [Poiyomi's DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) 라이트 설정을 사용하지만, 설치 충돌을 피하기 위해 다른 GUID로 다시 패키징되었습니다.
- Advanced 메뉴가 사이드바가 되었습니다.
- Lightbox Viewer 창을 닫을 때 리셋되는 대신 일부 설정이 에디터 전체에 저장됩니다.
  - 여기에는 *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*가 포함됩니다.

![Unity_a6UfNnk6f1.png](/assets/docs/products/lightbox-viewer/Unity_a6UfNnk6f1.png)

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## 2.4.0-beta.2

- 수정: 도메인 재로드(Reload Domain)가 기본값일 때 플레이 모드에서 컬렉션이 표시되지 않던 문제를 수정했습니다.

## 2.4.0-beta.1

- 라이트박스 컬렉션을 추가했습니다. 이제 사용자는 기본 6개 라이트박스에서 다른 전문적인 라이트박스로 전환할 수 있습니다.
  - Light Volumes 전용 특수 라이트박스를 추가했습니다. 이를 위해서는 Light Volumes 패키지 설치가 필요합니다.
  - 이전에는 숨겨져 있던 Spotlight Cookie 라이트박스를 노출했습니다.
- 이전에는 뷰 대상 오브젝트 내부의 라이트가 비활성화되었습니다. 이제 기본적으로 비활성화되지 않습니다.
- 뷰 대상 오브젝트 내부의 라이트를 비활성화하는 옵션을 추가했습니다.
- 깊이 텍스처(Depth Texture)가 필요한 쉐이더를 지원하는 옵션을 추가했습니다.
  - 이는 [Poiyomi's DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) 라이트 설정을 사용하지만, 설치 충돌을 피하기 위해 다른 GUID로 다시 패키징되었습니다.
- Advanced 메뉴가 사이드바가 되었습니다.
- Lightbox Viewer 창을 닫을 때 리셋되는 대신 일부 설정이 에디터 전체에 저장됩니다.
  - 여기에는 *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*가 포함됩니다.

## 2.3.0

프로젝트에 [Light Volumes](https://github.com/REDSIM/VRCLightVolumes)가 설치된 경우 지원을 추가했습니다.

라이트박스 자체는 변경되지 않으므로 차이는 미미합니다.
분홍색(Pink) 씬이 가장 두드러지는데, 왼손은 분홍색, 오른손은 보라색으로 조명됩니다.

:::warning
**프리뷰**에서 라이트 볼륨을 사용하려면 *아바타 업로드와 달리* lilToon 1.10과 같은 호환 쉐이더가 있는 것만으로는 충분하지 않음을 이해해 주십시오.
아바타 프로젝트에 실제 [Light Volumes 패키지](https://github.com/REDSIM/VRCLightVolumes?tab=readme-ov-file#installation-through-vrchat-creator-companion)가 설치되어 있어야 합니다.
:::

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>

*라이트 볼륨 적용 시:*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*라이트 볼륨 미적용 시:*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

## 2.3.0-beta.2

"Unknown error occurred while loading LightingData.asset" 오류 수정:
- 별도의 .lighting 파일로 씬을 다시 베이크했습니다.
- 이로써 "Unknown error occurred while loading LightingData.asset" 오류가 해결될 것입니다.

## 2.3.0-beta.1

프로젝트에 Light Volumes가 설치된 경우 지원을 추가했습니다.

라이트박스 자체는 변경되지 않으므로 차이는 미미합니다.
분홍색(Pink) 씬이 가장 두드러지는데, 왼손은 분홍색, 오른손은 보라색으로 조명됩니다.

*라이트 볼륨 적용 시:*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*라이트 볼륨 미적용 시:*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

- Light Volumes 지원을 위한 씬 추가: https://github.com/REDSIM/VRCLightVolumes
  - CPU 대신 Progressive GPU를 사용하므로 메인 씬과 다르게 베이크되었습니다.
  - 씬에는 Light Volumes가 비활성화된 비활성 라이트박스가 포함되어 있습니다.
- Light Volumes 패키지 버전 0.7.2 이상이 설치된 경우 이 씬이 기본적으로 선택됩니다.

## 2.2.0

복사본에서 모든 MonoBehaviour를 제거하여 편집 모드 속도 향상 시도:
- 복사본에서 모든 MonoBehaviour를 제거하여 OnEnable/OnDestroy가 호출되지 않도록 함으로써 편집 모드에서의 런타임 속도를 향상시키려고 시도했습니다.
- 이는 복사본에서 모든 MonoBehaviour를 제거하기 전에 비활성화된 부모 오브젝트 아래로 복사본을 배치하여 수행됩니다.

## 2.1.0

Unity 2022에서 Lightbox 씬의 라이팅 다시 베이크:
- 현재 라이트맵이 Unity 2022에서 오작동하는 것으로 보입니다(특히 White 박스).
- Unity 2022에서 라이팅을 다시 베이크했습니다.
- 이제 패키지가 Unity 2022.3 패키지로 분류됩니다.

## 2.0.2

- 아바타 업로드에 실패하는 문제를 수정했습니다.
  - 빌드 시 스크립트가 컴파일되도록 수정했습니다.

## 2.0.1

- Lightbox Viewer의 첫 번째 공개 VCC 릴리스.
  - VCC 설치 시 Assets/에 있던 기존 설치본이 제거됩니다.
  - 이제 이 툴은 Packages/ 폴더에 위치합니다.
