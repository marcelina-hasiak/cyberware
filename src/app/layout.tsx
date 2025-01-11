import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="bg-gray-800 text-white flex justify-center gap-4 p-4">
					<ActiveLink href="/">Homepage</ActiveLink>
					<ActiveLink href="/products">Products</ActiveLink>
				</nav>
				<section className="mx-auto max-w-2xl px-8 py-12 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-gray-500">
						© {new Date().getFullYear()} Cyberware
					</p>
				</footer>
			</body>
		</html>
	);
}
