import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase.d';

const { VITE_SUPEBASE_URL, VITE_SUPEBASE_KEY } = import.meta.env;

const supabase = createClient<Database>(VITE_SUPEBASE_URL as string, VITE_SUPEBASE_KEY as string);

export default supabase;
