"use client"
import { supabase } from "./supabaseClient";
import { useRouter } from 'next/router';


export async function signInWithSpotify() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'spotify',
    options: {
        redirectTo: `http://localhost:3000/dashboard`,
        scopes: 'user-read-email user-read-private streaming'
      },
  })
}

export async function signOut() {
    const { error } = await supabase.auth.signOut()
   
  }
  