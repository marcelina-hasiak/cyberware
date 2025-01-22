import type { TypedDocumentString } from "@/gql/graphql";

export const executeGraphQLQuery = async <TResult, TVariables>(
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
