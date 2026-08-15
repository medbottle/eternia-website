// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	telemetry: false,

	runtimeConfig: {
		public: {
			nodeApiUrl: process.env.NODE_API_URL,
		},
	},

	nitro: {
		preset: 'bun',
	},

	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/sitemap',
	],

	app: {
		head: {
			title: 'Chronicles of Eternia',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content:
						'Meranthe is a role-playing game and immersive sandbox where players build towns, craft items, govern society, and add to an ongoing fantasy story.',
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{ property: 'og:type', content: 'website' },
				{
					property: 'og:image',
					content: '/og.jpg',
				},
				{ name: 'twitter:card', content: 'summary_large_image' },
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: '/icon.png' },
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '192x192',
					href: '/android-chrome-192x192.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '512x512',
					href: '/android-chrome-512x512.png',
				},
			],
		},
	},

	site: {
		name: 'Chronicles of Eternia',
	},

	fonts: {
		defaults: {
			weights: [400, 500, 700],
			styles: ['normal', 'italic'],
		},
	},
})
