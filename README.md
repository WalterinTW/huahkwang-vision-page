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

## 維護注意事項
- `final_copy_zh.md` 可能是目前頁面文案來源，刪除前請先確認。
- 願景頁目前是單頁網站，新增區塊時請同步檢查導覽與手機版排版。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
