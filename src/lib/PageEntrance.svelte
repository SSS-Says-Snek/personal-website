<script lang="ts">
  import Delay from './Delay.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly } from 'svelte/transition';

	let node: HTMLElement;

	export let fadeDuration: number = 700;
  export let delay: number = 0;
</script>

<IntersectionObserver once element={node} let:intersecting>
  {#if delay == 0}
    <div bind:this={node}>
      {#key intersecting}
        <section
          in:fly={{ duration: fadeDuration, x: 40 }}
          class:invisible={!intersecting}
        >
          <slot />
        </section>
      {/key}
    </div>
  {:else}
    <Delay animationDelayMs={delay}>
      <div bind:this={node}>
        {#key intersecting}
        <section
          in:fly={{ duration: fadeDuration, x: 40 }}
          class:invisible={!intersecting}
        >
          <slot />
        </section>
        {/key}
      </div>

    </Delay>
  {/if}
</IntersectionObserver>
