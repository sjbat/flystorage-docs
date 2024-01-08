import {type AstroUserConfig, defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

let envConfig: Partial<AstroUserConfig> = {};

if (process.env.BUILD_TARGET === 'github-pages') {
	envConfig.site = 'https://flystorage.dev';
}

// https://astro.build/config
export default defineConfig({
	...envConfig,
	integrations: [
		starlight({
			favicon: 'favicon.svg',
			logo: {
				light: './src/assets/flystorage.svg',
				dark: './src/assets/flystorage-dark.svg',
			},
			title: 'Projekt',
			components: {
				Pagination: './src/components/Pagination.astro',
			},
			social: {
				mastodon: 'https://pol.social/@sebastian',
				github: 'https://github.com/sjbat/flystorage',
			},
			sidebar: [
				{
					label: 'Getting Started',
					collapsed: false,
					items: [
						{ label: 'Setup', link: '/setup/' },
						{ label: 'FileStorage API', link: '/api/' },
						{ label: 'Architecture', link: '/architecture/' },
						{ label: 'Visibility', link: '/visibility/' },
						{ label: 'Custom Adapter', link: '/custom-adapter/' },
					],
				},
				{
					label: 'Adapters',
					collapsed: false,
					autogenerate: { directory: 'adapter' },
				},
				{
					label: 'Tools',
					collapsed: false,
					autogenerate: { directory: 'tools' },
				},
				{
					label: 'Blog',
					collapsed: false,
					autogenerate: { directory: 'blog' },
				},
				
			],
			customCss: [
				//'@fontsource/lato/400.css',
				//'@fontsource/lato/700.css',
				//'@fontsource/lato/900.css',
				'@fontsource-variable/inter/standard.css',
				//'@fontsource-variable/inter/700.css',
				//'@fontsource-variable/inter/900.css',
				'./src/tailwind.css',
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
