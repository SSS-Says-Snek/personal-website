<script lang="ts">
  import './syntaxhighlighting.css';
  import './toc.css';
  import './typography.css'

  import { onMount } from 'svelte';
  import Hero from "$lib/Hero.svelte";
  import type { Post } from '$lib/interfaces';

  import MdiCalendar from '~icons/mdi/calendar';
  import MdiClock from '~icons/mdi/clock';

  let { data } = $props();

  let { PostContent } = data;
  let post: Post = data.metadata;

  onMount(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        //const id = entry.target.querySelector('h1, h2, h3, h4, h5, h6').getAttribute('id');
        const id = entry.target.getAttribute("aria-labelledby");
        if (entry.intersectionRatio > 0) {
          // @ts-ignore
          document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
        } else {
          // @ts-ignore
          document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
        }
      }
    )}
  );

    // Track all sections that have an `id` applied
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    //const allText = document.body.innerText;
    //const allWords = allText.split(/\s/).filter(Boolean);
    //minRead = `${Math.round(allWords.length / 250)} minute read`;
  });
</script>

<head>
  <link href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" rel="stylesheet">
</head>

<Hero narrow={true} />
<img src={post.coverImage} alt={post.coverImageAlt}>

<div class="frontmatter">
  <h1 class="post-title">{post.title.replace('~', ":")}</h1>
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
</div>

<hr>

<div class="md-content">
  <PostContent />
</div>

<div class="comments">
  <script src="https://utteranc.es/client.js"
    repo="SSS-Says-Snek/personal-website"
    issue-term="pathname"
    label="blog"
    theme="github-dark"
    crossorigin="anonymous"
    async>
  </script>
</div>

<style>
h1 {
  text-shadow: 0px 0px 20px hsl(var(--clr-hsl-mauve), 0.45);
  font-size: clamp(1.5rem, calc(1.5rem + 2vw), 3.25rem);
  text-wrap: balance;
}

img {
  aspect-ratio: 16 / 9;
  object-fit: cover;

  width: 100vw;
  max-width: unset;
  margin-left: calc((100% - 100vw) / 2);
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.frontmatter {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

@media (min-width: 500px) {
  .icon-text {
    font-size: 1.1rem;
  }

  .info {
    gap: 2rem;
  }

  img {
    border-radius: 0.5rem;
    width: 100%;
    margin-left: 0;
  }
}

/*:global(.icon-text .icon) {*/
/*  display: none;*/
/*}*/

/*.post-title {*/
/*  font-size: clamp(2rem, calc(2rem + 1vw), 3.5rem);*/
/*}*/
</style>
