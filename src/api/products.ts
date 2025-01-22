import { type ProductItem } from "@/components/types";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphQLQuery } from "@/lib/graphql";

export const getProductsList = async (): Promise<ProductItem[]> => {
	const graphQLResponse = await executeGraphQLQuery(
		ProductsGetListDocument,
		{},
	);

	return graphQLResponse.products.map((product) => ({
		id: product.id,
		name: product.name,
		price: product.price,
		category: product.categories[0]?.name || "",
		description: product.description,
		coverImage: product.images[0] && {
			src: product.images[0].url,
			alt: product.name,
		},
	}));
};

export const getProductById = async (id: string) => {
	const graphQLResponse = await executeGraphQLQuery(
		ProductGetByIdDocument,
		{ id: id },
	);

	return (
		graphQLResponse.product && {
			id: graphQLResponse.product.id,
			name: graphQLResponse.product.name,
			price: graphQLResponse.product.price,
			category: graphQLResponse.product.categories[0]?.name || "",
			description: graphQLResponse.product.description,
			coverImage: graphQLResponse.product.images[0] && {
				src: graphQLResponse.product.images[0].url,
				alt: graphQLResponse.product.name,
			},
		}
	);
};

export const getProductsByCategorySlug = async (category: string) => {
	const graphQLResponse = await executeGraphQLQuery(
		ProductsGetByCategorySlugDocument,
		{ slug: category },
	);

	const products = graphQLResponse.categories[0]?.products;

	return products?.map((product) => ({
		id: product.id,
		name: product.name,
		price: product.price,
		category: product.categories[0]?.name || "",
		description: product.description,
		coverImage: product.images[0] && {
			src: product.images[0].url,
			alt: product.name,
		},
	}));
};
