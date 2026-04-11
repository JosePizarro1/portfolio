export const metadata = {
  title: 'Dashboard | Admin',
}

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Resumen General</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-zinc-400 mb-2">Visitas Hoy</h3>
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-sm text-emerald-500 mt-2">En desarrollo</p>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-zinc-400 mb-2">Mensajes Nuevos</h3>
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-sm text-emerald-500 mt-2">En desarrollo</p>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-zinc-400 mb-2">Proyectos Activos</h3>
          <p className="text-4xl font-bold text-white">8</p>
          <p className="text-sm text-emerald-500 mt-2">Actualizado</p>
        </div>
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">Acciones Rápidas</h2>
        <p className="text-zinc-400 mb-6">
          Bienvenido a tu panel personal. Desde aquí podrás administrar tu portafolio, descargar tu CV y más.
        </p>
        <div className="flex gap-4">
          <a href="/admin/dashboard/cv" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Ver / Descargar Mi CV
          </a>
          <a href="/" className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2 rounded-md font-medium transition-colors border border-zinc-700" target="_blank">
            Ver Portafolio
          </a>
        </div>
      </div>
    </div>
  )
}
