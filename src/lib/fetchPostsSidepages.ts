import { supabase } from "$lib/supabaseClient";
import { NASA_API_KEY } from "$env/static/private";

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

  const response = await supabase.from('image_of_the_day')
    .select()
    .eq('id', 0);

  // @ts-ignore
  const data = response.data[0];
  const dateLastAccessed = new Date(data.last_accessed);
  const dateNow = new Date();
  const dateSame = dateLastAccessed.getUTCFullYear() == dateNow.getUTCFullYear() && dateLastAccessed.getUTCMonth() == dateNow.getUTCMonth() && dateLastAccessed.getUTCDay() == dateNow.getUTCDay();
  let imageURL = data.url;

  if (!dateSame) {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    imageURL = (await response.json()).url;
    await supabase.from('image_of_the_day').update( { url: imageURL, last_accessed: dateNow }).eq('id', 0);
  }

  return { allPosts: posts, posts, popularTags: tagsKey.slice(0, 15) };
}
