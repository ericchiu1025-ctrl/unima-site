/*
 * Design: Oceanic Blueprint — About Us Page
 * Company overview, team resources, founding spirit, alliance network
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Target, Lightbulb, Shield, ArrowRight, Award, Building2 } from "lucide-react";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663334155394/AR88J74jigHbmcaUVraJD8/about-team-AU69KXvU7yGpdVaF5McvKR.webp";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const milestones = [
  { year: "2010", title: "ERP 顧問起步", desc: "以鼎新 ERP 專業顧問身份踏入企業數位化領域" },
  { year: "2015", title: "跨產業整合", desc: "累積買賣、製造、醫療等多產業顧問經驗，建立聯盟夥伴網絡" },
  { year: "2019", title: "凱渥科技成立", desc: "正式成立凱渥科技有限公司，提供一站式企業解決方案" },
  { year: "2022", title: "出海策略啟動", desc: "佈局新加坡、馬來西亞等東南亞市場，協助企業跨國發展" },
  { year: "2024", title: "AI 決策領導", desc: "導入生成式 AI 決策工具，協助企業從數位化走向 AI 智慧化" },
  { year: "2026", title: "Global Partner", desc: "累積 300+ 企業案例、100+ 聯盟夥伴，持續擴展全球版圖" },
];

const strengths = [
  { icon: Users, title: "100+ 聯盟夥伴", desc: "跨產業的專業聯盟網絡，涵蓋 AI、企業軟體、工廠數位轉型、IT&OT 整合、企業行銷等領域。" },
  { icon: Target, title: "300+ 企業案例", desc: "累積豐富的實戰經驗，從 30 人中小企業到年營收 50 億的集團企業，皆有成功導入紀錄。" },
  { icon: Lightbulb, title: "一站式服務", desc: "從需求評估、方案規劃、系統導入到後續維運，提供完整的企業數位轉型旅程。" },
  { icon: Shield, title: "負責任的承諾", desc: "以「生命影響生命」為座右銘，深耕每一個專案，建立長期信任關係。" },
];

export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background: `linear-gradient(135deg, oklch(0.1 0.04 250 / 0.93), oklch(0.16 0.04 250 / 0.88)), url(${TEAM_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fade} custom={0}>
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              公司概況
            </h1>
            <p className="text-[oklch(0.78_0.02_250)] mt-4 max-w-2xl text-lg leading-relaxed">
              專屬你的營運 CIO — 凱渥科技從 ERP 專業顧問起家，演進至生成式 AI 決策領導，
              協助企業從「數位化」走向「AI 智慧化」。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* Founding Spirit */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}>
              <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)] mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
                創始精神
              </h2>
              <p className="text-[oklch(0.4_0.03_250)] mt-4 leading-relaxed text-lg">
                凱渥科技的創辦人 Eric Chiu 擁有超過 15 年的企業營運與 ERP 整合經驗。從鼎新 ERP 專業顧問起步，
                一路深耕買賣業、製造業、醫療業等多元產業，累積了 300 多個企業顧問案例。
              </p>
              <p className="text-[oklch(0.4_0.03_250)] mt-4 leading-relaxed">
                秉持「生命影響生命」的信念，Eric 不僅是企業的技術顧問，更是企業主的策略夥伴。
                透過各大 EMBA、創業社群與中小企業總會的深厚人脈，凱渥科技建立了一個超過 100 位跨產業聯盟夥伴的強大網絡，
                為每一位客戶提供最適切的解決方案。
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-[oklch(0.5_0.03_250)]">
                  <Award size={16} className="text-[oklch(0.82_0.12_85)]" />
                  經理人月刊報導
                </div>
                <div className="flex items-center gap-2 text-sm text-[oklch(0.5_0.03_250)]">
                  <Building2 size={16} className="text-[oklch(0.82_0.12_85)]" />
                  TAITRA 合作實績
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
              <div className="relative pl-8 border-l-2 border-[oklch(0.72_0.14_200/0.2)]">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    custom={i + 2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fade}
                    className="relative mb-8 last:mb-0"
                  >
                    <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-[oklch(0.72_0.14_200)] border-2 border-white shadow" />
                    <span className="text-xs font-bold text-[oklch(0.72_0.14_200)] tracking-wider">{m.year}</span>
                    <h4 className="text-base font-bold text-[oklch(0.18_0.04_250)] mt-0.5">{m.title}</h4>
                    <p className="text-sm text-[oklch(0.5_0.03_250)] mt-1">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 lg:py-28 bg-[oklch(0.96_0.005_250)]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0} className="text-center mb-14">
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Our Strengths</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)] mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              核心優勢
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="bg-white rounded-xl p-7 border border-[oklch(0.92_0.01_250)] shadow-sm hover:shadow-md transition-shadow duration-300 glow-card"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.14_200)] to-[oklch(0.55_0.12_200)] flex items-center justify-center text-white mb-4">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[oklch(0.18_0.04_250)] mb-2">{s.title}</h3>
                <p className="text-sm text-[oklch(0.5_0.03_250)] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.98_0.005_250)]">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
            想了解更多？
          </h2>
          <p className="text-[oklch(0.5_0.03_250)] mt-3">與我們的顧問團隊聊聊，了解凱渥科技如何為您的企業創造價值。</p>
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
