import { ProductList } from "@/components/organisms/ProductList";
import { type ProductItem } from "@/components/types";

const products: ProductItem[] = [
	{
		id: "1",
		name: "Gorilla Hands",
		category: "Combat",
		price: 3099,
		coverImage: {
			src: "/gorilla-hands.webp",
			alt: "Gorilla Hands",
		},
	},
	{
		id: "2",
		name: "Mantis Blades",
		category: "Combat",
		price: 12499,
		coverImage: {
			src: "/mantis-blades.webp",
			alt: "Mantis Blades",
		},
	},
	{
		id: "3",
		name: "Monostring",
		category: "Combat",
		price: 9999,
		coverImage: {
			src: "/monostring.webp",
			alt: "Monostring",
		},
	},
	{
		id: "4",
		name: "Smartlink",
		category: "Combat",
		price: 38900,
		coverImage: {
			src: "/smartlink.webp",
			alt: "Smartlink",
		},
	},
];

export default function Home() {
	return <ProductList products={products} />;
}
