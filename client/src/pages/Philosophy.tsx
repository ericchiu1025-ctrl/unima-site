/*
 * Design: Oceanic Blueprint — Philosophy Page
 * Vision, values, approach
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Compass, Heart, Globe, Handshake, ArrowRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const values = [
  {
    icon: Heart,
    title: "負責任＆當責",
    desc: "每一個專案都是一份承諾。我們以「生命影響生命」的信念，深耕每一個合作關係，確保客戶的投資獲得最大回報。",
    accent: "oklch(0.72 0.14 200)",
  },
  {
    icon: Compass,
    title: "跨產業經驗深根",
    desc: "15 年橫跨貿易買賣業、製造業、醫療業、科技業的深厚經驗，讓我們能以全局視角為企業提供最適切的建議。",
    accent: "oklch(0.82 0.12 85)",
  },
  {
    icon: Globe,
    title: "Global Partner",
    desc: "從台灣出發，佈局新加坡、香港、馬來西亞、澳洲等國際市場，為企業搭建跨國商務的生意橋樑。",
    accent: "oklch(0.65 0.12 200)",
  },
  {
    icon: Handshake,
    title: "Great Power",
    desc: "一站式服務的強大整合力。透過 100+ 聯盟夥伴的資源網絡，為客戶提供從 IT 到 OT 、AI智慧、ERP等的全方位解決方案。",
    accent: "oklch(0.6 0.1 170)",
  },
];

export default function Philosophy() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[oklch(0.12_0.04_250)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(oklch(0.72 0.14 200 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.14 200 / 0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fade} custom={0}>
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Philosophy</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              經營理念
            </h1>
            <p className="text-[oklch(0.78_0.02_250)] mt-4 max-w-2xl text-lg">
              以「成為中小企業的麥肯錫，協助企業出海」為願景，跟著IT Team Taiwan出海，創造商務的永續價值。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0} className="text-center">
              <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Vision</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)] mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
                我們的願景
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={1}
              className="mt-10 relative"
            >
              <div className="bg-gradient-to-br from-[oklch(0.14_0.04_250)] to-[oklch(0.18_0.04_250)] rounded-2xl p-10 lg:p-14 text-center">
                <div className="absolute inset-0 rounded-2xl opacity-[0.04]" style={{
                  backgroundImage: `radial-gradient(oklch(0.72 0.14 200) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }} />
                <blockquote className="relative z-10">
                  <p className="text-2xl lg:text-3xl font-bold text-white leading-relaxed" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
                    「成為中小企業的<span className="text-[oklch(0.72_0.14_200)]">麥肯錫</span>，
                    <br className="hidden sm:block" />
                    協助企業<span className="text-[oklch(0.82_0.12_85)]" style={{color: '#b47391'}}>出海</span>」
                  </p>
                  <p className="text-[oklch(0.7_0.02_250)] mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
                    我們相信，每一家中小企業都值得，擁有優質的策略顧問服務。
                    凱渥科技以麥肯錫等級的專業標準，為中小企業提供可負擔、可落地的數位轉型方案，
                    並協助有野心的企業走向國際舞台。
                  </p>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[oklch(0.96_0.005_250)]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0} className="text-center mb-14">
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Core Values</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)] mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              核心價值觀
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="bg-white rounded-xl p-7 border border-[oklch(0.92_0.01_250)] shadow-sm hover:shadow-md transition-all duration-300 glow-card"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ background: `linear-gradient(135deg, ${v.accent}, ${v.accent}80)` }}
                >
                  <v.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[oklch(0.18_0.04_250)] mb-2">{v.title}</h3>
                <p className="text-sm text-[oklch(0.5_0.03_250)] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0} className="text-center mb-14">
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Our Approach</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)] mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              我們的方法論
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "深度診斷", desc: "透過面對面訪談與現場勘查，全面了解企業的痛點、流程瓶頸與成長目標。" },
                { step: "02", title: "策略規劃", desc: "結合跨產業經驗與聯盟夥伴資源，量身打造最適合的數位轉型路徑圖。" },
                { step: "03", title: "落地執行", desc: "從系統導入、人員培訓到持續優化，全程陪伴企業完成轉型旅程。" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-[oklch(0.72_0.14_200/0.15)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[oklch(0.18_0.04_250)] mt-2">{item.title}</h3>
                  <p className="text-sm text-[oklch(0.5_0.03_250)] mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.96_0.005_250)]">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
            認同我們的理念？
          </h2>
          <p className="text-[oklch(0.5_0.03_250)] mt-3">讓我們一起為您的企業開創新局。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 mt-6 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.6_0.12_200)] text-white font-semibold shadow-lg shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            開始合作 <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
