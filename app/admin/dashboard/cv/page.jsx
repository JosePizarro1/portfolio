import CVTemplate from '@/components/CVTemplate'

export const metadata = {
  title: 'Mi CV | Admin Dashboard',
}

export default function CVPage() {
  return (
    <div className="w-full pb-20">
      <CVTemplate />
    </div>
  )
}
