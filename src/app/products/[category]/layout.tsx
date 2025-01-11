export const generateStaticParams = () => {
	return [
		{
			params: {
				category: "clothing",
			},
		},
		{
			params: {
				category: "shoes",
			},
		},
	];
};

export default function CategoryProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
