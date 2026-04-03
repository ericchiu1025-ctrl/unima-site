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
