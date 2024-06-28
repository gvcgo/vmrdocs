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
					translations:{
						"zh-CN":"这里开始",
						"en":"Start Here",
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Quick Start', 
							link: '/starts/quickstart/',
							translations:{
								"zh-CN":"快速开始",
								"en":"Quick Start",
							}
						 },
						{ 
							label: 'Core Concepts', 
							link: '/starts/concepts/',
							translations:{
								"zh-CN":"核心概念",
								"en":"Core Concepts",
							}
						 },
						{ 
							label: "What's Supported", 
							link: '/starts/sdklist/',
							translations:{
								"zh-CN":"支持哪些SDK?",
								"en":"What's Supported",
							},
						},
					],
				},
				{
					label:"Guides",
					translations:{
						"zh-CN":"指南",
						"en":"Guides",
					},
					items:[
					    {
							label:"Documents", 
							link:"/guides/tutorial/",
							translations:{
								"zh-CN":"文档",
								"en":"Documents",
							},
						},
						{
							label:"FAQs", 
							link:"/guides/faq/",
							translations:{
								"zh-CN":"常见问题",
								"en":"FAQs",
							},
						},
						{
							label:"For Contributors", 
							link:"/guides/developers/",
							translations:{
								"zh-CN":"贡献者指南",
								"en":"For Contributors",
							},
						},
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
