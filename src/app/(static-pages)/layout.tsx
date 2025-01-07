export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-md text-center mx-auto">{children}</div>
	);
}
