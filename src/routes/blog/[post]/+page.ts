import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  // try import for 404
  try {
    let post = await import(`../../../lib/posts/${params.post}.md`);;

    return {
      PostContent: post.default,
      metadata: { ...post.metadata, slug: params.post }
    };

  } catch(err) {
    error(404);
  }
}
