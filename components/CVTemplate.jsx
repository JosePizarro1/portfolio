'use client'

import { Printer, Globe } from 'lucide-react'
import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function CVTemplate() {
  const { language, toggleLanguage, t } = useLanguage()

  const handlePrint = () => {
    window.print()
  }

  // To ensure the body gets white background when printing to PDF
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @media print {
        @page {
          size: A4 portrait;
          margin: 6mm 8mm;
        }
        body, html {
          background-color: white !important;
          color: black !important;
          margin: 0 !important;
          padding: 0 !important;
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
    <div className="flex flex-col items-center w-full">
      {/* Top action toolbar (hidden on print) */}
      <div className="w-full max-w-[850px] flex justify-between items-center mb-5 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-white">{t('cv.title')}</h2>
          <p className="text-zinc-400 text-xs">{t('cv.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1.5 rounded-md font-medium text-xs transition-colors border border-zinc-700"
            title="Cambiar idioma / Switch language"
          >
            <Globe size={14} />
            {language === 'es' ? 'English' : 'Español'}
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-4 py-1.5 rounded-md font-semibold text-xs transition-colors shadow-sm"
          >
            <Printer size={14} />
            {t('cv.printButton')}
          </button>
        </div>
      </div>

      {/* CV Paper Component - Strict 1-Page Oxford Style */}
      <div
        className="w-full max-w-[850px] bg-white text-black p-8 sm:p-10 shadow-2xl rounded-sm font-serif border border-gray-200 print:border-none print:shadow-none print:p-0 print:m-0 print:min-h-0"
      >
        {/* Header with Photo & Clear Info */}
        <div className="flex items-start justify-between gap-5 mb-2.5 print:mb-2 border-b-2 border-black pb-2.5 print:pb-1.5">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-black leading-tight">
              José Alfredo Pizarro Rabanal
            </h1>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-800 mt-0.5">
              {t('cv.subtitleRole')}
            </p>
            <div className="text-[11px] font-sans text-gray-700 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span>{t('cv.location')}</span>
              <span>•</span>
              <a
                href="mailto:josepizarroarca@gmail.com"
                className="hover:underline text-blue-900 font-medium print:text-black print:no-underline"
              >
                josepizarroarca@gmail.com
              </a>
              <span>•</span>
              <span className="font-medium">+51 945 770 325</span>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/jose-alfredo-pizarro-rabanal-56aaaa189"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-900 font-medium print:text-black print:no-underline"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/JosePizarro1"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-900 font-medium print:text-black print:no-underline"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://portfolio-iota-rosy-30.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-900 font-medium print:text-black print:no-underline"
              >
                Portafolio Web
              </a>
            </div>
          </div>

          {/* Oxford Header Photo */}
          <div className="flex-shrink-0">
            <img
              src="/img/perfil_foto.png"
              alt="José Alfredo Pizarro Rabanal"
              className="w-20 h-24 sm:w-22 sm:h-26 object-cover object-top rounded-sm border border-gray-400 shadow-sm print:w-16 print:h-20"
            />
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-2.5 print:mb-2">
          <h2 className="text-xs font-bold uppercase mb-0.5 border-b-[1px] border-black text-black pb-0.5 tracking-wider">
            {t('cv.sections.summary')}
          </h2>
          <p
            className="text-xs text-justify leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ __html: t('cv.summaryParagraph') }}
          />
        </div>

        {/* Experience */}
        <div className="mb-2.5 print:mb-2">
          <h2 className="text-xs font-bold uppercase mb-1 border-b-[1px] border-black text-black pb-0.5 tracking-wider">
            {t('cv.sections.experience')}
          </h2>

          {(t('cv.experienceList') || []).map((exp, index) => (
            <div key={index} className="mb-2 print:mb-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs sm:text-[13px] font-bold text-black uppercase tracking-wide">
                  {exp.company}
                  <span className="font-normal normal-case text-gray-800 ml-1.5">
                    — {exp.role}
                  </span>
                </h3>
                <span className="text-xs font-serif font-bold text-black tracking-wide">
                  {exp.date}
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-[11px] sm:text-xs mt-0.5 space-y-0.5 text-gray-800 leading-normal">
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
        <div className="mb-2.5 print:mb-2">
          <h2 className="text-xs font-bold uppercase mb-0.5 border-b-[1px] border-black text-black pb-0.5 tracking-wider">
            {t('cv.sections.skills')}
          </h2>
          <div className="text-[11px] sm:text-xs text-gray-800 space-y-0.5 leading-snug">
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.languagesCore')}:
              </span>{' '}
              {t('cv.skillsLabels.languagesCoreVal')}
            </p>
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.back')}:
              </span>{' '}
              {t('cv.skillsLabels.backVal')}
            </p>
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.testing')}:
              </span>{' '}
              {t('cv.skillsLabels.testingVal')}
            </p>
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.front')}:
              </span>{' '}
              {t('cv.skillsLabels.frontVal')}
            </p>
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.infra')}:
              </span>{' '}
              {t('cv.skillsLabels.infraVal')}
            </p>
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.db')}:
              </span>{' '}
              {t('cv.skillsLabels.dbVal')}
            </p>
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.apis')}:
              </span>{' '}
              {t('cv.skillsLabels.apisVal')}
            </p>
            <p>
              <span className="font-bold text-black">
                {t('cv.skillsLabels.languages')}:
              </span>{' '}
              {t('cv.skillsLabels.languagesVal')}
            </p>
          </div>
        </div>

        {/* Education and Certifications */}
        <div>
          <h2 className="text-xs font-bold uppercase mb-0.5 border-b-[1px] border-black text-black pb-0.5 tracking-wider">
            {t('cv.sections.education')}
          </h2>

          <div className="space-y-0.5">
            {(t('cv.educationList') || []).map((edu, index) => (
              <div key={index} className="flex justify-between items-baseline text-[11px] sm:text-xs text-gray-800">
                <span className="font-bold text-black">{edu.school}</span>
                <span className="font-sans text-[11px] text-gray-700 font-medium">{edu.degree}</span>
              </div>
            ))}
          </div>

          <div className="mt-1.5 print:mt-1">
            <h3 className="text-[11px] sm:text-xs font-bold text-black mb-0.5">
              {t('cv.sections.extraCertifications')}:
            </h3>
            <ul className="list-disc list-outside ml-4 text-[11px] sm:text-xs text-gray-800 space-y-0.5">
              {(t('cv.extraBullets') || []).map((bullet, index) => (
                <li key={index}>
                  <span className="text-gray-800">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
