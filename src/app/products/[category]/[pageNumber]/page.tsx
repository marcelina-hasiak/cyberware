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

export default function CategoryProductPage({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<h1>
			Category: {category}, Page: {pageNumber}
		</h1>
	);
}
