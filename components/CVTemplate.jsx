'use client'

import { Printer } from 'lucide-react'
import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function CVTemplate() {
  const { t } = useLanguage()

  const handlePrint = () => {
    window.print()
  }

  // To ensure the body gets white background when printing to PDF
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @media print {
        body, html {
          background-color: white !important;
          color: black !important;
        }
        * {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[800px] flex justify-between items-center mb-6 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-white">{t('cv.title')}</h2>
          <p className="text-zinc-400 text-sm">{t('cv.subtitle')}</p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-4 py-2 rounded-md font-semibold transition-colors"
        >
          <Printer size={18} />
          {t('cv.printButton')}
        </button>
      </div>

      {/* CV Paper Component */}
      <div
        className="w-full max-w-[800px] bg-white text-black p-10 md:p-14 shadow-2xl rounded-sm font-serif"
        style={{ minHeight: '1056px' /* Standard Letter height roughly */ }}
      >

        {/* Header */}
        <div className="text-center mb-6 border-b-[1.5px] border-black pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase mb-2 tracking-wide text-black">Jose Pizarro</h1>
          <p className="text-sm font-sans tracking-wide text-gray-800 flex justify-center items-center gap-2 flex-wrap">
            <span>{t('cv.location')}</span> |
            <a href="mailto:josepizarroarca@gmail.com" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">josepizarroarca@gmail.com</a> |
            <a href="https://www.linkedin.com/in/jose-alfredo-pizarro-rabanal-56aaaa189" target="_blank" rel="noreferrer" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">LinkedIn</a> |
            <a href="https://github.com/JosePizarro1" target="_blank" rel="noreferrer" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">github.com/JosePizarro1</a> |
            <a href="https://portfolio-iota-rosy-30.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">Portafolio Web</a>
          </p>
          <p className="text-sm font-bold uppercase mt-1 tracking-wider text-black">
            {t('cv.subtitleRole')}
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">{t('cv.sections.summary')}</h2>
          <p 
            className="text-sm text-justify leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ __html: t('cv.summaryParagraph') }}
          />
        </div>

        {/* Experience / Projects */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">{t('cv.sections.experience')}</h2>

          {(t('cv.experienceList') || []).map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-bold text-black">
                  {exp.company} - <span className="font-normal text-sm">{exp.role}</span>
                </h3>
                <span className="text-xs font-sans text-gray-600">{exp.date}</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-sm mt-1 space-y-1 text-gray-800">
                {(exp.bullets || []).map((bullet, bulletIdx) => (
                  <li 
                    key={bulletIdx} 
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">{t('cv.sections.skills')}</h2>
          <div className="text-sm text-gray-800 space-y-1">
            <p><span className="font-bold text-black">{t('cv.skillsLabels.languagesCore')}:</span> JavaScript, TypeScript, Python, HTML5, CSS3, SQL.</p>
            <p><span className="font-bold text-black">{t('cv.skillsLabels.front')}:</span> React, Next.js, Tailwind CSS, Bootstrap, Vercel, Framer Motion, Flutter.</p>
            <p><span className="font-bold text-black">{t('cv.skillsLabels.back')}:</span> Django, FastAPI, Flask, RESTful Architectures & Microservices.</p>
            <p><span className="font-bold text-black">{t('cv.skillsLabels.db')}:</span> PostgreSQL, MySQL, SQLite3.</p>
            <p><span className="font-bold text-black">{t('cv.skillsLabels.infra')}:</span> Docker, Azure DevOps, Google Cloud Platform (GCP), AI Integration (LangGraph, RAG, Embeddings, LLMs), Azure OCR, WebSockets, Webhooks.</p>
            <p><span className="font-bold text-black">{t('cv.skillsLabels.apis')}:</span> Salesforce CRM (Salesforce Shield, Event Monitoring, Custom Apex), integrations with Slack, WhatsApp Cloud API (Meta API), Google Apps Script, Looker Studio, Git, GitHub, Power BI, Figma.</p>
            <p><span className="font-bold text-black">{t('cv.skillsLabels.languages')}:</span> {t('cv.skillsLabels.languagesVal')}</p>
          </div>
        </div>

        {/* Education and Certifications */}
        <div>
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">{t('cv.sections.education')}</h2>

          {(t('cv.educationList') || []).map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex flex-col text-sm text-gray-800">
                <h3 className="font-bold text-black text-md">{edu.school}</h3>
                <span>{edu.degree}</span>
              </div>
            </div>
          ))}

          <div className="mb-1 mt-4">
            <h3 className="text-sm font-bold text-black mb-1">{t('cv.sections.extraCertifications')}</h3>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-800 space-y-1">
              {(t('cv.extraBullets') || []).map((bullet, index) => (
                <li key={index}><span className="font-semibold text-black">{bullet}</span></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
