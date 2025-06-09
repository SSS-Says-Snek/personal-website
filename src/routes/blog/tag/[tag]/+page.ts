import type { Post } from "$lib/interfaces";

export async function load({fetch, params}: {url: URL, fetch: Function, params: Record<string, any>}) {
  let postRes = await fetch(`/api/posts`);
  let allPosts = await postRes.json();
  let posts = allPosts.filter((post: Post) => post.tags.includes(params.tag));

  let tags: { [tag: string]: number } = {};
  let tagsKey = [];

  for (const post of posts) {
    for (const tag of post.tags) {
      tags[tag] = (tags[tag] || 0) + 1;
    }
  }

  for (const tag of Object.keys(tags)) {
    tagsKey.push(tag);
  }
  tagsKey.sort((a: string, b: string) => tags[b] - tags[a]);


  return { posts, tag: params.tag, popularTags: tagsKey.slice(0, 15)};
}

