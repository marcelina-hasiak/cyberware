import { ProductListItem } from "@/components/molecules/ProductListItem";
import type { ProductItem } from "@/components/types";

export const ProductList = ({
	products,
}: {
	products: ProductItem[];
}) => {
	return (
		<ul className="my-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => {
				return <ProductListItem product={product} key={product.id} />;
			})}
		</ul>
	);
};
