import { getProductsList } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export const ProductsRecommendation = async () => {
	const products = await getProductsList();

	return <ProductList products={products.slice(-4)} />;
};
