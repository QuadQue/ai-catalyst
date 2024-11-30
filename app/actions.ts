'use server'

import { createUser, getUser } from '@/lib/auth'

export async function login(email: string, password: string) {
  const user = await getUser(email, password)
  if (user) {
    // In a real application, you would set a session or JWT token here
    return { success: true }
  }
  return { error: 'Invalid email or password' }
}

export async function signup(email: string, password: string) {
  try {
    await createUser(email, password)
    // In a real application, you would set a session or JWT token here
    return { success: true }
  } catch (error) {
    return { error: 'Error creating user' }
  }
}

