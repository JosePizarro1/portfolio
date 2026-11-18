import CVTemplate from '@/components/CVTemplate'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'CV - Jose Alfredo Pizarro Rabanal | Software Engineer',
  description: 'Curriculum Vitae en formato Oxford optimizado para ATS de Jose Alfredo Pizarro Rabanal, Software Engineer & FullStack Developer.',
}

export default function CVPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-8 px-4 sm:px-6 print:p-0 print:m-0 print:bg-white">
      <div className="max-w-[800px] mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al Portafolio
        </Link>
        <span className="text-xs text-zinc-500 font-mono">
          Estilo Oxford (ATS Compliant)
        </span>
      </div>

      <CVTemplate />
    </main>
  )
}
