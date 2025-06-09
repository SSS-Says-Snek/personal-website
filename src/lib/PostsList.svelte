<script lang="ts">
  import MdiCalendar from '~icons/mdi/calendar';
  import MdiClock from '~icons/mdi/clock';
  import highlightedPosts from '$lib/posts/highlighted-posts.json';
  import type { Post } from './interfaces';

  let { posts, popularTags }: { posts: Post[], popularTags: string[] } = $props();
</script>

<div class="blog-info">
  <div class="blog-info-div">
    <div class="blog-info-section">
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
      <a href="/" class="other-links text-transition">Home</a>
      <a href="/blog" class="other-links text-transition">Main blog page</a>

    </div>

    <div class="blog-info-section">
      <h3 class="blog-headers">Image of the Month</h3>
      <hr>
      <img src="https://apod.nasa.gov/apod/image/2506/ScyllaB_LerouxGere_960.jpg" alt="An outer space nebula">
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
.post-title { 
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

.blog-info {
  top: 40px;
  position: sticky;
  transform: translateX(calc(100% + 5rem)) translateY(0rem);
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

a.other-links {
  text-decoration: underline var(--clr-teal);
}

a.highlighted-post {
  color: var(--clr-subtext);
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
</style>

