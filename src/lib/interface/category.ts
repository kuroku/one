import type { Database } from "$lib/db/supabase.d";
import type { SizeType } from "./size";

export type CategoryType = Database['public']['Tables']['Category']['Row'] & {
  sizes: SizeType[]
};