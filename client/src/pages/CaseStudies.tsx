/*
 * Design: Oceanic Blueprint — Case Studies Page
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Building2, Stethoscope, Ship, Factory, Wine, ShoppingBag } from "lucide-react";

const CASE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663334155394/AR88J74jigHbmcaUVraJD8/case-study-bg-QNqhas8dRR4Rtb7X49m5d4.webp";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const cases = [
  {
    icon: Stethoscope,
    industry: "醫療通路業",
    title: "ERP 系統與政府 API 整合",
    challenge: "藥品通路溝通成本高，傳統作業流程繁瑣，難以符合衛生署法規要求。",
    solution: "建置完整 ERP 系統，整合衛生署 API，實現藥品追溯與合規管理自動化。搭配 AI 輔助程式開發，加速客製化功能交付。",
    results: ["縮短藥品通路溝通成本 60%", "成功引進新加坡夥伴入場", "ERP + AI 程式開發效率提升 3 倍"],
    tag: "跨系統整合",
  },
  {
    icon: Factory,
    industry: "科技製造業（致茂電子）",
    title: "IoT 與數據後台整合 — 集團數位轉型",
    challenge: "年營收 280 億以上的集團企業，協助副總推動數位轉型。公司保守文化與三家競爭者的激烈角逐。",
    solution: "整合 IoT 設備、APP 前台與數據管理後台，建立完整的數位轉型辦公室運作機制。以豐富的案例經驗與專業態度勝出。",
    results: ["2024 年 10 月啟動，2025 年 成功上線", "結合 AI + AR 規劃第二階段新市場", "獲得副總級高階主管的全力支持"],
    tag: "大型出海專案",
  },
  {
    icon: Ship,
    industry: "跨國貿易業",
    title: "出海策略與 AI 決策工具導入",
    challenge: "疫情導致貿易中斷，傳統業務開發模式失效，急需找到新的市場突破口。",
    solution: "搭配外貿 AI 系統（整合 1.7 億企業資訊、7 億聯絡人數據），結合策略顧問服務，精準鎖定目標市場。",
    results: ["AI 驅動的精準客戶開發", "加速 TA 市場成效產生", "建立跨國商務合作管道"],
    tag: "AI 外貿出海",
  },
  {
    icon: Building2,
    industry: "威剛生醫子公司",
    title: "全方位 IT 基礎建設與系統導入",
    challenge: "新併購的生醫子公司，需要從零建立完整的 IT 基礎建設與企業管理系統。",
    solution: "一站式規劃 ERP + BPM + HR 系統、硬體整體規劃、防火牆、NAS、伺服器、M365，並完成集團系統移轉與 IT 委外管理。",
    results: ["完成從零到一的 IT 基礎建設", "集團系統順利移轉", "長期 IT 委外管理合作"],
    tag: "一站式服務",
  },
  {
    icon: Wine,
    industry: "企業倉儲業",
    title: "HR 系統與 IT 基礎建設規劃",
    challenge: "主管身兼數職，公司缺乏系統化管理，需要一步一步循序漸進地數位化。",
    solution: "從基礎的 NB + 螢幕配置開始，逐步導入 HR 系統、防火牆 & NAS，並規劃辦公室裝潢，建立信任後持續深化合作。",
    results: ["循序漸進的數位化轉型", "建立長期信任合作關係", "從 IT 延伸至辦公空間規劃"],
    tag: "一站式服務",
  },
  {
    icon: ShoppingBag,
    industry: "服飾業",
    title: "ERP 系統整合 EC + POS + Line",
    challenge: "中小型服飾業者面臨「雞生蛋、蛋生雞」的困境，需要同時解決線上線下整合問題。",
    solution: "開發客製化 ERP 系統，整合電商平台（EC）、門市 POS 系統與 Line 官方帳號，建立全通路管理架構。",
    results: ["線上線下庫存即時同步", "累積攻案默契與合作信任", "規劃高階策略簡報"],
    tag: "整合聯盟夥伴",
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background: `linear-gradient(135deg, oklch(0.1 0.04 250 / 0.92), oklch(0.16 0.04 250 / 0.88)), url(${CASE_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fade} custom={0}>
            <span className="text-[oklch(0.82_0.12_85)] text-sm font-semibold tracking-widest uppercase">Case Studies</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              產業成功案例
            </h1>
            <p className="text-[oklch(0.78_0.02_250)] mt-4 max-w-2xl text-lg">
              跨產業的深度實戰經驗，從醫療通路到科技製造，從本土營運到跨國佈局，每一個案例都是信任的見證。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* Cases */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="space-y-8">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fade}
                className="bg-white rounded-2xl border border-[oklch(0.92_0.01_250)] shadow-sm hover:shadow-lg transition-shadow duration-500 overflow-hidden"
              >
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
                  {/* Left: Info */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.14_200)] to-[oklch(0.55_0.12_200)] flex items-center justify-center text-white">
                        <c.icon size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-[oklch(0.72_0.14_200)] tracking-wider uppercase">{c.industry}</span>
                        <span className="ml-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-[oklch(0.82_0.12_85/0.12)] text-[oklch(0.6_0.1_85)]">
                          {c.tag}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
                      {c.title}
                    </h3>
                  </div>

                  {/* Right: Details */}
                  <div className="p-8 lg:p-10 bg-[oklch(0.97_0.005_250)] border-t lg:border-t-0 lg:border-l border-[oklch(0.92_0.01_250)]">
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-xs font-bold text-[oklch(0.5_0.03_250)] tracking-wider uppercase mb-1">挑戰</h4>
                        <p className="text-sm text-[oklch(0.35_0.03_250)] leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[oklch(0.5_0.03_250)] tracking-wider uppercase mb-1">方案</h4>
                        <p className="text-sm text-[oklch(0.35_0.03_250)] leading-relaxed">{c.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[oklch(0.5_0.03_250)] tracking-wider uppercase mb-2">成果</h4>
                        <div className="space-y-1.5">
                          {c.results.map((r) => (
                            <div key={r} className="flex items-start gap-2 text-sm text-[oklch(0.35_0.03_250)]">
                              <CheckCircle2 size={14} className="text-[oklch(0.72_0.14_200)] mt-0.5 shrink-0" />
                              {r}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.14_0.04_250)] to-[oklch(0.18_0.04_250)]">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
            想成為下一個成功案例嗎？
          </h2>
          <p className="text-[oklch(0.7_0.02_250)] mt-3">讓我們了解您的需求，為您量身打造解決方案。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 mt-6 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.6_0.12_200)] text-white font-semibold shadow-lg shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            聯絡我們 <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
