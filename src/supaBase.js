import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rygbqrkkcayzmsfnwnrt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Z2JxcmtrY2F5em1zZm53bnJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NDQ2MTYsImV4cCI6MTk5NDAyMDYxNn0.Vdbq1WBD4TZBBmRiifBzjoorQXR9fbSMXWUbgG60E4w";

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;