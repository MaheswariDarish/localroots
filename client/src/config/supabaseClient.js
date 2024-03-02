import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqvjsgvoveyqwhhnkyye.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdmpzZ3ZvdmV5cXdoaG5reXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNTU3NTQsImV4cCI6MjAyNDYzMTc1NH0.bJv8HCXX0QKDikxE9uff1KWX8q7eFl4O52RSYI3w5jY'
export const supabase = createClient(supabaseUrl, supabaseKey)