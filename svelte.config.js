import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeKatexSvelte from 'rehype-katex-svelte';
import toc from '@jsdevtools/rehype-toc';
import * as sectionize from '@hbsnow/rehype-sectionize';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
    extensions: [".svelte", ".md"],
	preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".md"],
            remarkPlugins: [
                remarkMath
            ],
            rehypePlugins: [
                rehypeKatexSvelte,
                rehypeSlug,
                rehypeAutolinkHeadings,
                toc,
                //() => toc({
                //    customizeTOC: (toc) => {
                //        //console.log(toc);
                //        //toc.children.splice(0, 0, document.createElement('h2'))
                //        return toc;
                //    }
                //}),
                sectionize.default
            ]
        })
    ],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

};

export default config;
