# UNIMA 官網全端升級與後台開發計畫

## Phase 1: 撰寫 publish_blog.py 自動化發佈腳本
- [ ] 撰寫 Python 腳本讀取 Markdown 檔案
- [ ] 實作解析 Markdown 內容 (標題、摘要、內文) 的邏輯
- [ ] 實作自動修改 `Blog.tsx` 與 `BlogPost.tsx` 的邏輯
- [ ] 實作自動執行 git commit 與 push 的邏輯

## Phase 2: 測試腳本並處理本週 5 篇文章
- [ ] 準備本週 5 篇文章的 Markdown 檔案
- [ ] 執行腳本測試是否能正確更新 React 元件
- [ ] 確認 GitHub 倉庫已更新

## Phase 3: 交付腳本與使用說明給用戶
- [ ] 撰寫腳本使用說明 (README)
- [ ] 交付給用戶並提醒至 Manus 控制台點擊 Publish
