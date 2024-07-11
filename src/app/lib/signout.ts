"use client"
import { supabase } from "./supabaseclient"


export default async function signOut() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error.message);
            return false;
        } else {
            console.log("Signed out successfully");
            return true;
        }
    } catch (err) {
        console.error("Unexpected error during sign out:", err);
        return false;
    }
}
  

