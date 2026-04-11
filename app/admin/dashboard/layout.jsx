import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { logoutAction } from '../actions'
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react'

export default function DashboardLayout({ children }) {
  const cookieStore = cookies()
  const auth = cookieStore.get('admin_auth')

  if (auth?.value !== 'authenticated') {
    redirect('/admin')
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white print:bg-white print:text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col print:hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            AdminPanel
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/dashboard/cv" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
            <FileText size={20} />
            Mi CV (Oxford)
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white opacity-50 cursor-not-allowed">
            <Settings size={20} />
            Configuración
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <form action={logoutAction}>
            <button type="submit" className="flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-red-500/10 hover:text-red-500 transition-colors text-zinc-400">
              <LogOut size={20} />
              Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto print:overflow-visible">
        <div className="p-8 print:p-0">
          {children}
        </div>
      </main>
    </div>
  )
}
