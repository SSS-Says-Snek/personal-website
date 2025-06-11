import fetchPostSide from "$lib/fetchPostsSidepages";
import type { Post } from "$lib/interfaces";

export async function load({fetch, params}: {url: URL, fetch: Function, params: Record<string, any>}) {
  let postData: { allPosts: Post[], posts: Post[], tag?: string, popularTags: string[] } = await fetchPostSide(fetch);
  postData.posts = postData.allPosts.filter((post: Post) => post.tags.includes(params.tag));
  postData.tag = params.tag;

  return postData;
}

