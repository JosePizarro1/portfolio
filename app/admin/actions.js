'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username === 'admin' && password === 'admin') {
    cookies().set('admin_auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: '/',
    })
    return { success: true }
  }
  
  return { success: false, error: 'Credenciales incorrectas' }
}

export async function logoutAction() {
  cookies().delete('admin_auth')
  redirect('/admin')
}
