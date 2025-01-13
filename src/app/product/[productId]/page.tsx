import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductsRecommendation } from "@/components/organisms/ProductsRecommendation";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - E-commerce`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name} - E-commerce`,
			description: `${product.description}`,
			images: [{ url: product.coverImage.src }],
		},
	};
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
