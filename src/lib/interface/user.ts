import type { Database } from '$lib/db/supabase.d';

export type UserType = Database['public']['Tables']['User']['Row'];
