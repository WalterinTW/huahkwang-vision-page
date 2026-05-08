# Site Manifest: huakwang-vision-page

## 專案基本資訊
- 專案名稱：huakwang-vision-page
- 網站名稱：華光寺｜願景
- 網站型態：單頁靜態網站
- 語言版本：繁體中文
- 部署方式：GitHub Pages
- 命名規則：全部統一使用 `huakwang`，不使用 `huakuang`

## 網站目的
本頁用於呈現「華光寺的願景」，清楚介紹寺院未來發展的三大方向：
1. 宗教弘法
2. 社會慈善
3. 教育發展

本頁不是歷史資料頁，也不是活動報導頁，而是一個以理念、方向與未來承擔為主的單頁說明網站。

---

## 網站頁面結構
本專案先做成單頁網站：

1. `index.html`
   - 華光寺願景首頁（單頁完整呈現）

共用資源：
- `assets/css/style.css`
- `assets/js/script.js`

若需要圖示資源，可使用：
- inline SVG
或
- `assets/icons/`

---

## 檔案結構建議
```text
huakwang-vision-page/
├─ AGENTS.md
├─ content_manifest.md
├─ final_copy_zh.md
├─ image_mapping.md
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ script.js
│  └─ icons/
│     ├─ dharma-wheel.svg
│     ├─ hands-heart.svg
│     └─ child-sprout.svg