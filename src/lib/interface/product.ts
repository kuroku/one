import type { Database } from '$lib/db/supabase.d';
import type { BrandType } from './brand';
import type { CategoryType } from './category';
import type { CommentType } from './comment';

export type ProductType = Database['public']['Tables']['Product']['Row'] & {
  brand: BrandType;
  category: CategoryType;
  comments: CommentType[];
};
