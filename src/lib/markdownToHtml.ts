import rehypePrism from '@mapbox/rehype-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkImages from 'remark-images'

import { unified } from 'unified';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(remarkImages)
    .use(rehypeKatex)
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
