import supabase from '$lib/db/supabase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { productName } = params;
	const [product, ratings] = await Promise.all([
		getProductByName(productName),
		getRatings()
	])
	return {
		product,
		ratings
	};
};

async function getProductByName(productName: string) {
	const { data, error } = await supabase
		.from('Product')
		.select('*, brand:Brand(*), comments:Comment(*, user:User(*))')
		.eq('name', productName)
		.single();
	if (error) {
		throw error;
	}
	return data;
}

async function getRatings() {
	const { data, error } = await supabase.from('Rating').select('*');
	if (error) {
		throw error;
	}
	return data;
}
