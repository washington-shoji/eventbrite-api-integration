/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['localhost:3000', 'img.evbuc.com'],
	},
};
