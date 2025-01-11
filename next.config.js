/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		logging: {
			level: "verbose",
			fullUrl: true,
		},
		typedRoutes: false,
	},
};

module.exports = nextConfig;
