/*
 * Design: Oceanic Blueprint — Compliance Page
 * Information security and compliance for B2B/B2G trust
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Lock, FileCheck, Eye, Server, ArrowRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const sections = [
  {
    icon: Shield,
    title: "資訊安全管理",
    items: [
      "遵循 ISO 27001 資訊安全管理系統標準",
      "定期進行資安風險評估與弱點掃描",
      "建立完整的資安事件應變機制",
      "合作夥伴均通過資安能力評估",
    ],
  },
  {
    icon: Lock,
    title: "個人資料保護",
    items: [
      "嚴格遵守台灣《個人資料保護法》",
      "符合 GDPR 歐盟一般資料保護規範精神",
      "實施資料最小化原則，僅收集必要資訊",
      "提供資料主體行使權利的便捷管道",
    ],
  },
  {
    icon: FileCheck,
    title: "合規性承諾",
    items: [
      "符合政府採購法相關規範",
      "具備政府標案投標資格",
      "定期更新營業登記與相關證照",
      "配合主管機關稽核與查核作業",
    ],
  },
  {
    icon: Eye,
    title: "隱私權政策",
    items: [
      "明確告知資料收集目的與使用範圍",
      "不會將客戶資料轉售予第三方",
      "提供客戶查詢、更正、刪除個資的權利",
      "使用加密技術保護資料傳輸安全",
    ],
  },
  {
    icon: Server,
    title: "系統安全",
    items: [
      "採用企業級防火牆與入侵偵測系統",
      "定期進行系統備份與災難復原演練",
      "實施多因素身份驗證機制",
      "所有系統均部署 SSL/TLS 加密傳輸",
    ],
  },
];

export default function Compliance() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[oklch(0.12_0.04_250)]">
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fade} custom={0}>
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Compliance & Security</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              合規性與資訊安全
            </h1>
            <p className="text-[oklch(0.78_0.02_250)] mt-4 max-w-2xl text-lg">
              凱渥科技重視每一位客戶的資訊安全與隱私保護，嚴格遵守相關法規與國際標準。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="bg-white rounded-xl border border-[oklch(0.92_0.01_250)] shadow-sm p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.14_200)] to-[oklch(0.55_0.12_200)] flex items-center justify-center text-white">
                    <section.icon size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-[oklch(0.18_0.04_250)]">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[oklch(0.4_0.03_250)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.14_200)] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.96_0.005_250)]">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
            有任何合規性相關問題？
          </h2>
          <p className="text-[oklch(0.5_0.03_250)] mt-3">歡迎與我們的團隊聯繫，我們將提供詳細的說明。</p>
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
