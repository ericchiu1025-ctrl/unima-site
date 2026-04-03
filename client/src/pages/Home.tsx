/*
 * Design: Oceanic Blueprint Strategy — Home Page
 * Hero with constellation network background, diagonal sections, wave dividers
 * Stats counter, service overview, case study preview, CTA
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Database,
  Brain,
  Globe,
  Landmark,
  Users,
  Building2,
  Award,
  ChevronRight,
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663334155394/AR88J74jigHbmcaUVraJD8/hero-bg-48G2VkVkVLDEGDCTUhEpqt.webp";
const CASE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663334155394/AR88J74jigHbmcaUVraJD8/case-study-bg-QNqhas8dRR4Rtb7X49m5d4.webp";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const services = [
  {
    icon: Database,
    title: "營運轉型顧問",
    desc: "ERP 進銷存、HR 人資、CRM 客戶關係、BI 數據報表，一站式系統規劃與導入。",
    color: "from-[oklch(0.72_0.14_200)] to-[oklch(0.55_0.12_200)]",
  },
  {
    icon: Brain,
    title: "AI 決策領導",
    desc: "利用生成式 AI 重塑決策節奏，協助企業落實數據導向的智慧決策。",
    color: "from-[oklch(0.82_0.12_85)] to-[oklch(0.7_0.1_85)]",
  },
  {
    icon: Globe,
    title: "企業出海策略",
    desc: "針對貿易業與製造業，提供跨國人脈與市場分析，佈局新加坡、馬來西亞、澳洲等市場。",
    color: "from-[oklch(0.65_0.12_200)] to-[oklch(0.5_0.1_250)]",
  },
  {
    icon: Landmark,
    title: "政府專案對接",
    desc: "協助企業善用政府資源，包含數位轉型補助、AI 課程、標案申請等。",
    color: "from-[oklch(0.6_0.1_170)] to-[oklch(0.45_0.08_200)]",
  },
];

const stats = [
  { value: 300, suffix: "+", label: "企業顧問案例" },
  { value: 100, suffix: "+", label: "跨產業聯盟夥伴" },
  { value: 15, suffix: "年", label: "行業深耕經驗" },
  { value: 5, suffix: "國", label: "跨國服務據點" },
];

const cases = [
  {
    tag: "醫療通路業",
    title: "ERP 系統與政府 API 整合",
    desc: "建置 ERP 並整合衛生署 API，縮短藥品通路溝通成本，成功引進新加坡夥伴入場。",
  },
  {
    tag: "科技製造業",
    title: "IoT 與數據後台整合",
    desc: "針對年營收 20 億以上集團企業，整合 IoT 設備、APP 與數據管理後台，結合 AI+AR 規劃新市場。",
  },
  {
    tag: "跨國貿易業",
    title: "出海策略與市場分析",
    desc: "搭配 AI 決策工具與策略顧問，鎖定 TA 市場加速產生成效，突破疫情貿易中斷困境。",
  },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, oklch(0.1 0.04 250 / 0.92), oklch(0.16 0.04 250 / 0.88)), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(oklch(0.72 0.14 200 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.14 200 / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <div className="container relative z-10 py-32 lg:py-0">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.72_0.14_200/0.3)] bg-[oklch(0.72_0.14_200/0.08)] text-[oklch(0.72_0.14_200)] text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.14_200)] animate-pulse" />
              專屬你的營運 CIO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}
            >
              成為中小企業的
              <span className="block text-[oklch(0.72_0.14_200)]">麥肯錫</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 font-normal text-[oklch(0.82_0.12_85)]">
                協助企業出海
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-[oklch(0.78_0.02_250)] leading-relaxed mb-8 max-w-xl"
            >
              從 ERP 專業顧問起家，演進至生成式 AI 決策領導。
              15 年跨產業經驗，300+ 企業案例，協助企業從「數位化」走向「AI 智慧化」。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.6_0.12_200)] text-white font-semibold shadow-lg shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-xl hover:shadow-[oklch(0.72_0.14_200/0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                探索解決方案
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                預約免費諮詢
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-xs text-[oklch(0.6_0.02_250)]"
            >
              <div className="flex items-center gap-2">
                <Award size={14} className="text-[oklch(0.82_0.12_85)]" />
                經理人月刊報導
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={14} className="text-[oklch(0.82_0.12_85)]" />
                TAITRA 合作實績
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[oklch(0.82_0.12_85)]" />
                BNI 商務聯盟
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 shadow-md shadow-[oklch(0.72_0.14_200/0.06)] border border-[oklch(0.92_0.01_250)] text-center glow-card"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-[oklch(0.5_0.03_250)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)] mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              企業解決方案
            </h2>
            <p className="text-[oklch(0.5_0.03_250)] mt-3 max-w-2xl mx-auto">
              整合 IT 與 OT 資源，提供從營運轉型到 AI 決策的全方位顧問服務
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
              >
                <Link href="/solutions">
                  <div className="group relative bg-white rounded-xl p-7 border border-[oklch(0.92_0.01_250)] hover:border-[oklch(0.72_0.14_200/0.3)] shadow-sm hover:shadow-lg hover:shadow-[oklch(0.72_0.14_200/0.08)] transition-all duration-500 glow-card">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${svc.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                      <svc.icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-[oklch(0.18_0.04_250)] mb-2">{svc.title}</h3>
                    <p className="text-sm text-[oklch(0.5_0.03_250)] leading-relaxed">{svc.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[oklch(0.72_0.14_200)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      了解更多 <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES PREVIEW ===== */}
      <section
        className="relative py-24 lg:py-32 diagonal-top"
        style={{
          background: `linear-gradient(135deg, oklch(0.12 0.04 250 / 0.94), oklch(0.16 0.04 250 / 0.9)), url(${CASE_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="text-[oklch(0.82_0.12_85)] text-sm font-semibold tracking-widest uppercase">Case Studies</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              產業成功案例
            </h2>
            <p className="text-[oklch(0.7_0.02_250)] mt-3 max-w-2xl mx-auto">
              跨產業的深度實戰經驗，從醫療通路到科技製造，從本土營運到跨國佈局
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
              >
                <Link href="/case-studies">
                  <div className="group bg-[oklch(0.18_0.04_250/0.6)] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[oklch(0.72_0.14_200/0.3)] transition-all duration-500 h-full">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[oklch(0.72_0.14_200/0.15)] text-[oklch(0.72_0.14_200)] mb-4">
                      {c.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
                    <p className="text-sm text-[oklch(0.7_0.02_250)] leading-relaxed">{c.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[oklch(0.72_0.14_200)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      閱讀完整案例 <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="text-center mt-10"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[oklch(0.72_0.14_200/0.4)] text-[oklch(0.72_0.14_200)] font-semibold hover:bg-[oklch(0.72_0.14_200/0.1)] transition-all duration-300"
            >
              查看所有案例
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 lg:py-32 diagonal-top bg-[oklch(0.98_0.005_250)]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              準備好讓企業
              <span className="text-[oklch(0.72_0.14_200)]">升級轉型</span>了嗎？
            </h2>
            <p className="text-[oklch(0.5_0.03_250)] mt-4 text-lg leading-relaxed">
              無論您是需要 ERP 系統規劃、AI 決策導入，或是企業出海策略，
              凱渥科技都能為您量身打造最適合的解決方案。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.6_0.12_200)] text-white font-semibold shadow-lg shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                立即預約諮詢
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+886926081981"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[oklch(0.72_0.14_200/0.3)] text-[oklch(0.22_0.05_250)] font-semibold hover:bg-[oklch(0.72_0.14_200/0.05)] transition-all duration-300"
              >
                撥打電話諮詢
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
