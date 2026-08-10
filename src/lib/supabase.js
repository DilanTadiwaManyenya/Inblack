import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const hasPlaceholderValue = (value) =>
  !value || value.includes("YOUR_") || value.includes("your-project");

// Avoid treating the checked-in example values as a working configuration.
export const isSupabaseConfigured = Boolean(
  !hasPlaceholderValue(supabaseUrl) && !hasPlaceholderValue(supabaseAnonKey),
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
