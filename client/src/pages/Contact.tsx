/*
 * Design: Oceanic Blueprint — Contact Page
 * Contact form, Google Maps embed, structured data for GEO SEO
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const contactInfo = [
  { icon: Mail, label: "電子郵件", value: "eric@unima.com.tw", href: "mailto:eric@unima.com.tw" },
  { icon: Phone, label: "聯絡電話", value: "+886 926-081-981", href: "tel:+886926081981" },
  { icon: MapPin, label: "台灣辦公室", value: "台北市", href: undefined },
  { icon: MapPin, label: "新加坡辦公室", value: "Singapore", href: undefined },
  { icon: Clock, label: "服務時間", value: "週一至週五 09:00 - 18:00", href: undefined },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/eric.chiu.121" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/eric_chiu_chiu/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/eric-chiu-50507056/" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    setSubmitted(true);
    toast.success("感謝您的來信！我們將在 24 小時內回覆您。");
  };

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
            <span className="text-[oklch(0.72_0.14_200)] text-sm font-semibold tracking-widest uppercase">Contact Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              聯絡我們
            </h1>
            <p className="text-[oklch(0.78_0.02_250)] mt-4 max-w-2xl text-lg">
              無論您有任何企業數位轉型的需求，歡迎與我們聯繫。我們的顧問團隊將在 24 小時內回覆。
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.98_0.005_250)] to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            {/* Left: Contact Info */}
            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0}>
                <h2 className="text-2xl font-bold text-[oklch(0.18_0.04_250)] mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
                  聯絡窗口
                </h2>
                <div className="bg-[oklch(0.96_0.005_250)] rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[oklch(0.72_0.14_200)] to-[oklch(0.82_0.12_85)] flex items-center justify-center text-white font-bold text-xl">
                      E
                    </div>
                    <div>
                      <h3 className="font-bold text-[oklch(0.18_0.04_250)] text-lg">Eric Chiu</h3>
                      <p className="text-sm text-[oklch(0.5_0.03_250)]">執行長</p>
                    </div>
                  </div>
                  <p className="text-sm text-[oklch(0.4_0.03_250)] leading-relaxed">
                    15 年企業營運與 ERP 整合經驗，累積 300+ 企業顧問案例。
                    專注於協助中小企業數位轉型與 AI 智慧化升級。
                  </p>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[oklch(0.72_0.14_200/0.1)] flex items-center justify-center text-[oklch(0.72_0.14_200)] shrink-0">
                        <info.icon size={16} />
                      </div>
                      <div>
                        <span className="text-xs text-[oklch(0.5_0.03_250)] font-medium">{info.label}</span>
                        {info.href ? (
                          <a href={info.href} className="block text-sm font-medium text-[oklch(0.18_0.04_250)] hover:text-[oklch(0.72_0.14_200)] transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <span className="block text-sm font-medium text-[oklch(0.18_0.04_250)]">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={2} className="mt-8">
                <h3 className="text-sm font-bold text-[oklch(0.5_0.03_250)] tracking-wider uppercase mb-3">社群媒體</h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[oklch(0.72_0.14_200/0.1)] flex items-center justify-center text-[oklch(0.72_0.14_200)] hover:bg-[oklch(0.72_0.14_200)] hover:text-white transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={1}>
              {submitted ? (
                <div className="bg-white rounded-xl border border-[oklch(0.92_0.01_250)] shadow-sm p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.72_0.14_200/0.1)] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-[oklch(0.72_0.14_200)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[oklch(0.18_0.04_250)]">感謝您的來信！</h3>
                  <p className="text-[oklch(0.5_0.03_250)] mt-2">我們的顧問團隊將在 24 小時內回覆您。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[oklch(0.92_0.01_250)] shadow-sm p-8">
                  <h2 className="text-xl font-bold text-[oklch(0.18_0.04_250)] mb-6" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
                    預約免費諮詢
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.5_0.03_250)] mb-1.5">姓名 *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.9_0.01_250)] bg-[oklch(0.98_0.005_250)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.14_200/0.3)] focus:border-[oklch(0.72_0.14_200)]"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.5_0.03_250)] mb-1.5">公司名稱 *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.9_0.01_250)] bg-[oklch(0.98_0.005_250)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.14_200/0.3)] focus:border-[oklch(0.72_0.14_200)]"
                        placeholder="公司名稱"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.5_0.03_250)] mb-1.5">電子郵件 *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.9_0.01_250)] bg-[oklch(0.98_0.005_250)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.14_200/0.3)] focus:border-[oklch(0.72_0.14_200)]"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.5_0.03_250)] mb-1.5">聯絡電話</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.9_0.01_250)] bg-[oklch(0.98_0.005_250)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.14_200/0.3)] focus:border-[oklch(0.72_0.14_200)]"
                        placeholder="09xx-xxx-xxx"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-[oklch(0.5_0.03_250)] mb-1.5">需求類型</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.9_0.01_250)] bg-[oklch(0.98_0.005_250)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.14_200/0.3)] focus:border-[oklch(0.72_0.14_200)]"
                    >
                      <option value="">請選擇需求類型</option>
                      <option value="erp">ERP 進銷存系統規劃</option>
                      <option value="crm">CRM 客戶關係管理</option>
                      <option value="hr">HR 人資系統整合</option>
                      <option value="bi">BI 數據報表分析</option>
                      <option value="ai">AI 決策領導顧問</option>
                      <option value="global">企業出海策略</option>
                      <option value="gov">政府專案對接</option>
                      <option value="other">其他需求</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-medium text-[oklch(0.5_0.03_250)] mb-1.5">需求描述</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.9_0.01_250)] bg-[oklch(0.98_0.005_250)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.14_200/0.3)] focus:border-[oklch(0.72_0.14_200)] resize-none"
                      placeholder="請簡述您的需求，我們將盡快與您聯繫..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[oklch(0.72_0.14_200)] to-[oklch(0.6_0.12_200)] text-white font-semibold shadow-lg shadow-[oklch(0.72_0.14_200/0.3)] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send size={16} />
                    送出諮詢需求
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} custom={0} className="mb-8">
            <h2 className="text-2xl font-bold text-[oklch(0.18_0.04_250)]" style={{ fontFamily: "'Playfair Display', 'Noto Serif TC', serif" }}>
              服務據點
            </h2>
            <p className="text-[oklch(0.5_0.03_250)] mt-2">凱渥科技在台灣與新加坡皆設有服務據點，為您提供在地化的顧問服務。</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-[oklch(0.92_0.01_250)] shadow-sm h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7!2d121.5!3d25.033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9!2sTaipei!5e0!3m2!1szh-TW!2stw!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="台灣辦公室"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[oklch(0.92_0.01_250)] shadow-sm h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.85!3d1.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19!2sSingapore!5e0!3m2!1sen!2ssg!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="新加坡辦公室"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
