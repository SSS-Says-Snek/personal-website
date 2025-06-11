<script lang="ts">
  import MdiCalendar from '~icons/mdi/calendar';
  import MdiClock from '~icons/mdi/clock';
  import MdiEmoticonSad from '~icons/mdi/emoticon-sad';
  import highlightedPosts from '$lib/posts/highlighted-posts.json';
  import type { Post } from './interfaces';

  import Fuse from 'fuse.js';
  import { onMount } from 'svelte';

  let { allPosts, posts, popularTags, imageURL }: { allPosts: Post[], posts: Post[], popularTags: string[], imageURL: string } = $props();
  const fuse = new Fuse(
    allPosts, {
      keys: [
        'title'
      ]
    }
  )

  let searchQuery = $state('');
  let hasPosts = $state(true);
  const hasSearchQuery = () => searchQuery.length > 0;
  const searchPosts = () => fuse.search(searchQuery);

  function onSearchInput() {
    if (searchPosts().length == 0) {
      hasPosts = false;
    } else {
      hasPosts = true;
    }
  }
  onMount(onSearchInput);
</script>

<div class="blog-info">
  <div class="blog-info-div">
    <div class="blog-info-section">
      <div class="search">
        <input type="text" placeholder="Search all posts" bind:value={searchQuery} oninput={onSearchInput}>
        <div class="search-results" data-has-query={hasSearchQuery()}>
          <div class="no-search-results-notification" data-has-posts={hasPosts}>
            <MdiEmoticonSad />
            <p>Sorry, no posts found</p>
          </div>

          {#each searchPosts() as searchPost}
            <li><a href={`/blog/${searchPost.item.slug}`}>{searchPost.item.title}</a></li>
          {/each}
        </div>
      </div>

      <h3 class="blog-headers">Popular Tags</h3>
      <hr>
      <div class="info-tags">
        {#each popularTags as popularTag}
          <a href={`/blog/tag/${popularTag}`}>
            <div class="tag">
              <p>{popularTag}</p>
            </div>
          </a>

        {/each}
      </div>
    </div>

    <div class="blog-info-section">
      <h3 class="blog-headers">Highlighted Posts</h3>
      <hr>
      {#each highlightedPosts as highlightedPost}
        <a href={`/blog/${highlightedPost.slug}`} class="highlighted-post">{highlightedPost.title}</a>
      {/each}
    </div>

    <div class="blog-info-section">
      <h3 class="blog-headers">Other Links</h3>
      <hr>
      <a href="/blog" class="other-links text-transition">Main blog page</a>
      <a href="/" class="other-links text-transition">Home</a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" class="other-links text-transition">Secret area</a>

    </div>

    <div class="blog-info-section">
      <h3 class="blog-headers">Image of the Day</h3>
      <hr>
      <img src={imageURL} alt="An outer space nebula">
    </div>
  </div>
</div>

<div class="posts">
  {#each posts as post}
    <div class="post">
      <a href={`/blog/${post.slug}`} class="title-container">
        <h2 class="post-title">{post.title}</h2>
      </a>

      <div class="info">
        <div class="icon-text">
          <MdiCalendar class="icon" />
          <p>{post.date}</p>
        </div>

        <div class="icon-text">
          <MdiClock class="icon" />
          <p>{post.minRead} minute read</p>
        </div>
      </div>

      <p class="excerpt">{post.excerpt}</p>

      <div class="tags">
        {#each post.tags as tag}
          <a href={`/blog/tag/${tag}`}>
            <div class="tag">
              <p>{tag}</p>
            </div>
          </a>
        {/each}
      </div>

      <a href={`/blog/${post.slug}`} class="title-container">
        <img src={post.coverImage} alt={post.coverImageAlt}>
      </a>
    </div>
  {/each}
</div>

<style>
h2.post-title { 
  position: relative;
  font-size: 1.625rem;
  transition: all 250ms;
  display: inline-block;
}

hr {
  border: 1px solid var(--clr-overlay);
}

img {
  border-radius: 0.5rem;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

a, a:hover, a:visited, a:active {
  color: inherit;
  text-decoration: none;
}

a.other-links {
  text-decoration: underline var(--clr-teal);
}

a.highlighted-post {
  color: var(--clr-subtext);
}

input {
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.5rem;
  border: 1px solid var(--clr-text);
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

input:focus {
  border: 1px solid var(--clr-teal);
}

.blog-info {
  display: none;
}

.blog-info-div {
  position: absolute;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-info-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-container {
  position: relative;
}

.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.post {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 70ch;
  width: 100%;
}

.icon-text {
  display: flex;
  gap: 0.25rem;
  color: var(--clr-subtext);
  font-size: 1rem;
  align-items: center;
}

.info, .info-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.excerpt {
  color: var(--clr-subtext);
}

.tags {
  display: flex;
  gap: 0.75rem;
}

.tag {
  padding: 0.25rem 0.4rem;

  border-radius: 0.25rem;
  color: var(--clr-text);
  background-color: #45475a;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: capitalize;
}

.blog-headers {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
}

.text-transition {
  transition: transform 100ms;
}

/* .text-transition::before { */
/*   position: absolute; */
/*   content: '>'; */
/*   left: 0px; */
/*   opacity: 0; */
/**/
/*   transform: translateX(-20px); */
/*   transition: opacity 100ms forwards; */
/* } */

/* .text-transition:hover { */
/*   /* transform: translateX(20px); */
/* } */

.text-transition:hover::before {
  transform: translateX(-20px);
  opacity: 1;
}

.search-results {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: var(--clr-base);
  border: 2px solid var(--clr-blue);
  border-radius: 0.5rem;
}

.search-results li {
  padding: 0.75rem 0.5rem;
  transition: background-color 200ms, color 100ms;
  border-bottom: 2px solid var(--clr-surface);
}

.search-results li:hover {
  color: var(--clr-teal);
  background-color: var(--clr-surface);
}

.no-search-results-notification {
  display: flex;
  padding: 0.75rem 0.5rem;
  transition: background-color 200ms;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;

  color: var(--clr-red);
}

.search-results[data-has-query="false"] {
  display: none;
}

.no-search-results-notification[data-has-posts="true"] {
  display: none;
}

@media (min-width: 600px) {
  h2::after {
    content: '';
    position: absolute;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--clr-mauve);
    transition: transform 250ms ease-out;
    display: inline-block;
  }

  .post:hover h2 {
    color: var(--clr-mauve);
  }

  .post:hover h2::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .post h2::after {
    transform-origin: bottom right;
  }
}

@media (min-width: 1600px) {
  .blog-info {
    display: block;
    top: 40px;
    position: sticky;
    transform: translateX(100%) translateY(0rem);
  }
}
</style>

