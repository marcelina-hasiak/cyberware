import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
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

	return product
		? {
				title: `${product.name} - E-commerce`,
				description: `${product.description}`,
				openGraph: {
					title: `${product.name} - E-commerce`,
					description: `${product.description}`,
					images: [{ url: product.images[0]?.url || "" }],
				},
			}
		: { title: "Product not found - E-commerce" };
};

export default async function SinglePageProduct({
	params,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		return notFound();
	}

	return (
		<>
			<article className="max-w-xs">
				{product.images[0] && (
					<ProductCoverImage src={product.images[0].url} alt="" />
				)}
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
