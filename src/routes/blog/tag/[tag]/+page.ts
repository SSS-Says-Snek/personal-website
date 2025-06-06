import type { Post } from "$lib/interfaces";

export async function load({fetch, params}: {url: URL, fetch: Function, params: Record<string, any>}) {
  let postRes = await fetch(`/api/posts`);
  let allPosts = await postRes.json();
  let posts = allPosts.filter((post: Post) => post.tags.includes(params.tag));

  console.log(posts);
  return { posts };
}

