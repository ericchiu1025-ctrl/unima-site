/*
 * Design: Oceanic Blueprint — Blog Post Detail Page
 * SEO-optimized article with structured content
 */
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Tag, Share2, Facebook, Linkedin } from "lucide-react";

const blogContent: Record<string, { title: string; date: string; readTime: string; tags: string[]; content: string[] }> = {
  "ai-reshaping-sme-decisions": {
    title: "AI 如何改寫中小企業決策？從數據分析到智慧預測的實戰指南",
    date: "2026-03-15",
    readTime: "8 分鐘",
    tags: ["AI 領導力", "數位轉型", "中小企業"],
    content: [
      "在 2026 年的今天，生成式 AI 已經不再是大型企業的專利。越來越多的中小企業開始意識到，AI 不僅能提升營運效率，更能從根本上改變企業的決策方式。凱渥科技在過去 15 年的顧問經驗中，見證了無數企業從傳統的「經驗決策」轉向「數據決策」，再進化到「AI 智慧決策」的歷程。",
      "第一階段：數據收集與整理。許多中小企業的第一個挑戰是「數據散落各處」。銷售數據在 Excel 裡、客戶資料在業務手機裡、庫存數據在倉管腦中。導入 ERP 系統是建立數據基礎的第一步，讓所有營運數據集中在一個平台上。",
      "第二階段：數據分析與視覺化。有了數據之後，下一步是讓數據「說話」。透過 BI（商業智慧）工具，將原始數據轉化為直觀的圖表和儀表板。管理者不再需要翻閱厚重的報表，而是一眼就能掌握企業的營運狀況。",
      "第三階段：AI 智慧預測。這是最令人興奮的階段。AI 不僅能分析過去的數據，還能預測未來的趨勢。例如，AI 可以根據歷史銷售數據預測下個月的需求量，幫助企業提前調整庫存；也可以分析客戶行為模式，預測哪些客戶可能流失，讓業務團隊提前介入。",
      "凱渥科技的 AI 決策導入方法論包含四個步驟：需求診斷、工具評估、導入實施、持續優化。我們不推銷特定的 AI 工具，而是根據企業的實際需求和預算，推薦最適合的解決方案。",
      "如果您的企業正在考慮導入 AI 決策工具，歡迎與凱渥科技的顧問團隊聯繫，我們將為您提供免費的需求評估服務。",
    ],
  },
  "2026-government-digital-subsidy": {
    title: "2026 政府數位轉型補助指南：中小企業如何申請與善用資源",
    date: "2026-03-01",
    readTime: "10 分鐘",
    tags: ["政府補助", "數位轉型", "中小企業"],
    content: [
      "台灣政府持續推動數位轉型政策，2026 年更加大了對中小企業的補助力度。然而，許多企業主對於政府補助的申請流程感到陌生，甚至不知道自己符合哪些補助資格。本文將為您整理 2026 年最新的數位轉型補助資訊。",
      "SBIR（小型企業創新研發計畫）：針對研發創新型的中小企業，補助金額最高可達 500 萬元。適合正在開發新產品或新技術的企業。",
      "SIIR（服務業創新研發計畫）：針對服務業的創新研發，補助金額最高可達 300 萬元。適合正在進行服務模式創新的企業。",
      "數位轉型補助：經濟部推出的數位轉型專案，協助中小企業導入數位工具。補助項目包含 ERP 系統、CRM 系統、AI 應用等。",
      "AI 課程與培訓補助：政府提供多項 AI 相關的培訓課程，部分課程完全免費。企業可以透過這些課程提升團隊的數位能力。",
      "凱渥科技擁有豐富的政府專案對接經驗，可以協助企業評估適合的補助計畫，並提供從申請到結案的全程輔導。我們的目標是讓每一家企業都能善用政府資源，加速數位轉型的腳步。",
    ],
  },
  "erp-to-ai-upgrade-path": {
    title: "從 ERP 到 AI 的升級路徑：企業數位轉型的三個階段",
    date: "2026-02-15",
    readTime: "7 分鐘",
    tags: ["ERP", "AI", "數位轉型顧問"],
    content: [
      "在凱渥科技 15 年的顧問生涯中，我們發現企業的數位轉型通常會經歷三個明確的階段。理解這三個階段，能幫助企業主更清楚地規劃自己的轉型路徑。",
      "第一階段：數位化（Digitization）。這是最基礎的階段，核心任務是將紙本作業轉為數位化。導入 ERP 系統、建立電子化的進銷存管理、使用雲端工具取代傳統的文件管理。這個階段的重點是「效率提升」。",
      "第二階段：數位優化（Digital Optimization）。在數位化的基礎上，進一步優化營運流程。導入 CRM 提升客戶管理效率、使用 BI 工具進行數據分析、整合各系統打破資訊孤島。這個階段的重點是「流程優化」。",
      "第三階段：AI 智慧化（AI Transformation）。這是最高階的階段，利用 AI 技術重塑企業的決策方式和商業模式。從預測性分析到自動化決策，從智慧客服到個性化推薦。這個階段的重點是「創新突破」。",
      "每個階段都有其價值，企業不需要急於跳到最高階段。重要的是根據自身的條件和需求，穩步推進。凱渥科技的顧問團隊會根據企業的現況，提供最適合的升級建議。",
    ],
  },
  "enterprise-going-global-strategy": {
    title: "企業出海實戰：從台灣到東南亞的跨國佈局策略",
    date: "2026-02-01",
    readTime: "9 分鐘",
    tags: ["企業出海", "東南亞市場", "跨國策略"],
    content: [
      "隨著台灣市場的飽和，越來越多企業將目光投向東南亞。新加坡、馬來西亞、越南、泰國等國家，都成為台灣企業出海的熱門目的地。凱渥科技在協助企業出海的過程中，累積了豐富的實戰經驗。",
      "出海前的準備工作至關重要。首先是市場調研：目標市場的法規環境、競爭態勢、消費者行為都需要深入了解。其次是人脈建立：透過 EMBA 校友網絡、商會組織、政府機構等管道，建立在地的商務人脈。",
      "系統架構的規劃也是關鍵。跨國企業需要支援多幣別、多語言、多據點的 ERP 系統。凱渥科技可以協助企業評估並建置適合的跨國系統架構。",
      "凱渥科技的外貿 AI 系統整合了 1.7 億企業資訊和 7 億聯絡人數據，能夠幫助企業精準鎖定目標客戶。搭配 AI 多語言郵件和 CRM 業務跟進功能，大幅提升跨國業務開發的效率。",
      "如果您的企業正在規劃出海策略，歡迎與凱渥科技聯繫。我們在新加坡設有辦公室，能夠提供在地的支援服務。",
    ],
  },
  "crm-implementation-guide": {
    title: "CRM 導入實戰：如何建立客戶 360 度視圖提升業績",
    date: "2026-01-15",
    readTime: "6 分鐘",
    tags: ["CRM", "客戶管理", "業績提升"],
    content: [
      "客戶關係管理（CRM）不僅是一套軟體，更是一種經營哲學。在凱渥科技的顧問經驗中，成功的 CRM 導入需要兼顧「技術」和「文化」兩個面向。",
      "技術面：選擇適合企業規模和產業的 CRM 系統，進行客製化設定，整合現有的 ERP 和其他系統，建立完整的客戶數據平台。",
      "文化面：改變業務團隊的工作習慣，建立數據驅動的銷售文化，讓每一位業務人員都願意使用 CRM 系統記錄客戶互動。",
      "CRM 導入的最佳實踐包含：從小範圍試點開始、確保高層的支持與參與、提供充分的培訓、設定明確的 KPI 指標、持續收集使用者回饋並優化。",
      "凱渥科技可以協助企業從需求評估、系統選型、導入實施到持續優化，提供全程的 CRM 顧問服務。",
    ],
  },
  "iot-smart-manufacturing": {
    title: "IoT 智慧製造：工廠數位轉型的關鍵技術與案例分享",
    date: "2026-01-01",
    readTime: "8 分鐘",
    tags: ["IoT", "智慧製造", "數位轉型"],
    content: [
      "物聯網（IoT）技術正在改變製造業的面貌。從設備監控到預測性維護，從品質管理到能源優化，IoT 為工廠帶來了前所未有的可能性。",
      "凱渥科技在協助致茂電子等集團企業進行數位轉型的過程中，累積了豐富的 IoT 整合經驗。我們的方案包含 IoT 設備串接、APP 前台開發、數據管理後台建置，以及 AI 分析模組的整合。",
      "IoT 智慧製造的關鍵技術包含：感測器數據採集、邊緣運算、雲端數據平台、AI 預測分析、數位孿生等。每一項技術都需要根據工廠的實際情況進行客製化的規劃。",
      "成功的 IoT 導入需要整合 IT（資訊技術）和 OT（營運技術）兩個領域。這正是凱渥科技的核心優勢——我們擁有跨 IT 和 OT 的整合能力，能夠為製造業客戶提供完整的智慧製造解決方案。",
      "如果您的工廠正在考慮導入 IoT 技術，歡迎與凱渥科技聯繫，我們將為您提供專業的評估與規劃服務。",
    ],
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[oklch(0.18_0.04_250)]">文章不存在</h1>
          <Link href="/blog" className="text-[oklch(0.72_0.14_200)] mt-4 inline-block">
            返回 Blog 列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[oklch(0.12_0.04_250)]">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-[oklch(0.72_0.14_200)] hover:text-white transition-colors mb-6">
              <ArrowLeft size={14} />
              返回 Blog
            </Link>
            <div className="flex items-center gap-3 text-xs text-[oklch(0.6_0.02_250)] mb-4">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white max-w-3xl leading-tight" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[oklch(0.72_0.14_200/0.15)] text-[oklch(0.72_0.14_200)]">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-[oklch(0.35_0.03_250)] leading-relaxed mb-6 text-base">
                  {paragraph}
                </p>
              ))}
            </motion.article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-[oklch(0.92_0.01_250)]">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[oklch(0.5_0.03_250)] flex items-center gap-1">
                  <Share2 size={14} />
                  分享文章
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[oklch(0.72_0.14_200/0.1)] flex items-center justify-center text-[oklch(0.72_0.14_200)] hover:bg-[oklch(0.72_0.14_200)] hover:text-white transition-colors"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[oklch(0.72_0.14_200/0.1)] flex items-center justify-center text-[oklch(0.72_0.14_200)] hover:bg-[oklch(0.72_0.14_200)] hover:text-white transition-colors"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>

            {/* Author */}
            <div className="mt-8 p-6 bg-[oklch(0.96_0.005_250)] rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[oklch(0.72_0.14_200)] to-[oklch(0.82_0.12_85)] flex items-center justify-center text-white font-bold text-lg shrink-0">
                  E
                </div>
                <div>
                  <h4 className="font-bold text-[oklch(0.18_0.04_250)]">Eric Chiu</h4>
                  <p className="text-xs text-[oklch(0.5_0.03_250)]">凱渥科技 創辦人暨執行長</p>
                  <p className="text-sm text-[oklch(0.4_0.03_250)] mt-2 leading-relaxed">
                    15 年企業營運與 ERP 整合經驗，累積 300+ 企業顧問案例。專注於協助中小企業數位轉型與 AI 智慧化升級。
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[oklch(0.14_0.04_250)] to-[oklch(0.18_0.04_250)] rounded-xl text-center">
              <h3 className="text-xl font-bold text-white">需要專業顧問協助？</h3>
              <p className="text-[oklch(0.7_0.02_250)] mt-2 text-sm">凱渥科技提供免費的企業需求評估服務</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 mt-4 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.6_0.12_200)] text-white font-semibold text-sm shadow-lg shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-xl transition-all duration-300"
              >
                立即諮詢 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
