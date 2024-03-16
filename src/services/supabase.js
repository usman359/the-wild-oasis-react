import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qqohcvbcukneanfwdovl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxb2hjdmJjdWtuZWFuZndkb3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NTMxODgsImV4cCI6MjAyMjAyOTE4OH0.7mxsLgpry0UK0Dn_cEi4M-Xu_uVzLmi8WJllm_fUeBA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
