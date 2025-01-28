import Link from "next/link";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && (
						<ProductCoverImage src={product.images[0].url} alt="" />
					)}
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
