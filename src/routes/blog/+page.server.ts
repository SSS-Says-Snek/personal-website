export async function load({fetch}: {url: URL, fetch: Function}) {
  let postRes = await fetch(`/api/posts`);
  let posts = await postRes.json();

  return { posts };
}
