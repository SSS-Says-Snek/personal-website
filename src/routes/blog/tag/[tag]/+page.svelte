<script lang="ts">
  import type { Post } from "$lib/interfaces";
  import Hero from "$lib/Hero.svelte";
  import PostsList from "$lib/PostsList.svelte";

  let { data }: { data: { allPosts: Post[], posts: Post[], tag: string, popularTags: string[], imageURL: string } } = $props();
</script>

<Hero --background="linear-gradient(45deg,
  var(--clr-accent),
  var(--clr-mauve),
  var(--clr-pink)
  )"
>
  <h1 class="h1-hero">Tag: {data.tag.charAt(0).toUpperCase() + data.tag.slice(1)}</h1>
</Hero>

<PostsList {...data} />

