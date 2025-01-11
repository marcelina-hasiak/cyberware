import Link from "next/link";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import type { ProductItem } from "@/components/types";

type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
