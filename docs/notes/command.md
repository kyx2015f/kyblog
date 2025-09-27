---
title: 更新網頁指令
description: Docusaurus Markdown + MDX 教學範例
tags: [教學, Docusaurus, Markdown]
categories: [程式設計, 前端]
date: 2025-09-26
draft: true
---

## 🔥 更新整個專案的完整流程（終端機指令版）

### 1️⃣ 確認你在專案目錄

```bash
cd D:\my-website
```
---

### 2️⃣ 編輯網站內容

* 修改任何檔案：

  * `src/` → React 元件、樣式、排版
  * `docusaurus.config.js` → 網站設定
  * `static/` → 圖片、資源
  * `blog/`、`docs/` → 文章或文件

---

### 3️⃣ 本地測試整個網站

```bash
npm run start
```

* 瀏覽器打開 [http://localhost:3000](http://localhost:3000)
* 確認排版、圖片、文章都正確

---

### 4️⃣ Git 版本控制

```bash
git add .
git commit -m "更新整個專案：排版與內容修改"
git push origin main
```

> 這會把你修改的原始檔案推到 GitHub main 分支，保留版本紀錄。

---

### 5️⃣ Build & Deploy 到 GitHub Pages

```bash
npm run build
npm run deploy
```

* `npm run build` → 生成最新靜態網站
* `npm run deploy` → 推送到 `gh-pages` 分支，線上網站更新

---

### 6️⃣ 更新完成

* 訪問 [https://kyx2015f.github.io/kyblog](https://kyx2015f.github.io/kyblog)
* 看到最新排版、文章、圖片變更

