import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductsRecommendation } from "@/components/organisms/ProductsRecommendation";

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
