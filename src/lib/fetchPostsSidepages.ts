export default async function fetchPostSide(fetch: Function) {
  let postRes = await fetch(`/api/posts`);
  let posts = await postRes.json();

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

  return { allPosts: posts, posts, popularTags: tagsKey.slice(0, 15) };
}
