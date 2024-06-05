import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qialdoqbifdznwohbbea.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYWxkb3FiaWZkem53b2hiYmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Mzk0OTcsImV4cCI6MjAzMzAxNTQ5N30.Lps8UC_5xkGM_y3i5BSXBA0MFeNUD8M_mL8Z5jC9isk'


export const supabase = createClient(supabaseUrl, supabaseKey)

