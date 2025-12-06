import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cvplpxmqqoopjfozvbsu.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
