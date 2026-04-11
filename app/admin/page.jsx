import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LoginForm from './LoginForm'

export const metadata = {
  title: 'Admin Login | Portafolio',
}

export default function AdminPage() {
  const cookieStore = cookies()
  const auth = cookieStore.get('admin_auth')

  if (auth?.value === 'authenticated') {
    redirect('/admin/dashboard')
  }

  return <LoginForm />
}
