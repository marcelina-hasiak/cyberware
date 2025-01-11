import { Suspense } from "react";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductsRecommendation } from "@/components/organisms/ProductsRecommendation";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products
		.map((product) => ({
			params: { productId: product.id },
		}))
		.slice(0, 2);
};

export default async function SinglePageProduct({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={<div>Loading...</div>}>
					<ProductsRecommendation />
				</Suspense>
			</aside>
		</>
	);
}
