import type { Database } from '$lib/db/supabase.d';

export type ProductType = Database['public']['Tables']['Product']['Row'];
