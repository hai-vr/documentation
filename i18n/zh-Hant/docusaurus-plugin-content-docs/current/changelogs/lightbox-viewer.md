---
title: Lightbox Viewer
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 2.5.0-beta.4

添加強制抗鋸齒選項。這可能對某些獨立專案設置（例如 Basis Framework 專案）有所幫助。

## 2.5.0-beta.3

在編輯模式下，隱藏在場景層級選項卡中通過可見性圖標隱藏的對象。

修復：對象更改事件不應再在播放模式下觸發，這曾導致日誌中出現錯誤。

## 2.5.0-beta.2

修復了疊加場景中 URP Adaptive Probe Volumes 的一個問題，該問題曾導致 lilToon 2.3.0 預覽不正確。

- 修復了默認光照數據對疊加場景中 Adaptive Probe Volumes 的負面影響：
  - 默認場景分配了一個默認光照數據資產。
  - 此默認光照數據會導致渲染效果不同，這在 lilToon 2.3.0 上最為明顯。
  - 通過檢查場景當前是否使用默認光照數據進行修復。如果是，則在 lightbox 使用期間將其設為 null。
  - 這應該能修復 Lightbox Viewer URP 中的 https://github.com/hai-vr/lightbox-viewer-urp/issues/1。

## 2.5.0-beta.1

Lightbox Viewer 現在兼容：
- BIRP Light Probes。
- BIRP VRCLV。
- URP Adaptive Probe Volumes。
- URP Light Probes。

添加對 URP Light Probes 的支持：
- 如果 URP 是當前渲染管線，且質量設置使用 Light Probes 而不是 Adaptive Probe Volumes，則切換到不同的場景。
- 如果專案中存在 URP，檢測質量設置的更改。

與之前的 alpha 版本建議不同，由於兼容性嘗試失敗，這仍然不兼容 macOS。

按時間順序重複 alpha 版本的先前更改日誌，不含 macOS 更改：

*源自 2.4.1-alpha.1：*

- 更改編輯模式策略以提高性能：
    - 以前，編輯模式每一幀都會複製化身，以免意外修改化身。
    - 此更改現在如果「要查看的對象」引用未更改，則將化身複製到層級中標記為「不保存」的隱藏遊戲對象中。
    - 使用對象更改事件來檢測場景中的任何更改。如果有任何與非變換相關的更改，我們將銷毀複製的對象並創建一個新對象。
    - 此複製對象在渲染週期之間向下移動 10,000 個單位。
    - 不要在渲染週期之間禁用原始化身，因為啟用化身很慢。
    - 在副本中移除 Animator，因為它們需要時間綁定且我們不需要它們。

*源自 2.4.1-alpha.2：*

- 添加對 URP 專案的支持：
    - 檢測專案是否為 BIRP。
    - 如果不是 BIRP，不建議安裝 Post-Processing V2 包。
    - 如果不是 BIRP，即使安裝了 Light Volumes 包，也加載 URP 場景。

*源自 2.5.0-alpha.2：*

- 嘗試進行一項優化，消除將紋理從 GPU 複製到 CPU 的需要。

*源自 2.5.0-alpha.3：*

- 嘗試修復 Unity 6.2 Basis 專案中深度影響視圖渲染的問題。

## 2.5.0-alpha.3

- 嘗試修復 Unity 6.2 Basis 專案中深度影響視圖渲染的問題。

## 2.5.0-alpha.2

嘗試進行一項優化，消除將紋理從 GPU 複製到 CPU 的需要。

這也可以改善對 macOS 上 Metal 的支持，因為 2.5.0-alpha.1 中引入的更改可能無效。

## 2.5.0-alpha.1

嘗試支持沒有異步 GPU 回讀的系統：
- 嘗試支持 macOS 上的 Metal，它似乎沒有異步 GPU 回讀。

*源自 2.4.1-alpha.2：*

- 添加對 URP 專案的支持：
  - 檢測專案是否為 BIRP。
  - 如果不是 BIRP，不建議安裝 Post-Processing V2 包。
  - 如果不是 BIRP，即使安裝了 Light Volumes 包，也加載 URP 場景。

*源自 2.4.1-alpha.1：*

- 更改編輯模式策略以提高性能：
  - 以前，編輯模式每一幀都會複製化身，以免意外修改化身。
  - 此更改現在如果「要查看的對象」引用未更改，則將化身複製到層級中標記為「不保存」的隱藏遊戲對象中。
  - 使用對象更改事件來檢測場景中的任何更改。如果有任何與非變換相關的更改，我們將銷毀複製的對象並創建一個新對象。
  - 此複製對象在渲染週期之間向下移動 10,000 個單位。
  - 不要在渲染週期之間禁用原始化身，因為啟用化身很慢。
  - 在副本中移除 Animator，因為它們需要時間綁定且我們不需要它們。

- 修復垂直位移無法重置的問題。

## 2.4.1-alpha.2

添加對 URP 專案的支持：
- 檢測專案是否為 BIRP。
- 如果不是 BIRP，不建議安裝 Post-Processing V2 包。
- 如果不是 BIRP，即使安裝了 Light Volumes 包，也加載 URP 場景。

## 2.4.1-alpha.1

- 更改編輯模式策略以提高性能：
  - 以前，編輯模式每一幀都會複製化身，以免意外修改化身。
  - 此更改現在如果「要查看的對象」引用未更改，則將化身複製到層級中標記為「不保存」的隱藏遊戲對象中。
  - 使用對象更改事件來檢測場景中的任何更改。如果有任何與非變換相關的更改，我們將銷毀複製的對象並創建一個新對象。
  - 此複製對象在渲染週期之間向下移動 10,000 個單位。
  - 不要在渲染週期之間禁用原始化身，因為啟用化身很慢。
  - 在副本中移除 Animator，因為它們需要時間綁定且我們不需要它們。

- 修復垂直位移無法重置的問題。

## 2.4.0

- 添加燈箱集合。用戶現在可以從默認的六個燈箱切換到其他更專業的燈箱。
  - 添加專門用於 Light Volumes 的特殊燈箱。這需要安裝 Light Volumes 包。
  - 公開之前隱藏的 Spotlight Cookie 燈箱。
- 以前，被查看對象內部的燈光會被禁用。現在默認情況下不再如此。
- 添加禁用被查看對象內部燈光的選項。
- 添加支持需要深度紋理的著色器的選項。
  - 這使用 [Poiyomi 的 DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) 燈光設置，但使用不同的 GUID 重新打包以避免安裝衝突。
- 「高級」菜單現在是一個側邊欄。
- 一些設置現在保存在整個編輯器中，而不是在關閉 Lightbox Viewer 窗口時重置。
  - 這包括 *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*。

![Unity_a6UfNnk6f1.png](/assets/docs/products/lightbox-viewer/Unity_a6UfNnk6f1.png)

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## 2.4.0-beta.2

- 修復了當重新加載域保持默認時，播放模式不顯示集合的問題。

## 2.4.0-beta.1

- 添加燈箱集合。用戶現在可以從默認的六個燈箱切換到其他更專業的燈箱。
  - 添加專門用於 Light Volumes 的特殊燈箱。這需要安裝 Light Volumes 包。
  - 公開之前隱藏的 Spotlight Cookie 燈箱。
- 以前，被查看對象內部的燈光會被禁用。現在默認情況下不再如此。
- 添加禁用被查看對象內部燈光的選項。
- 添加支持需要深度紋理的著色器的選項。
  - 這使用 [Poiyomi 的 DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) 燈光設置，但使用不同的 GUID 重新打包以避免安裝衝突。
- 「高級」菜單現在是一個側邊欄。
- 一些設置現在保存在整個編輯器中，而不是在關閉 Lightbox Viewer 窗口時重置。
  - 這包括 *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*。

## 2.3.0

如果專案中安裝了 [Light Volumes](https://github.com/REDSIM/VRCLightVolumes)，則添加支持。

燈箱本身沒有變化，所以差異很細微。
粉紅色場景最為明顯，因為左手會被照成粉紅色，右手會被照成紫色。

:::warning
如果你希望**預覽**使用 light volumes，請理解*與化身上傳不同*，僅擁有 lilToon 1.10 等兼容著色器是不夠的；
你需要在化身專案中安裝實際的 [Light Volumes 包](https://github.com/REDSIM/VRCLightVolumes?tab=readme-ov-file#installation-through-vrchat-creator-companion)。
:::

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>

*使用 light volumes：*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*不使用 light volumes：*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

## 2.3.0-beta.2

修復「加載 LightingData.asset 時發生未知錯誤」：
- 使用單獨的 .lighting 文件重新烘焙場景。
- 這應該能解決「加載 LightingData.asset 時發生未知錯誤」的問題。

## 2.3.0-beta.1

如果專案中安裝了 Light Volumes，則添加支持。

燈箱本身沒有變化，所以差異很細微。
粉紅色場景最為明顯，因為左手會被照成粉紅色，右手會被照成紫色。

*使用 light volumes：*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*不使用 light volumes：*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

- 添加支持 Light Volumes 的場景：https://github.com/REDSIM/VRCLightVolumes
  - 場景烘焙方式與主場景不同，因為它使用 Progressive GPU 而非 CPU。
  - 場景包含禁用 Light Volumes 的非活動燈箱。
- 如果安裝了 0.7.2 或更高版本的 Light Volumes 包，默認選擇此場景。

## 2.2.0

通過從副本中移除所有 MonoBehaviour 來嘗試提高編輯模式下的速度：
- 嘗試通過從副本中移除所有 MonoBehaviour 來提高編輯模式下的運行速度，這樣就不可調用 OnEnable/OnDestroy。
- 這是通過在從副本中移除所有 MonoBehaviour 之前將副本設為已禁用父對象的子對象來實現的。

## 2.1.0

在 Unity 2022 中重新烘焙 Lightbox 場景的光照：
- 當前光照貼圖在 Unity 2022 中似乎表現異常，尤其是 White box。
- 光照已在 Unity 2022 中重新烘焙。
- 該包現在被歸類為 Unity 2022.3 包。

## 2.0.2

- 修復化身無法上傳的問題。
  - 修復構建時腳本編譯的問題。

## 2.0.1

- Lightbox Viewer 的首個公開 VCC 版本。
  - VCC 安裝會從 Assets/ 中移除此工具的先前安裝
  - 此工具現在位於 Packages/ 中
