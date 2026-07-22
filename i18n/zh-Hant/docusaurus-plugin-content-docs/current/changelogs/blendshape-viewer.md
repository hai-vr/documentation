---
title: Blendshape Viewer
---
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 3.0.0-beta.2

變更：
- 變亮的區域使用黃色顯示，變暗的區域使用紅色顯示。
- 確保相機開啟反鋸齒以生成縮略圖。

## 3.0.0-beta.1

重大變更：
- 不再支援 Unity 2019。最低要求 Unity 2022。

優化：
- 在包含大量混合形狀（已使用 700 個混合形狀進行測試）的模型上，UI 現在執行速度更快。
- 渲染持續時間現在應該更快。
  - 由於 Animation Mode 垃圾回收的特性，如果 Blendshape 視窗已經打開，渲染曾經會很慢。
  - 現在不再使用 Unity 的 Animation Mode 來渲染縮略圖。

功能：
- 按下 ALT 鍵現在將以黃色顯示受混合形狀影響的區域。
- 複選框狀態現在會在編輯器會話之間保存。
- 添加在地化。

變更：
- 在支援運算著色器（Compute Shader）的電腦上現在始終使用運算著色器。
- 如果混合形狀縮略圖上沒有明顯變化，縮略圖現在看起來會更暗。
- 「滑鼠移入時自動更新（Auto Update On Focus）」現在預設關閉。
- 視窗現在稱為 「Blendshape Viewer」 而不是 「BlendshapeViewer」。

修復：
- 當視窗在自動更新狀態下獲得焦點時，更新現在會延遲以防止重複刷新。

## 2.1.2

- 修復了當搜尋結果為 0 時不再產生佈局錯誤。
- 防止使用者誤將一整頁無關內容貼到搜尋欄時導致編輯器掛起。
  - 搜尋查詢現在限制為最多 100 個字元。

## 2.1.1

- 修復了未選擇網格（Mesh）時的錯誤。

## 2.1.0

添加搜尋和複製到剪貼簿：
- 添加搜尋欄位。
- 添加「複製到剪貼簿」按鈕。

## 2.0.3

- 修復了頭像上傳失敗的問題。
  - 修復了構建時腳本現在的編譯問題。

## 2.0.2

- Blendshape Viewer 的第一個公開 VCC 版本。
  - VCC 安裝會從 Assets/ 中刪除此工具之前的安裝。
  - 此工具現在位於 Packages/ 中。
