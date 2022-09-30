import { createClient } from '@supabase/supabase-js';

export const { VITE_PUBLIC_SUPEBASE_URL: supabaseUrl, VITE_PUBLIC_SUPEBASE_ANOM_KEY: supabaseKey } =
	import.meta.env;

export const supabase = createClient(supabaseUrl, supabaseKey);
