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
    slug: "gartner-2026-ai",
    title: "Gartner 預測：2026 年中小企業的 AI 競爭策略——領域專用化",
    excerpt: "在生成式 AI 的競賽中，資源有限的中小企業是否註定落後？Gartner 2026 的最新趨勢報告給出了否定答案。預測顯示，到 2028 年，超過 50% 的企業 GenAI 模型將轉向「領域專用」（Domain-Specific），而非通...",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "it",
    title: "跨國併購的隱形殺手：IT 合規債與資料治理風險",
    excerpt: "併購（M&A）是企業快速擴張的利器，但在 2026 年的全球監管環境下，IT 系統的整合已成為成敗的關鍵指標。EY 與 BCG 的研究一致指出，超過六成的併購案未能達到預期財務回報，其核心痛點往往在於被併購方的 IT 基礎建設與母公司存在巨...",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "bcg-2026",
    title: "碎裂化時代的生存法則：BCG 2026 全球貿易報告解讀",
    excerpt: "BCG（波士頓諮詢公司）在 2026 年初發布的《全球貿易韌性報告》中明確指出，傳統的全球化模式已宣告終結，取而代之的是高度碎裂化、區域化的貿易格局。報告顯示，BRICS+（金磚國家擴張版）內部的貿易成長率將持續領先，成為不可忽視的新戰場。",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "hbr-ai",
    title: "HBR 警示：別讓 AI 成為組織內部的「恐懼來源」",
    excerpt: "《哈佛商業評論》在 2026 年的最新研究中指出，企業在導入 AI 時常犯一個致命錯誤：溝通不對稱。當管理層專注於「效率提升」與「成本優化」的財務指標時，一線員工與中階主管往往將其解讀為自動化帶來的裁員威脅。",
    date: "2026-05-10",
    readTime: "8 分鐘",
    tags: ["最新洞察", "AI 轉型"],
    featured: true,
  },
{
    slug: "deloitte-2026-ai",
    title: "【Deloitte 2026】別讓 AI 成為「黑盒」，如何重塑人機決策的信任鏈？",
    excerpt: "根據 Deloitte 2026 全球人力資本趨勢報告，AI 正在以前所未有的速度重塑企業決策流程。然而，大多數企業正面臨「信任赤字」：雖然 60% 的經理人依賴 AI 產出的數據，但卻對其背後的邏輯感到不安，甚至在決策失敗時產生責任推諉。",
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
