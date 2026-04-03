/*
 * Design: Oceanic Blueprint Strategy
 * Navigation: Fixed top nav with deep navy background, teal accent links
 * Footer: Deep navy with wave divider, social media links, structured data
 */
import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "公司概況" },
  { href: "/philosophy", label: "經營理念" },
  { href: "/solutions", label: "企業解決方案" },
  { href: "/case-studies", label: "成功案例" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "聯絡我們" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[oklch(0.14_0.04_250/0.95)] backdrop-blur-md shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.14_200)] to-[oklch(0.82_0.12_85)] flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-md">
              U
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold text-sm tracking-wide">凱渥科技</span>
              <span className="text-[oklch(0.72_0.14_200)] text-[10px] tracking-widest uppercase">Unima Inc.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  location === link.href
                    ? "text-[oklch(0.72_0.14_200)] bg-[oklch(0.72_0.14_200/0.1)]"
                    : "text-[oklch(0.85_0.01_250)] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/contact"
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.65_0.12_200)] text-white shadow-md shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-lg hover:shadow-[oklch(0.72_0.14_200/0.4)] transition-all duration-300"
            >
              免費諮詢
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[oklch(0.14_0.04_250/0.98)] backdrop-blur-md border-t border-white/10"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location === link.href
                        ? "text-[oklch(0.72_0.14_200)] bg-[oklch(0.72_0.14_200/0.1)]"
                        : "text-[oklch(0.85_0.01_250)] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/contact"
                  className="mt-2 px-4 py-3 text-sm font-semibold rounded-md bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.65_0.12_200)] text-white text-center"
                >
                  免費諮詢
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[oklch(0.12_0.04_250)] text-[oklch(0.75_0.02_250)] relative">
        {/* Wave SVG Divider */}
        <div className="absolute -top-[59px] left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]">
            <path
              d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
              fill="oklch(0.12 0.04 250)"
            />
          </svg>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.14_200)] to-[oklch(0.82_0.12_85)] flex items-center justify-center text-white font-bold text-sm">
                  U
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">凱渥科技有限公司</div>
                  <div className="text-[oklch(0.72_0.14_200)] text-xs tracking-wider">Unima Inc.</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80 mb-4">
                專屬你的營運 CIO — 從 ERP 專業顧問起家，演進至生成式 AI 決策領導，協助企業從「數位化」走向「AI 智慧化」。
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/eric.chiu.121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.72_0.14_200)] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/eric_chiu_chiu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.72_0.14_200)] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/eric-chiu-50507056/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.72_0.14_200)] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">快速連結</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[oklch(0.72_0.14_200)] transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/compliance"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-[oklch(0.72_0.14_200)] transition-all duration-300"
                >
                  合規性與資訊安全
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">服務項目</h4>
              <div className="flex flex-col gap-2 text-sm opacity-70">
                <span>ERP 進銷存系統規劃</span>
                <span>CRM 客戶關係管理</span>
                <span>HR 人資系統整合</span>
                <span>BI 數據報表分析</span>
                <span>AI 決策領導顧問</span>
                <span>企業出海策略</span>
                <span>政府專案對接</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">聯絡資訊</h4>
              <div className="flex flex-col gap-3 text-sm">
                <a href="mailto:eric@unima.com.tw" className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-[oklch(0.72_0.14_200)] transition-all">
                  <Mail size={14} />
                  eric@unima.com.tw
                </a>
                <a href="tel:+886926081981" className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-[oklch(0.72_0.14_200)] transition-all">
                  <Phone size={14} />
                  +886 926-081-981
                </a>
                <div className="flex items-start gap-2 opacity-70">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <div>
                    <div>台灣台北市</div>
                    <div className="mt-1">新加坡辦公室</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} 凱渥科技有限公司 Unima Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/compliance" className="hover:text-[oklch(0.72_0.14_200)] transition-colors">隱私權政策</Link>
              <Link href="/compliance" className="hover:text-[oklch(0.72_0.14_200)] transition-colors">服務條款</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
