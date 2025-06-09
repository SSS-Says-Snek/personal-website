import type { Post } from "$lib/interfaces";

const fetchPosts = async ({ offset = 0, limit = 10 } = {}) => {
  const posts: Post[] = await Promise.all(
    // Stole it from the sveltekit blog starter template but here's what I think it does for future me
    // Vite's import.meta.glob "imports" all posts under that file structure
    // mdsvex handles that import and provides us with metadata (i.e the things between ---)
    // we can then use that for cool stuff
    Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
      // @ts-ignore
      const { metadata } = await resolver()

      // @ts-ignore
      // Path: /src/lib/posts/{filename}.md
      // Gets the {filename} part
      const slug = path.split('/').pop().slice(0, -3)
      return { ...metadata, slug }
    })
  )

  let sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Finnicky TS PMO

  if (offset) {
    sortedPosts = sortedPosts.slice(offset)
  }
  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  posts.forEach(post => {
    post.title = post.title.replace('~', ':')
  })

  return posts
}

export default fetchPosts;
