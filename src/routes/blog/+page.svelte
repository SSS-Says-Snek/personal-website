<script lang="ts">
  import type { Post } from "$lib/interfaces";
  import Hero from "$lib/Hero.svelte";

  import MdiCalendar from '~icons/mdi/calendar';
  import MdiClock from '~icons/mdi/clock';

  let { data }: { data: { posts: { posts: Post[] } } } = $props();
</script>

<Hero>
  <h1 class="h1-hero">Blog</h1>
</Hero>

<div class="posts">
  {#each data.posts.posts as post}
    <a href={`/blog/${post.slug}`} class="post">
      <div class="title-container">
        <h2>{post.title}</h2>
      </div>

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

      <img src={post.coverImage} alt={post.coverImageAlt}>
    </a>
  {/each}
</div>

<style>
  h2 { 
    position: relative;
    font-size: 1.625rem;
    text-wrap: balance;
    transition: all 250ms;
    display: inline-block;
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

  .title-container {
    position: relative;
  }

  .posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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

  .info {
    display: flex;
    gap: 0.5rem;
  }

  .excerpt {
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
