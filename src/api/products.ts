import { type ProductItem } from "@/components/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async () => {
	const response = await fetch(
		"https://naszsklep-api.vercel.app/api/products",
	);
	const productsResponse =
		(await response.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		getProductFromProductResponse,
	);

	return products;
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);

	const productResponse =
		(await response.json()) as ProductResponseItem;
	const product = getProductFromProductResponse(productResponse);

	return product;
};

const getProductFromProductResponse = (
	product: ProductResponseItem,
): ProductItem => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	};
};
