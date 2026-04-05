/*
 * Design: Oceanic Blueprint — Solutions Page
 * Four main solution areas with detailed descriptions
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Database, Brain, Globe, Landmark, ArrowRight,
  BarChart3, Users, ShieldCheck, Cpu, Ship, FileText, Briefcase
} from "lucide-react";

const SOLUTIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663334155394/AR88J74jigHbmcaUVraJD8/solutions-bg-38toGZbky474xs6KG5YFfB.webp";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const solutions = [
  {
    id: "operations",
    icon: Database,
    title: "營運轉型顧問",
    subtitle: "Operations Transformation",
    desc: "從傳統人工作業到數位化管理，我們協助企業建立完整的營運管理系統，提升效率、降低成本、強化決策品質。",
    features: [
      { icon: Database, name: "ERP 進銷存系統規劃", detail: "涵蓋採購、銷售、庫存、研發管理等完整模組，支援鼎新、SAP、Oracle等主流系統。" },
      { icon: Users, name: "HR 人資系統整合", detail: "從員工管理、薪資計算到績效考核，打造高效的人力資源管理平台。" },
      { icon: Briefcase, name: "CRM 客戶關係管理", detail: "建立客戶 360 度視圖，優化銷售流程，提升客戶滿意度與回購率。" },
      { icon: BarChart3, name: "BI 數據報表分析", detail: "將散落的營運數據轉化為可視化的決策儀表板，讓管理者一目了然。" },
    ],
    gradient: "from-[oklch(0.72_0.14_200)] to-[oklch(0.55_0.12_200)]",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI 決策領導",
    subtitle: "AI-Powered Decision Making",
    desc: "利用多元 AI 重塑企業決策節奏，從數據分析到策略建議，讓 AI 成為您最可靠的決策夥伴。",
    features: [
      { icon: Cpu, name: "AI 決策工具導入", detail: "評估並導入最適合企業的 AI 工具，從文件處理到數據分析全面覆蓋。" },
      { icon: Brain, name: "數據導向決策", detail: "建立數據驅動的決策文化，讓每一個商業決定都有數據支撐。" },
      { icon: FileText, name: "AI 多語言商務", detail: "AI 驅動的多語言郵件、文件翻譯與潤稿，加速跨國商務溝通。" },
      { icon: BarChart3, name: "智慧預測分析", detail: "利用 AI 進行銷售預測、庫存優化、客戶行為分析等進階應用。" },
    ],
    gradient: "from-[oklch(0.82_0.12_85)] to-[oklch(0.7_0.1_85)]",
  },
  {
    id: "global",
    icon: Globe,
    title: "企業出海策略",
    subtitle: "Global Expansion Strategy",
    desc: "針對貿易業與製造業，提供跨國人脈與市場分析，協助企業佈局新加坡、香港、馬來西亞、澳洲等國際市場。",
    features: [
      { icon: Globe, name: "跨國市場分析", detail: "深度分析目標市場的法規、競爭態勢、消費者行為與進入策略。" },
      { icon: Ship, name: "跨國 ERP 系統", detail: "建置支援多幣別、多語言、多據點的跨國 ERP 系統架構。" },
      { icon: Users, name: "國際人脈對接", detail: "透過 EMBA、商會、政府機構等管道，為企業對接海外合作夥伴。" },
      { icon: Briefcase, name: "外貿 AI 系統", detail: "整合 1.7 億企業資訊、7 億聯絡人數據，AI 驅動的精準客戶開發。" },
    ],
    gradient: "from-[oklch(0.65_0.12_200)] to-[oklch(0.5_0.1_250)]",
  },
  {
    id: "government",
    icon: Landmark,
    title: "政府專案對接",
    subtitle: "Government Project Alignment",
    desc: "協助企業善用政府資源，從數位轉型補助到 AI 課程，從標案申請到政策對接，創造更多價值。",
    features: [
      { icon: Landmark, name: "政府補助申請", detail: "協助企業申請數位轉型補助、SBIR、SIIR 等政府計畫。" },
      { icon: ShieldCheck, name: "合規性輔導", detail: "確保企業系統符合政府法規要求，包含資安、個資保護等。" },
      { icon: FileText, name: "標案準備", detail: "從標案資格準備到提案簡報，全程輔導企業參與政府採購。" },
      { icon: Cpu, name: "AI 課程與培訓", detail: "對接企業 AI 培訓與 AI 陪跑資源，提升企業團隊的數位能力。" },
    ],
    gradient: "from-[oklch(0.6_0.1_170)] to-[oklch(0.45_0.08_200)]",
  },
];

export default function Solutions() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background: `linear-gradient(135deg, oklch(0.1 0.04 250 / 0.92), oklch(0.16 0.04 250 / 0.88)), url(${SOLUTIONS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fade} custom={0}>
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Solutions</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              企業解決方案
            </h1>
            <p className="text-[oklch(0.78_0.02_250)] mt-4 max-w-2xl text-lg">
              整合 IT 與 OT 資源，從營運轉型到 AI 決策，從本土深耕到全球佈局，提供全方位的企業顧問服務。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* Solutions Detail */}
      {solutions.map((sol, idx) => (
        <section
          key={sol.id}
          id={sol.id}
          className={`py-20 lg:py-28 ${idx % 2 === 1 ? "bg-[oklch(0.96_0.005_250)]" : ""}`}
        >
          <div className="container">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                custom={0}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sol.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <sol.icon size={26} />
                </div>
                <span className="text-[oklch(0.72_0.14_200)] text-xs font-semibold tracking-widest uppercase">{sol.subtitle}</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)] mt-1" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
                  {sol.title}
                </h2>
                <p className="text-[oklch(0.4_0.03_250)] mt-4 leading-relaxed text-lg">{sol.desc}</p>
              </motion.div>

              <div className={`grid gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {sol.features.map((f, i) => (
                  <motion.div
                    key={f.name}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fade}
                    className="bg-white rounded-xl p-5 border border-[oklch(0.92_0.01_250)] shadow-sm hover:shadow-md transition-shadow duration-300 glow-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${sol.gradient} flex items-center justify-center text-white shrink-0`}>
                        <f.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[oklch(0.18_0.04_250)]">{f.name}</h4>
                        <p className="text-sm text-[oklch(0.5_0.03_250)] mt-1 leading-relaxed">{f.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.14_0.04_250)] to-[oklch(0.18_0.04_250)]">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
            找到適合您企業的解決方案了嗎？
          </h2>
          <p className="text-[oklch(0.7_0.02_250)] mt-3">讓我們的顧問團隊為您進行諮詢的需求評估。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 mt-6 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.6_0.12_200)] text-white font-semibold shadow-lg shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            預約顧問諮詢 <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
