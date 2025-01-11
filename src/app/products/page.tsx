import { getProductsList } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export default async function ProductPage() {
	const products = await getProductsList();

	return <ProductList products={products} />;
}
