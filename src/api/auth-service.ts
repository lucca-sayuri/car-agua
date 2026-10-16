import { supabase } from '../lib/supabaseClient.js'

export async function registerUser(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({email, password, options: {data: {name,},},})

  if (error) throw error
  return data
}

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({email, password,})

  if (error) throw error
  return data
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut()

  if (error) throw error
}