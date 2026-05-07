import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Ganti teks di dalam tanda kutip ini dengan kunci dari Supabase lu
const supabaseUrl = 'https://erjnzinltevjcfragqds.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyam56aW5sdGV2amNmcmFncWRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjIyMjE4MiwiZXhwIjoyMDkxNzk4MTgyfQ.lPqJKTR94_LSF4Yi8p1DrHZ2uZaV8Svo0mluwIl_SjM'

// Inisialisasi koneksi database
export const supabase = createClient(supabaseUrl, supabaseKey)