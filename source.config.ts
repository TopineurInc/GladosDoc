import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { topineurLanguage } from '@/shiki/topineur-language';
import { topineurTheme } from '@/shiki/topineur-theme';

export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      theme: 'github-light',
      // theme: topineurTheme,
      langs: [topineurLanguage],
    },
    remarkCodeTabOptions: {
      parseMdx: true,
    },
  },
  lastModifiedTime: 'git',
});
