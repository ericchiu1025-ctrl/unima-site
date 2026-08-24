/*
 * Design: Oceanic Blueprint — Blog Page
 * SEO-optimized blog listing with targeted keywords
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, ArrowRight, Tag, ExternalLink } from "lucide-react";

const BLOG_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663334155394/AR88J74jigHbmcaUVraJD8/blog-header-kvxUqtyCYFAutnouFdZYxu.webp";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const posts = [
  {
    slug: "unima-61-ai-transformation",
    title: "AI 採購不是加一個 Copilot：BCG 揭露 60% 買方產能如何被釋放",
    excerpt: "AI 採購不是再多一個 Copilot。 把 AI 當工具，不等於把採購重設。 你仍在浪費買方 60% 的產能。 重點：1) BCG：AI-first 可釋放 60% buyer capacity；2) 成本可降 8–15%、OTIF 提升 5–15pp、採購周期縮短 30–60%；3) 關鍵在 source-to-pay 全流程重設與決策者重分工。 立即檢視你的採購",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["AI 決策轉型", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "unima-62-ai-transformation",
    title: "COO 不再只是營運專家：AI Agent 正把他變成企業總編排者",
    excerpt: "Hook: COO 不再只是營運專家。 Hook: AI Agent 正把他變成企業總編排者。 Hook: 決策從「做對事」升級為「串起一切」。 重點：1) 重新定義決策權；2) 串接商業、人才、技術；3) 建立跨流程編排治理。 立即行動：讓 UNIMA 幫你定義下一代 COO 角色。 #AIAgent #企業編排 #營運轉型 #UNIMA",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["AI 決策轉型", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "unima-63-ai-transformation",
    title: "AI 會掏空你的護城河：營收沒掉，毛利與定價權卻先消失",
    excerpt: "AI 正在掏空你的護城河——不是先吞營收，而是先奪走毛利與定價權。 你還在把 AI 當成「能幫忙做事」的工具？那就是致命錯誤。 三個重點：1) 用 task substitutability 找出被替代的高毛利任務；2) 評估 market concentration 與 hyperscaler 風險；3) 建立 data defensibility 與 comput",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["AI 決策轉型", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "unima-64-ai-transformation",
    title: "AI 轉型的第一個 KPI 不是效率，而是信任：中階主管焦慮率升至 25%",
    excerpt: "AI 轉型的第一個 KPI 不是效率，而是「信任」。 中階主管焦慮率已升至 25%，低信任團隊焦慮機率比高信任者高 1.5 倍。 若忽略信任，AI 決策只會成為內部衝突的放大器。 • 重點：衡量信任 > 建立透明度 > 重新定義中階角色。 想讓 AI 真正落地？先把信任做對。聯絡 UNIMA，從中階領導力開始重建。 #AI轉型 #組織信任 #中階領導 #UNIMA",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["AI 決策轉型", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "unima-65-ai-transformation",
    title: "AI 出海的新損益表：Compute 成本正在變成每一筆跨境交易的永久抽成",
    excerpt: "AI 出海不是只賣產品，是在租一條「計算通道」。 你以為毛利只是貨幣和市占？ 錯：compute cost 正在變成每筆跨境交易的永久抽成。 重點：1) BCG：compute layer 將成為 AI 交易的結構性受益者；2) 2026 年 hyperscaler 資本支出將衝到 7,500 億美元；3) 把 compute intensity、模型依賴與資料主權納",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["集團出海", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "unima-66-ai-transformation",
    title: "跨國集團最危險的不是市場選錯，而是決策權沒有重畫",
    excerpt: "權力沒重畫，市場再選對也會死在組織等待。 總部與區域互相推諉，決策像傳話遊戲。 Agent 技術越進，邊界越模糊。 重點：1) 先重畫 Decision Rights；2) 建立例外升級流程；3) 明訂人機協作邊界與資料責任。 想在海外快步？從權力圖開始。聯絡 UNIMA，讓組織不再卡在等待。#出海策略 #決策權重畫 #UNIMA",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["集團出海", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "unima-67-ai-transformation",
    title: "中小企業導入 AI 先別問買哪套：BCG 的 Value–Decision–Data 三問法",
    excerpt: "別先問買哪套 AI 工具！ 先問：能創造哪個價值池？決策是什麼？現有資料夠不夠？ 很多中小企業被工具選項耽誤，真正致命是沒對準「價值—決策—資料」。 重點：1) 從業務痛點倒推價值池；2) 鎖定關鍵決策做自動化；3) 用現有資料做低風險驗證。 想快速驗證 AI 起手能否帶來真價值？安排 UNIMA 的 90 分鐘診斷工作坊。 #中小企業數位化 #AI實作 #UNIMA",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["中小企業數位化", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "unima-68-ai-transformation",
    title: "小企業最該自動化的不是人力，而是高價值採購決策",
    excerpt: "Hook1：你還在把自動化先投在人力排班？ Hook2：中小企業最該自動化的，是採購裡的高價值決策。 Hook3：有限的 IT 預算，不要浪費在低報酬的事務性自動化。 重點：• 優先供應商風險評分 • 自動詢比議價與合約監控 • Source-to-Pay 流程自動化 想知道怎麼做出高 ROI 的數位化路線圖？聯絡我們。 #中小企業數位化 #採購AI #成本管理 #供",
    date: "2026-08-24",
    readTime: "3 分鐘",
    tags: ["中小企業數位化", "UNIMA", "2026 趨勢"],
    featured: true,
  },
  {
    slug: "gartner-supply-chain-ai-roi-2026",
    title: "供應鏈 AI 投資 67% 給 AI，55% CSCO 卻算不清 ROI？Gartner 警告：變革管理才是翻倍回報的關鍵",
    excerpt: "供應鏈數位投資 67% 已經流向 AI，但超過一半的供應鏈長（CSCO）根本說不出 AI 投資的回報率。Gartner 2026 年 8 月最新調查揭示殘酷現實：55% 的 CSCO 對 AI 投資 ROI 一片模糊。 問題不在工具，而在變革管理。Gartne",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "Gartner", "供應鏈"],
    featured: true,
  },
  {
    slug: "deloitte-ai-process-readiness-2026",
    title: "74% 高層期待 AI Agent 重寫流程，只有 5% 的企業流程「真的準備好了」",
    excerpt: "74% 的企業領導者相信：四年內，一半的業務流程將圍繞 AI Agent 重新設計。但 Deloitte 2026 年 8 月最新調查給出殘酷的對照組：只有 5% 的企業，業務流程真正為 AI Agent 做好了準備。 更進一步，完成跨職能多 Agent 規模",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "Deloitte", "AI Agent"],
    featured: true,
  },
  {
    slug: "bcg-ai-radar-ceo-roi-2026",
    title: "AI 支出佔營收翻倍到 1.7%！一半 CEO 坦言「做不出 ROI，我工作不保」",
    excerpt: "CEO 的 AI 壓力到了最高點。BCG AI Radar 2026 調查 640 位 CEO：一半的人直言，如果 AI 做不出回報，自己的工作就危險了。 好消息是 72% 的 CEO 已自認是公司的 AI 最終決策者（去年僅一半），80% 對 AI ROI ",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "BCG", "CEO"],
    featured: true,
  },
  {
    slug: "gartner-ai-spend-dslm-2026",
    title: "$640 億市場、領域模型暴增 210%：AI 預算被嚴格檢視，誰幫企業「管住 AI 花在哪」誰就是贏家",
    excerpt: "AI 錢潮來了，但錢的遊戲規則變了。Gartner 預測 2026 年全球 AI 模型與平台支出將達 640 億美元，年增 63.4%；其中領域專用模型（DSLM）暴增 210%。 關鍵轉折是：企業 AI 預算正遭到嚴格檢視，焦點轉向「用量效率、成本控管與可衡",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "Gartner", "AI 預算"],
    featured: true,
  },
  {
    slug: "gartner-agentic-commerce-2026",
    title: "2030 年 20% 交易由 AI Agent 完成！代理商務來臨，台灣出海企業的訂單將被 AI 中介切走嗎？",
    excerpt: "訂單的遊戲規則要變了。Gartner 預測：2030 年，20% 的交易將由 AI Agent 完成；到 2028 年，AI Agent 將指揮高達 15 兆美元的 B2B 採購。Forrester 也將「代理商務」列為 2026 年新興技術重點。 對台灣出海",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["集團出海", "Gartner", "代理商務"],
    featured: true,
  },
  {
    slug: "deloitte-cfo-geopolitical-2026",
    title: "地緣政治連續 16 季蟬聯企業最大外部風險！CFO 視角：93% 數位投資仍要加碼",
    excerpt: "CFO 怎麼看 AI 與出海？Deloitte 2026 年第二季 CFO 調查給出三張明牌：73% 的 CFO 樂觀 AI 將顯著改善業務表現（一年前只有 59%）；93% 預期未來 12 個月數位投資加碼；而地緣政治，連續 18 季中第 16 季穩坐「企業",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["集團出海", "Deloitte", "CFO"],
    featured: true,
  },
  {
    slug: "sme-ai-adoption-depth-2026",
    title: "中小企業 AI 採用率 89% 爆表，但為何多數只是「拿 AI 當玩具」？",
    excerpt: "中小企業 AI 採用率已衝到 89%，三年成長近 2.5 倍。聽起來很美？殘酷的是：多數企業還停留在「拿 AI 當玩具」的階段——寫寫文案、問問問題，核心流程一吋未動。 2026 年的數據顯示，57% 的組織回報顯著 AI 技能缺口，54% 缺乏把 AI 工作",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["中小企業數位化", "AI 採用", "US Chamber"],
    featured: true,
  },
  {
    slug: "deloitte-cfo-hiring-ai-2026",
    title: "AI 已排擠 47% 的新人招聘！CFO 承認：不是不找人，是先用 AI 取代重複性工作",
    excerpt: "企業不招新人的真實原因變了。Deloitte 2026 年第二季 CFO 調查：抑制招聘的第一大因素是成本控管（淨值 62%），第二大因素是「AI 與外包」（淨值 47%）——AI 首次正式超越外包，成為新進職缺的最大殺手。 但別急著悲觀。同一份調查裡，73%",
    date: "2026-08-17",
    readTime: "8 分鐘",
    tags: ["中小企業數位化", "Deloitte", "人力"],
    featured: true,
  },
  {
    slug: "bcg-decision-agent-2026",
    title: "你的 AI 投資只做了「執行」，卻忽略了「決策」？BCG 揭露：Decision Agent 如何讓董事會不再盲飛",
    excerpt: "BCG AI Radar 2026 調查 2,400 位高管：企業 AI 投資翻倍至營收 1.7%，但只有 14% 用在決策層。Decision Agent 能把跨部門證據拼成可執行決策，讓董事會不再靠直覺盲飛。",
    date: "2026-07-13",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "BCG", "Decision Agent"],
    featured: true,
  },
  {
    slug: "bcg-6-percent-ai-leaders",
    title: "只有 6% 企業是真正的 AI 贏家！BCG 外部評估揭密：他們做對了什麼",
    excerpt: "BCG 以外部指標衡量 600+ 美股公司，僅 6% 為 AI 領導者，TSR 高出 9 個百分點。最大差異化因素不是技術，而是全組織的 AI 素養建設。",
    date: "2026-07-13",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "BCG", "AI 素養"],
    featured: true,
  },
  {
    slug: "gartner-saas-ai-agent-disruption",
    title: "$2,340 億 SaaS 市場即將被 AI Agent 吞噬！Gartner 警告",
    excerpt: "Gartner 警告：到 2030 年，20% 的企業 SaaS 支出將被 Agentic AI 取代。$2,340 億市場正從「買功能」轉向「買成果」，CIO 必須重新評估軟體投資組合。",
    date: "2026-07-13",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "Gartner", "AI Agent"],
    featured: true,
  },
  {
    slug: "bain-ma-ai-winners-paradox",
    title: "M&A 暴增 41% 卻遇上 AI 轉型！Bain 揭露「贏家悖論」",
    excerpt: "Bain 2026 中年展望：全球 M&A 成長 41%、歐洲 77%，但企業正陷入贏家悖論——同時推動併購整合與 AI 轉型，兩者互為牽絆，價值被侵蝕。",
    date: "2026-07-13",
    readTime: "8 分鐘",
    tags: ["集團出海", "M&A", "Bain"],
    featured: true,
  },
  {
    slug: "ibm-data-sovereignty-weapon",
    title: "數據主權不再是合規議題，而是競爭武器！IBM 研究",
    excerpt: "IBM 2026 研究指出：近 80% 企業因資料存取受阻，AI 發展被綁手腳。出海集團必須將數據主權從被動合規轉為主動戰略資產。",
    date: "2026-07-13",
    readTime: "8 分鐘",
    tags: ["集團出海", "數據主權", "IBM"],
    featured: true,
  },
  {
    slug: "accenture-edge-sme-ai-market",
    title: "Accenture 砸重金成立 Edge 事業體！$2,400 億中小企業 AI 市場爆發",
    excerpt: "Accenture 成立 Edge 事業體鎖定年營收 $3-30 億中小企業，與 Google Cloud 推預建 Agentic AI，$2,400 億市場正式引爆。",
    date: "2026-07-13",
    readTime: "8 分鐘",
    tags: ["中小企業數位化", "Accenture", "AI Agent"],
    featured: true,
  },
  {
    slug: "ai-agent-pilot-graveyard-scale",
    title: "89% 的 AI Agent 試點永遠無法規模化！中小企業如何避開「試點墳場」",
    excerpt: "89% 的 AI Agent 試點無法規模化。根因：缺乏明確 ROI 指標、組織沒有準備好、技術債累積。中小企業應鎖定 1-2 個高價值場景，打造領域專用 AI。",
    date: "2026-07-13",
    readTime: "8 分鐘",
    tags: ["中小企業數位化", "AI Agent", "規模化"],
    featured: true,
  },
  {
    slug: "ai-agent-delivery-revolution",
    title: "AI 代理人 (Agentic AI) 的交付革命：為何 2026 年企業不再買「工具」，而是買「成果」？",
    excerpt: "2026 年，企業對 AI 的期待已從「提供工具」轉變為「交付成果」。AI 代理人（Agentic AI）的崛起，正打破傳統 AI 解決方案的困境，帶來自主規劃、執行任務並交付成果的能力。IBM 報告指出，AI 代理人預計將為企業帶來高達 45 億美元的生產力收益，並將投資回報率平均提升 3.5 倍。凱渥科技的「智慧副駕」策略，旨在協助企業將 AI 代理人無縫整合到現有工作流程中，自動化繁瑣任務、提升決策精準度、加速市場反應速度，共同迎接 AI 交付成果的新時代。",
    date: "2026-07-06",
    readTime: "8 分鐘",
    tags: ["Agentic AI", "AI 決策轉型", "數位轉型"],
    featured: true,
  },
  {
    slug: "cio-scaling-anxiety",
    title: "破解 CIO 的規模化焦慮：為何 2/3 的 AI 試點專案無法跨越「生產門檻」？",
    excerpt: "高達 2/3 的 AI 試點專案未能成功跨越「生產門檻」，讓 CIO 們陷入「規模化焦慮」。核心問題在於「信任赤字」與「治理缺口」，包括資料隱私疑慮、模型透明度不足、缺乏治理框架等。凱渥科技透過建立「AI 信任鏈」，強化資料治理、提升模型透明度與建立完善治理框架，協助企業將 AI 試點專案從「技術可行」推向「業務落地」，將挑戰轉化為競爭力。",
    date: "2026-07-06",
    readTime: "7 分鐘",
    tags: ["CIO 焦慮", "AI 規模化", "信任赤字"],
    featured: true,
  },
  {
    slug: "fragmented-trade-supply-chain",
    title: "碎裂化貿易時代的生存戰：利用 AI 打造具備「地緣政治韌性」的動態供應鏈",
    excerpt: "全球化退潮，碎裂化貿易格局下，企業面臨供應鏈中斷、成本波動等挑戰。傳統供應鏈脆弱，難以應對地緣政治風險。AI 技術透過即時風險預警、供應鏈可視化、動態路由與智慧庫存管理，賦能企業打造具備「地緣政治韌性」的動態供應鏈。凱渥科技提供整合性 AI 合規解決方案，協助企業建立多源供應商網絡、優化全球物流、強化合規與可追溯性，將挑戰轉化為競爭優勢。",
    date: "2026-07-06",
    readTime: "8 分鐘",
    tags: ["碎裂化貿易", "地緣政治韌性", "動態供應鏈"],
    featured: true,
  },
  {
    slug: "compliance-debt-competitiveness",
    title: "出海新門檻：資安與資料合規支出飆升 45%，如何將「合規債」轉化為「競爭力」？",
    excerpt: "隨著全球貿易格局碎裂化，企業出海面臨資安與資料合規的嚴峻考驗，支出飆升 45%。傳統管理模式難以應對複雜法規。AI 技術透過自動化監控、智慧資料治理、提升審計效率與建立可追溯記錄，將合規成本轉化為競爭優勢。凱渥科技提供整合性 AI 合規解決方案，協助企業建立跨國合規雲平台、AI 驅動資料保護與即時合規儀表板，讓合規成為進入國際市場的門票與品牌信任的關鍵。",
    date: "2026-07-06",
    readTime: "9 分鐘",
    tags: ["資安合規", "資料治理", "企業出海"],
    featured: true,
  },
  {
    slug: "sme-digital-divide-breakthrough",
    title: "數位鴻溝警報：中小企業如何利用「輕量化 AI」在大型企業的技術壓制下突圍？",
    excerpt: "大型企業 AI 採用率超前，中小企業面臨數位鴻溝。然而，透過「輕量化 AI」策略，中小企業無需盲目追逐重資產，可聚焦核心痛點，實現敏捷逆襲。凱渥科技協助中小企業導入輕量化 AI 解決方案，提升營運效率、優化客戶體驗，並快速響應市場變化，在數位化浪潮中找到生存與發展的獨特路徑。",
    date: "2026-07-06",
    readTime: "7 分鐘",
    tags: ["中小企業數位化", "輕量化 AI", "數位鴻溝"],
    featured: true,
  },
  {
    slug: "ai-middle-manager-co-pilot",
    title: "別讓 AI 拖垮你的中層主管！打造「智慧副駕」文化，解決數位轉型引發的心理抗拒",
    excerpt: "AI 導入若無配套，會導致中層管理過載與心理抗拒。真正的 AI 賦能是讓 AI 成為主管的「智慧副駕」，而非額外負擔。凱渥科技透過透明溝通、技能重塑與激勵機制，協助企業建立 AI 協作文化，讓中層主管從重複性工作中解放，專注於策略性決策與團隊領導，共同推動數位轉型成功。",
    date: "2026-07-06",
    readTime: "8 分鐘",
    tags: ["AI 賦能", "中層主管", "數位轉型"],
    featured: true,
  },
  {
    slug: "81-percent-ai-experiments-bottom-line",
    title: "81% 的 AI 實驗都沒賺錢？從「工具存取」轉向「底線收益」的最後一哩路",
    excerpt: "McKinsey 最新報告揭示，高達 81% 的企業 AI 實驗未能帶來實質財務收益！這不僅是技術問題，更是策略與流程的斷裂。別讓你的 AI 投資變成無底洞。",
    date: "2026-06-29",
    readTime: "8 分鐘",
    tags: ["McKinsey", "AI 決策轉型", "底線收益"],
    featured: true,
  },
  {
    slug: "multi-agent-system-surge-1445",
    title: "詢問度激增 1445%！多代理系統 (Multi-agent) 時代來臨，你的企業準備好了嗎？",
    excerpt: "Gartner 報告指出，企業對「多代理系統」的詢問量激增 1445%！當單一 AI 已無法滿足複雜需求，協作型 AI 代理人正成為企業競爭的新戰場。",
    date: "2026-06-29",
    readTime: "7 分鐘",
    tags: ["Gartner", "多代理系統", "AI 協作"],
    featured: true,
  },
  {
    slug: "sme-digital-gap-global-expansion",
    title: "數位鴻溝警報：大型企業 AI 採用率超前，中小企業如何靠「輕量化 AI」逆襲出海？",
    excerpt: "歐洲 SME 報告指出大型企業 AI 採用率大幅領先。中小企業無需盲目追逐重資產策略，透過「輕量化 AI」聚焦核心痛點，也能實現敏捷出海逆襲。",
    date: "2026-06-29",
    readTime: "8 分鐘",
    tags: ["集團出海", "中小企業數位化", "輕量化 AI"],
    featured: true,
  },
  {
    slug: "ai-overloading-middle-managers",
    title: "AI 正在拖垮你的中層主管？避免數位轉型淪為「管理過載」的診斷書",
    excerpt: "HBR 研究發現 AI 導入若無配套，會導致中層管理過載。真正的 AI 賦能是讓 AI 成為主管的「智慧副駕」，而非額外負擔。別讓數位轉型淪為管理災難。",
    date: "2026-06-29",
    readTime: "9 分鐘",
    tags: ["HBR", "管理過載", "AI 賦能"],
    featured: true,
  },
  {
    slug: "retail-ai-spend-double-bcg",
    title: "零售業 AI 支出將翻倍！BCG 揭秘：為何領先者不再談「概念驗證」，而是談「生產實戰」？",
    excerpt: "BCG AI Radar 顯示零售業 AI 支出將翻倍。領先企業已將重心轉向「生產實戰」，將技術深度整合至營運流程，創造可衡量的商業效益。",
    date: "2026-06-29",
    readTime: "8 分鐘",
    tags: ["BCG", "零售業 AI", "生產實戰"],
    featured: true,
  },

  {
    slug: "agentic-ai-virtual-coworker",
    title: "Agentic AI：從「工具」到「虛擬同事」，你的企業準備好了嗎？",
    excerpt: "McKinsey 2025 報告指出，「Agentic AI」時代已臨，AI 將從被動回覆轉為自動規劃與執行。真正的轉型是讓 AI 成為能獨立交付成果的「數位員工」。",
    date: "2026-06-01",
    readTime: "8 分鐘",
    tags: ["Agentic AI", "AI 轉型", "McKinsey"],
    featured: true,
  },
  {
    slug: "70-20-10-rule-transformation",
    title: "破解轉型迷思：為什麼 70% 的資源應該花在「人」而非「技術」？",
    excerpt: "BCG 研究指出，AI 轉型的成功比例中，演算法僅佔 10%，技術佔 20%，剩下的 70% 全在於「人才與流程優化」。買系統最簡單，改腦袋才是最難的事。",
    date: "2026-06-01",
    readTime: "7 分鐘",
    tags: ["BCG", "人才戰略", "數位轉型"],
    featured: true,
  },
  {
    slug: "decision-intelligence-2027",
    title: "數據不等於決策：2027 年 50% 的商業決策將由 AI 增強",
    excerpt: "Gartner 預測到 2027 年，半數商業決策將透過決策智能 (DI) 進行增強。DI 橋接了「數據洞察」與「實際行動」之間的鴻溝。",
    date: "2026-06-01",
    readTime: "8 分鐘",
    tags: ["Gartner", "決策智能", "AI 應用"],
    featured: true,
  },
  {
    slug: "gartner-2026-ai",
    title: "Gartner 預測：2026 年中小企業的 AI 競爭策略——領域專用化",
    excerpt: "Gartner 2026 趨勢指出，AI 專案失敗的主因已非技術，而是「信任稀缺」。企業必須將 AI 治理與品牌成長掛鉤，才能真正實現規模化。",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "it",
    title: "跨國併購的隱形殺手：IT 合規債與資料治理風險",
    excerpt: "併購（M&A）是企業擴張的捷徑，但在 2026 年，IT 系統的整合已成為決定併購成敗的「生死線」。",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "bcg-2026",
    title: "碎裂化時代的生存法則：BCG 2026 全球貿易報告解讀",
    excerpt: "BCG 在 2026 年初發布的報告明確指出，傳統的全球化模式已宣告終結，取而代之的是高度碎裂化的「拼布式」貿易格局。",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "hbr-ai",
    title: "HBR 警示：別讓 AI 成為組織內部的「恐懼來源」",
    excerpt: "《哈佛商業評論》在 2026 年的最新研究中指出，企業在導入 AI 時常犯一個致命錯誤：溝通不對稱。",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "deloitte-2026-ai",
    title: "【Deloitte 2026】別讓 AI 成為「黑盒」，如何重塑人機決策的信任鏈？",
    excerpt: "根據 Deloitte 2026 全球人力資本趨勢報告，AI 正在以前所未有的速度重塑企業決策流程。然而，大多數企業正面臨「信任赤字」：雖然 60% 的經理人依賴 AI 產出的數據，但卻對其背後的邏輯感到不安。",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "95-percent-ai-projects-fail",
    title: "為什麼 95% 的企業 AI 專案沒有回報？問題不在技術",
    excerpt: "BCG 2026 年全球調查揭露殘酷事實：AI 價值的 70% 來自『人與流程的重塑』，不是演算法。但 95% 的企業把預算全砸在技術上。你改的是工具，還是流程？",
    date: "2026-05-02",
    readTime: "7 分鐘",
    tags: ["AI 轉型", "數位轉型", "B2B 策略"],
    featured: true,
  },
  {
    slug: "mckinsey-ai-ebitda-20-percent",
    title: "McKinsey：AI 轉型平均帶來 20% EBITDA 提升，但前提是你得聚焦",
    excerpt: "McKinsey 追蹤 20 家全球 AI 領先企業發現：他們不是什麼都做，而是只專注 1-3 個最關鍵的業務領域。每投資 $1 產生 $3 回報，1-2 年回本。你的經濟槓桿點在哪裡？",
    date: "2026-05-01",
    readTime: "8 分鐘",
    tags: ["McKinsey", "AI 投資回報", "EBITDA"],
    featured: true,
  },
  {
    slug: "280-billion-group-digital-transformation",
    title: "年營收 280 億的集團企業，如何在保守文化中推動數位轉型？",
    excerpt: "一家年營收 280 億的集團企業，內部文化極度保守，三家顧問公司搶著做。我們怎麼贏的？不是靠最強的技術，是靠讓高階主管相信你懂他的痛。",
    date: "2026-04-30",
    readTime: "9 分鐘",
    tags: ["集團企業", "數位轉型", "IoT"],
    featured: true,
  },
  {
    slug: "taiwan-enterprise-going-overseas-3-mistakes",
    title: "台灣企業出海前，必須避開的 3 個結構性誤判",
    excerpt: "台灣企業出海，90% 在第一步就犯了致命錯誤。單一 PoC 成功不等於全面可擴展、忽略目標市場的採購決策結構、系統架構未支援多幣別多語言。出海不是勇氣的問題，是結構的問題。",
    date: "2026-04-28",
    readTime: "8 分鐘",
    tags: ["企業出海", "國際市場", "B2B"],
    featured: true,
  },
  {
    slug: "sme-digital-transformation-correct-start",
    title: "主管身兼數職、系統老舊？中小企業數位化的正確起步姿勢",
    excerpt: "如果你的公司不到 150 人，主管身兼三職——千萬不要一次買齊所有系統。中小企業數位化最大的錯誤就是想一步到位。正確做法是循序漸進，從基礎硬體到 AI 決策工具。",
    date: "2026-04-26",
    readTime: "7 分鐘",
    tags: ["中小企業", "數位化", "ERP"],
    featured: true,
  },
  {
    slug: "manager-today-erp-to-ai-leader",
    title: "從ERP顧問到AI領導者！凱渥科技如何用 AI 重塾決策節奏，帶領團隊走向策略升級之路",
    excerpt: "經理人月刊專題報導——凱渥科技總經理丘中岳分享如何從 ERP 領域深耕多年的資深專家，透過《AI決策領導力課程》找到新定錨，確立成為「台灣中小企業的麥肯錫」的新願景，利用 AI 賦能協助台灣隱形冠軍走向國際。",
    date: "2025-12-20",
    readTime: "10 分鐘",
    tags: ["經理人月刊", "AI 領導力", "數位轉型"],
    featured: true,
    externalUrl: "https://www.managertoday.com.tw/articles/view/71391",
  },
  {
    slug: "ai-reshaping-sme-decisions",
    title: "AI 如何改寫中小企業決策？從數據分析到智慧預測的實戰指南",
    externalUrl: undefined as string | undefined,
    excerpt: "生成式 AI 正在重新定義企業決策的方式。本文深入探討中小企業如何導入 AI 決策工具，從數據收集、分析到智慧預測，建立數據導向的決策文化，提升競爭力。",
    date: "2026-03-15",
    readTime: "8 分鐘",
    tags: ["AI 領導力", "數位轉型", "中小企業"],
    featured: true,
  },
  {
    slug: "2026-government-digital-subsidy",
    title: "2026 政府數位轉型補助指南：中小企業如何申請與善用資源",
    excerpt: "政府持續推動數位轉型政策，提供多項補助計畫協助中小企業升級。本文整理 2026 年最新的補助資訊，包含 SBIR、SIIR、數位轉型補助等申請攻略。",
    date: "2026-03-01",
    readTime: "10 分鐘",
    tags: ["政府補助", "數位轉型", "中小企業"],
    featured: true,
  },
  {
    slug: "erp-to-ai-upgrade-path",
    title: "從 ERP 到 AI 的升級路徑：企業數位轉型的三個階段",
    excerpt: "許多企業已導入 ERP 系統，但如何從基礎的數位化進階到 AI 智慧化？本文分享凱渥科技 15 年的實戰經驗，解析企業數位轉型的三個關鍵階段。",
    date: "2026-02-15",
    readTime: "7 分鐘",
    tags: ["ERP", "AI", "數位轉型顧問"],
  },
  {
    slug: "enterprise-going-global-strategy",
    title: "企業出海實戰：從台灣到東南亞的跨國佈局策略",
    excerpt: "越來越多台灣企業將目光投向東南亞市場。本文分享凱渥科技協助企業出海的實戰經驗，從市場分析、法規合規到人脈對接的完整策略。",
    date: "2026-02-01",
    readTime: "9 分鐘",
    tags: ["企業出海", "東南亞市場", "跨國策略"],
  },
  {
    slug: "crm-implementation-guide",
    title: "CRM 導入實戰：如何建立客戶 360 度視圖提升業績",
    excerpt: "客戶關係管理不僅是一套軟體，更是一種經營哲學。本文分享 CRM 系統導入的最佳實踐，從需求評估到上線運營的完整指南。",
    date: "2026-01-15",
    readTime: "6 分鐘",
    tags: ["CRM", "客戶管理", "業績提升"],
  },
  {
    slug: "iot-smart-manufacturing",
    title: "IoT 智慧製造：工廠數位轉型的關鍵技術與案例分享",
    excerpt: "物聯網技術正在改變製造業的面貌。本文探討 IoT 在智慧製造中的應用場景，並分享凱渥科技協助集團企業整合 IoT 設備的實戰案例。",
    date: "2026-01-01",
    readTime: "8 分鐘",
    tags: ["IoT", "智慧製造", "數位轉型"],
  },
  {
    slug: "agentic-ai-success-rate-77",
    title: "2026 企業 AI 新顯學：Agentic AI 如何將成功率從 20% 提升至 77%？",
    excerpt: "過去企業導入 AI 成功率僅 20%，因為只把它當工具。Stanford 2026 AI Index 揭示：代理型 AI（Agentic AI）崛起，讓成功率飆升至 77%。本文解析這場從『被動工具』到『主動代理』的典範轉移。",
    date: "2026-04-20",
    readTime: "8 分鐘",
    tags: ["Agentic AI", "AI 轉型", "Stanford 報告"],
    featured: true,
  },
  {
    slug: "ai-supply-chain-revolution-bcg",
    title: "跨國供應鏈的 AI 革命：BCG 報告指出近 80% 企業以『降本增效』為首要目標",
    excerpt: "BCG 2026 最新報告揭示，近 80% 的企業導入 AI 是為了解決供應鏈成本問題。但目前只有 13% 的物流供應商真正看到財務回報，關鍵在於流程整合。",
    date: "2026-04-18",
    readTime: "9 分鐘",
    tags: ["供應鏈 AI", "企業出海", "BCG 報告"],
    featured: true,
  },
  {
    slug: "taiwan-2058-sme-ai-transformation",
    title: "台灣 2,058 家企業的轉型啟示：中小企業如何掌握 AI 發展黃金期？",
    excerpt: "經濟部 2026 年最新數據顯示，台灣已有超過 2,000 家企業成功導入 AI，其中高達 91% 是中小企業。秘訣在於善用政府資源加上漸進式導入策略。",
    date: "2026-04-16",
    readTime: "7 分鐘",
    tags: ["中小企業", "AI 轉型", "政府補助"],
  },
  {
    slug: "forrester-2026-physical-ai",
    title: "Forrester 2026 預測：AI 從『數位螢幕』走向『實體世界』，你的企業準備好了嗎？",
    excerpt: "Forrester 2026 最新報告指出，AI 正在從數位螢幕全面走向實體世界。從智慧製造的預測性維護到無人搬運車，Physical AI 正在重塑產業面貌。",
    date: "2026-04-14",
    readTime: "8 分鐘",
    tags: ["Physical AI", "Forrester", "智慧製造"],
  },
  {
    slug: "2026-global-ai-governance",
    title: "2026 全球 AI 治理元年：跨國企業不可不知的『合規競爭力』",
    excerpt: "隨著歐美各國 AI 監管制度陸續上路，2026 正式進入全球 AI 治理元年。跨國企業在享受 AI 效率的同時，如何將合規轉化為競爭優勢？",
    date: "2026-04-12",
    readTime: "9 分鐘",
    tags: ["AI 治理", "企業出海", "合規競爭力"],
  },
  {
    slug: "ai-agent-delivery-cost-center",
    title: "AI Agent 不是聊天機器人，它是你未來的交付成本中心",
    excerpt: "BCG 2026 報告指出，Agentic AI 正重塑技術服務的『交付經濟』，解構傳統人力外包模式。它不再是進階版 ChatGPT，而是企業未來的『成本中心』。",
    date: "2026-05-02",
    readTime: "8 分鐘",
    tags: ["Agentic AI", "成本優化", "企業轉型"],
    featured: true,
  },
  {
    slug: "ai-compliance-debt-2026",
    title: "2026 監管退潮？別被假象騙了，跨國企業的 AI 合規債才剛開始",
    excerpt: "全球 AI 監管看似放緩，實則進入『技術性合規債』時代。輕忽資料隱私、演算法偏見將付出沉重代價，跨國企業必須建立超越最低標準的 AI 治理框架。",
    date: "2026-05-02",
    readTime: "9 分鐘",
    tags: ["AI 合規", "企業出海", "風險管理"],
    featured: true,
  },
  {
    slug: "sme-ai-inclusivity-double-revenue",
    title: "別再說 SME 玩不起 AI：Deloitte 指出 AI 包容性已讓領先者營收翻倍",
    excerpt: "AI 採用率從 32% 飆升至 78%，中小企業若不進入『AI 包容性』名單將面臨生存危機。Deloitte 數據揭示，領先者已實現營收翻倍的成長。",
    date: "2026-05-02",
    readTime: "8 分鐘",
    tags: ["中小企業", "AI 轉型", "數位包容性"],
    featured: true,
  },
  {
    slug: "ai-hallucination-agentic-solution",
    title: "為什麼你的 AI 決策還在『幻覺』？BCG 揭露 29% 的企業價值將由 Agent 創造",
    excerpt: "AI 決策『幻覺』問題困擾企業，但 Agentic AI 透過自主規劃、驗證與修正，能降低決策錯誤風險。BCG 預測 2028 年 29% 企業價值將由 AI Agent 創造。",
    date: "2026-05-02",
    readTime: "8 分鐘",
    tags: ["Agentic AI", "決策精準度", "風險控制"],
    featured: true,
  },
  {
    slug: "physical-ai-supply-chain-revolution",
    title: "從『數位螢幕』到『實體世界』：Forrester 預測 AI 實體化對跨境供應鏈的衝擊",
    excerpt: "AI 正從『數位螢幕』走向『實體世界』，深度整合物流、製造與倉儲。跨境企業若無『實體 AI』佈局將失去競爭力，Forrester 預測這是 2026 年最大的產業變革。",
    date: "2026-05-02",
    readTime: "9 分鐘",
    tags: ["Physical AI", "供應鏈", "企業出海"],
    featured: true,
  },
  {
    slug: "81-percent-ai-projects-unprofitable",
    title: "為什麼 81% 的 AI 專案沒賺錢？從『實驗』轉向『智能體策略』的生死關頭",
    excerpt: "88% 的企業在做 AI 實驗，但僅 19% 看到利潤。原因在於你還在『玩』AI，而不是將它嵌入決策。從孤立的 AI 實驗轉向整合的智能體策略，才是真正的轉型。",
    date: "2026-06-08",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "McKinsey", "智能體策略"],
    featured: true,
  },
  {
    slug: "autonomous-ai-agents-2028",
    title: "2028 年，15% 的商業決策將由 AI 自主完成：你準備好讓出指揮權了嗎？",
    excerpt: "從 Co-pilot 到 Autonomous Agents，AI 正在從『助理』變成『決策者』。不提早佈局 Agent 策略，你將失去競爭速度。Gartner 預測 2028 年 15% 的商業決策將由 AI 自主完成。",
    date: "2026-06-08",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "Gartner", "Autonomous Agents"],
    featured: true,
  },
  {
    slug: "sovereign-cloud-open-ecosystem",
    title: "擺脫廠商綁架！為什麼領先的中小企業正在轉向『主權雲端』與開放生態？",
    excerpt: "數位化不是為了被單一系統綁死。IDC 指出，採用開放生態系統的企業，穩定性高出 35%。主權雲端與開放生態正成為中小企業數位化的新選擇。",
    date: "2026-06-08",
    readTime: "8 分鐘",
    tags: ["中小企業數位化", "IDC", "主權雲端"],
    featured: true,
  },
  {
    slug: "manufacturing-transformation-process-reengineering",
    title: "製造業轉型陷阱：別再只買技術了！為什麼『流程重塑』才是 EBITDA 的救命稻草？",
    excerpt: "許多中小製造業買了最新 ERP 卻效率依舊。2026 最新研究顯示：忽略流程重塑的轉型只是在浪費錢。技術是工具，流程才是驅動價值的核心。",
    date: "2026-06-08",
    readTime: "8 分鐘",
    tags: ["中小企業數位化", "流程重塑", "EBITDA"],
    featured: true,
  },
  {
    slug: "ai-compliance-eu-ai-act",
    title: "集團出海的新門檻：AI 合規債。為什麼不符合 EU AI Act 可能讓你損失全球市場？",
    excerpt: "出海不只是找客戶，更是找合規。歐盟 AI 法案已成全球標準，合規將是 2026 企業出海的最大隱形障礙。Deloitte 指出，AI 合規已成為跨國企業的必修課。",
    date: "2026-06-08",
    readTime: "9 分鐘",
    tags: ["集團出海", "AI 合規", "Deloitte"],
    featured: true,
  },
  {
    slug: "cmo-ai-marketing-infrastructure",
    title: "CMO 的 AI 焦慮：15% 的預算投下去了，為什麼只有 30% 的企業能接住這股流量？",
    excerpt: "行銷預算大舉轉向 AI，但基礎建設跟不上的企業，只會讓這 15% 的預算打水漂。AI 流量紅利背後的基礎設施鴻溝，正在決定誰能真正受益。",
    date: "2026-06-08",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "行銷轉型", "Gartner"],
    featured: true,
  },
  {
    slug: "gartner-agentic-ai-governance-2027",
    title: "Gartner 警告：2027 年 40% 企業將「停用」AI 代理人，問題出在治理",
    excerpt: "Gartner 預測到 2027 年，40% 的企業將被迫降級或停用自主 AI 代理人。原因不是技術，而是把 AI 治理當成非黑即白的選擇，缺乏分級授權。",
    date: "2026-06-22",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "AI 治理", "Gartner"],
    featured: true,
  },
  {
    slug: "deloitte-ai-process-redesign-2026",
    title: "Deloitte 揭露：48% 企業導入 AI 卻沒改流程，只有 12% 真正轉型",
    excerpt: "Deloitte《State of AI in the Enterprise 2026》調查近 3,700 名專業人士後發現，多數企業只是在舊流程上貼了 AI 標籤。把 AI 當加速器而非重塑者，注定事倍功半。",
    date: "2026-06-22",
    readTime: "8 分鐘",
    tags: ["AI 決策轉型", "流程重塑", "Deloitte"],
    featured: false,
  },
  {
    slug: "ai-layoff-reversal-2026",
    title: "AI 裁員的反轉潮：為何 55% 企業後悔，半數裁員將被悄悄逆轉？",
    excerpt: "Forbes 與 Forrester 追蹤指出，55% 因 AI 裁員的雇主已感到後悔，三分之二開始重新招聘。缺乏判斷力的效率，其實是一場災難。",
    date: "2026-06-22",
    readTime: "7 分鐘",
    tags: ["AI 決策轉型", "人才戰略", "Forrester"],
    featured: false,
  },
  {
    slug: "bcg-factory-of-future-2026",
    title: "1.03 兆美元製造價值正在外移：BCG 未來工廠如何改寫出海地圖",
    excerpt: "BCG 最新報告指出，AI 與自動化正改寫全球供應鏈成本方程式。當出海仍只依賴勞動力套利，將在擁有「未來工廠」能力的競爭者面前毫無招架之力。",
    date: "2026-06-22",
    readTime: "9 分鐘",
    tags: ["集團出海", "智慧製造", "BCG"],
    featured: true,
  },
  {
    slug: "ma-it-integration-2026",
    title: "併購激增 47%，卻有 70-90% 失敗：出海併購的 IT 整合生死線",
    excerpt: "AI 相關併購交易激增 47%，但 70-90% 以失敗收場。買來的往往不是資產，而是資安未爆彈。黃金 100 天內的 IT 整合，決定併購成敗。",
    date: "2026-06-22",
    readTime: "9 分鐘",
    tags: ["集團出海", "M&A", "資安治理"],
    featured: false,
  },
  {
    slug: "sme-process-inertia-2026",
    title: "2.15 兆美元數位轉型浪潮下，中小企業如何不被「流程慣性」拖垮？",
    excerpt: "全球數位轉型市場將達 2.15 兆美元。中小企業花大錢買系統，員工卻還在用 Excel 算帳。真正的關卡不在預算，而是難以打破的流程慣性。",
    date: "2026-06-22",
    readTime: "7 分鐘",
    tags: ["中小企業數位化", "流程優化", "Deloitte"],
    featured: false,
  },
];

export default function Blog() {
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background: `linear-gradient(135deg, oklch(0.1 0.04 250 / 0.92), oklch(0.16 0.04 250 / 0.88)), url(${BLOG_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fade} custom={0}>
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Insights</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              Blog 分享
            </h1>
            <p className="text-[oklch(0.78_0.02_250)] mt-4 max-w-2xl text-lg">
              數位轉型趨勢、AI 應用洞察、企業出海策略 — 來自凱渥科技顧問團隊的第一手觀點。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* Featured Posts */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0} className="mb-10">
            <h2 className="text-2xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              精選文章
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((post, i) => (
              <motion.div
                key={post.slug}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
              >
                {post.externalUrl ? (
                  <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                    <article className="group bg-white rounded-xl border border-[oklch(0.92_0.01_250)] shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden h-full glow-card">
                      <div className="h-2 bg-gradient-to-r from-[oklch(0.82_0.12_85)] to-[oklch(0.72_0.14_200)]" />
                      <div className="p-7">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3 text-xs text-[oklch(0.5_0.03_250)]">
                            <span>{post.date}</span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[oklch(0.82_0.12_85/0.15)] text-[oklch(0.6_0.12_85)]">
                            <ExternalLink size={10} />
                            媒體報導
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[oklch(0.18_0.04_250)] mb-3 group-hover:text-[oklch(0.72_0.14_200)] transition-colors duration-300" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                          {post.title}
                        </h3>
                        <p className="text-sm text-[oklch(0.5_0.03_250)] leading-relaxed mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[oklch(0.72_0.14_200/0.08)] text-[oklch(0.55_0.12_200)]">
                              <Tag size={10} />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.72_0.14_200)] group-hover:gap-2 transition-all duration-300">
                          閱讀原文 <ExternalLink size={14} />
                        </span>
                      </div>
                    </article>
                  </a>
                ) : (
                  <Link href={`/blog/${post.slug}`}>
                    <article className="group bg-white rounded-xl border border-[oklch(0.92_0.01_250)] shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden h-full glow-card">
                      <div className="h-2 bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.82_0.12_85)]" />
                      <div className="p-7">
                        <div className="flex items-center gap-3 text-xs text-[oklch(0.5_0.03_250)] mb-3">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[oklch(0.18_0.04_250)] mb-3 group-hover:text-[oklch(0.72_0.14_200)] transition-colors duration-300" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                          {post.title}
                        </h3>
                        <p className="text-sm text-[oklch(0.5_0.03_250)] leading-relaxed mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[oklch(0.72_0.14_200/0.08)] text-[oklch(0.55_0.12_200)]">
                              <Tag size={10} />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.72_0.14_200)] group-hover:gap-2 transition-all duration-300">
                          閱讀全文 <ArrowRight size={14} />
                        </span>
                      </div>
                    </article>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Regular Posts */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0} className="mb-10">
            <h2 className="text-2xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              所有文章
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post, i) => (
              <motion.div
                key={post.slug}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-xl border border-[oklch(0.92_0.01_250)] shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full glow-card">
                    <div className="flex items-center gap-3 text-xs text-[oklch(0.5_0.03_250)] mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[oklch(0.18_0.04_250)] mb-2 group-hover:text-[oklch(0.72_0.14_200)] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[oklch(0.5_0.03_250)] leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[oklch(0.72_0.14_200/0.08)] text-[oklch(0.55_0.12_200)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
