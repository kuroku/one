import type { Database } from '$lib/db/supabase.d';

export type CommentType = Database['public']['Tables']['Comment']['Row'];
