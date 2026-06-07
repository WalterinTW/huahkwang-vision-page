# huahkwang-vision-page

## 專案名稱
華光寺｜願景

## 網站用途
本專案是華光寺網站系統中的「願景」單頁靜態網站，用於呈現華光寺在宗教弘法、社會慈善與教育發展上的方向。

## 主要檔案結構

```text
huahkwang-vision-page/
├─ index.html
├─ final_copy_zh.md
├─ assets/
│  ├─ css/style.css
│  ├─ js/script.js
│  └─ icons/
├─ image_mapping.md
└─ content_manifest.md
```

## 本地預覽方式
可直接在瀏覽器開啟 `index.html`，或在本專案目錄執行：

```bash
python3 -m http.server
```

再到瀏覽器開啟 `http://localhost:8000/`。

## Playwright 網頁檢查
本專案使用 Playwright 做基本視覺與功能檢查。測試會透過本機 server 載入網站，不使用 `file://`。

首次使用時，請先安裝 npm 套件與 Playwright 瀏覽器：

```bash
npm install
npx playwright install chromium
```

執行基本檢查：

```bash
npm run test:visual
```

以 headed 模式開啟瀏覽器執行，方便觀察畫面：

```bash
npm run test:visual:headed
```

查看測試報告：

```bash
npm run show-report
```

測試內容包含首頁載入、desktop `1440x900`、mobile `390x844`、水平 overflow、主要導覽連結、圖片載入、console error，以及 desktop / mobile screenshot。截圖會輸出在 `test-results/screenshots/`，可用來人工比對版面。

## 維護注意事項
- `final_copy_zh.md` 可能是目前頁面文案來源，刪除前請先確認。
- 願景頁目前是單頁網站，新增區塊時請同步檢查導覽與手機版排版。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
- 修改 HTML / CSS / JS 後，建議執行 `npm run test:visual`，並檢查 desktop 與 mobile screenshot。
