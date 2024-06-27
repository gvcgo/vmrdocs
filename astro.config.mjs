import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			logo: {
				light: './src/assets/vmr_logo.png',
				dark: './src/assets/vmr_logo_white.png',
			},
			social: {
				github: 'https://github.com/gvcgo/version-manager',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Quick Start', link: '/starts/quickstart/' },
						{ label: 'Core Concepts', link: '/starts/concepts/' },
						{ label: "What's Supported", link: '/starts/sdklist/' },
					],
				},
				{
					label:"Guides",
					items:[
					    {label:"Documents", link:"/guides/tutorial/"},
						{label:"FAQs", link:"/guides/faq/"},
						{label:"For Contributors", link:"/guides/developers/"},
					]
				},
			],
			defaultLocale: 'root',
			locales:{
				root: { label: 'English', lang: 'en' },
				"zh-cn": {
					label:"简体中文",
					lang:"zh-CN",
				},
			},
		}),
	],
});
