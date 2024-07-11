"use client"
import { supabase } from "./supabaseclient";


export async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
      options: {
        redirectTo: 'https://music-app-react-five.vercel.app/dashboard',
      }
    });


    if (error) {
      console.error('Error signing in with Spotify:', error);
    } else {
      console.log('Sign-in initiated, data:', data);
  }
}
 
