import supabase from '$lib/db/supabase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const products = await getProducts();
	return {
		products
	};
};

async function getProducts() {
	const { data, error } = await supabase.from('Product').select('*, brand:Brand(*)');
	if (error) throw new Error(error.message);
	return data;
}
