import fetchPostSide from "$lib/fetchPostsSidepages";

export async function load({fetch}: {url: URL, fetch: Function}) {
  return fetchPostSide(fetch);
}
