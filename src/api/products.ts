import { type ProductItem } from "@/components/types";
import {
	ProductsGetListDocument,
	type TypedDocumentString,
} from "@/gql/graphql";

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
};

const executeGraphQLQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
) => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: { "Content-Type": "application/json" },
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphQLResponse =
		(await response.json()) as GraphQLResponse<TResult>;

	if (graphQLResponse.errors) {
		throw new Error("GraphQL Error", {
			cause: graphQLResponse.errors,
		});
	}

	return graphQLResponse.data;
};

export const getProductsList = async (): Promise<ProductItem[]> => {
	const graphQLResponse = await executeGraphQLQuery(
		ProductsGetListDocument,
		{},
	);

	return graphQLResponse.products.map((product) => ({
		id: product.id,
		name: product.name,
		price: product.price,
		category: product.categories[0].name,
		description: product.description,
		coverImage: {
			src: product.images[0].url,
			alt: product.name,
		},
	}));
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
		description: product.description,
	};
};
