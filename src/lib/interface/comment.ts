import type { Database } from '$lib/db/supabase.d';
import type { UserType } from './user';

export type CommentType = Database['public']['Tables']['Comment']['Row'] & {
  user: UserType
};
