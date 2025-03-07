import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import solidJs from "@astrojs/solid-js";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://vdocs.vmr.us.kg',
	// base:"/vmrdocs",
	integrations: [
		starlight({
			// site: 'https://vmrdocs.github.io',
			title: 'Docs',
			title: {
				en: 'Docs',
				'zh-CN': '文档',
			},
			favicon: './src/assets/favicon.svg',
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
								"en":"What's Supported?",
							},
						},
						{ 
							label: "Commands AutoCompletions", 
							link: '/starts/completions/',
							translations:{
								"zh-CN":"命令行自动补全",
								"en":"Commands AutoCompletions",
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
							label:"TUIDocs", 
							link:"/guides/tutorial/",
							translations:{
								"zh-CN":"TUI文档",
								"en":"Docs For TUI",
							},
						},
						{
							label:"CLIDocs", 
							link:"/guides/cli/",
							translations:{
								"zh-CN":"CLI文档",
								"en":"Docs For CLI",
							},
						},
						{
							label:"CondaDocs", 
							link:"/guides/conda/",
							translations:{
								"zh-CN":"Conda相关",
								"en":"Conda Related",
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
			customCss: ['./src/assets/landing.css'],
		}),
		solidJs(), robotsTxt(), sitemap(),
	],
});
