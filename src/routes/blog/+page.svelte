<script lang="ts">
  import type { Post } from "$lib/interfaces";
  import Hero from "$lib/Hero.svelte";
  import PostsList from "$lib/PostsList.svelte";

  let { data }: { data: { allPosts: Post[], posts: Post[], popularTags: string[] } } = $props();
</script>

<Hero>
  <h1 class="h1-hero">Blog</h1>
</Hero>

<PostsList {...data} />
