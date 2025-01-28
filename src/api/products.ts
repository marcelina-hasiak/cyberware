import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphQLQuery } from "@/lib/graphql";

export const getProductsList = async () => {
	const graphQLResponse = await executeGraphQLQuery(
		ProductsGetListDocument,
		{},
	);

	return graphQLResponse.products;
};

export const getProductById = async (id: string) => {
	const graphQLResponse = await executeGraphQLQuery(
		ProductGetByIdDocument,
		{ id: id },
	);

	return graphQLResponse.product;
};

export const getProductsByCategorySlug = async (category: string) => {
	const graphQLResponse = await executeGraphQLQuery(
		ProductsGetByCategorySlugDocument,
		{ slug: category },
	);

	return graphQLResponse.categories[0]?.products;
};
