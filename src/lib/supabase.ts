import { createClient } from '@supabase/supabase-js';

// Mengambil variabel environment dari .env
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL atau Key hilang di file .env!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);