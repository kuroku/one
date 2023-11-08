import type { Database } from '$lib/db/supabase.d';

export type BrandType = Database['public']['Tables']['Brand']['Row'];
