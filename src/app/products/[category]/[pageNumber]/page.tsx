import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export const generateStaticParams = async ({
	params,
}: {
	params: { category: string };
}) => {
	if (params.category === "clothing") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	}
};

export default async function CategoryProductPage({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(category);

	if (!products) {
		return notFound;
	}
	return (
		<>
			<h1>
				Category: {category}, Page: {pageNumber}
			</h1>
			<ProductList products={products} />
		</>
	);
}
