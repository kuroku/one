import supabase from '$lib/db/supabase';
import type { ProductType } from '$lib/interface/product';
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
		.select('*, brand:Brand(*), comments:Comment(*, user:User(*)), category:Category(*, sizes:Size(*))')
		.eq('name', productName)
		.single();
	if (error) {
		throw error;
	}
	return data as ProductType;
}

async function getRatings() {
	const { data, error } = await supabase.from('Rating').select('*');
	if (error) {
		throw error;
	}
	return data;
}
