"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";

export const ActiveLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={clsx(
				`text-yellow-500 hover:text-yellow-700`,
				isActive && "underline",
			)}
		>
			{children}
		</Link>
	);
};
