"use client"
import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser"
import { useLanguage } from "@/context/LanguageContext"

export default function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState(null)
  const { t } = useLanguage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatus(null)
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get("name")
    const email = data.get("email")
    const subject = data.get("subject")
    const message = data.get("message")

    try {
      await emailjs.send(
        "service_e2o17jm",
        "template_fkbeswe",
        {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_email: "josepizarroarca@gmail.com",
        },
        "hHHqAdrQm6-99WDyd"
      )
      setStatus({ ok: true })
      form.reset()
    } catch (err) {
      setStatus({ ok: false })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("contact.highlight")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t("contact.infoTitle")}</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("contact.email")}</h4>
                  <a
                    href="mailto:josepizarroarca@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    josepizarroarca@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("contact.phone")}</h4>
                  <a
                    href="tel:+51945770325"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +51 945770325
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("contact.locationLabel")}</h4>
                  <p className="text-gray-400">{t("contact.locationValue")}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">{t("contact.followMe")}</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/JosePizarro1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/jose-alfredo-pizarro-rabanal-56aaaa189/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.formName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={t("contact.placeholderName")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.formEmail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={t("contact.placeholderEmail")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.formSubject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={t("contact.placeholderSubject")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={t("contact.placeholderMessage")}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSending ? t("contact.sending") : t("contact.send")}
                <Send size={16} />
              </button>
              {status && (
                <p className={`text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>
                  {status.ok ? t("contact.success") : t("contact.error")}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

