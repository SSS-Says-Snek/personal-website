<script lang="ts">
  let { narrow = false }: { narrow?: boolean } = $props();
</script>

<div class="hero full-width" class:hero-narrow={narrow}>
  <slot />
</div>

<style>
  .hero {
    --transition-time: 4s;
    --expand-time: 750ms;

    position: relative;
    padding: 7rem 0;
    text-align: center;
    margin-bottom: 4rem;

    color: var(--clr-black);
    animation: 
      hero-expand var(--expand-time) forwards,
      hero-text var(--transition-time) forwards;
  }
  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background: var(--background, linear-gradient(45deg,
      var(--clr-blue),
      var(--clr-sky),
      var(--clr-sapphire)
    ));
    background-size: 200% 100%;
    animation:
      hero-fade var(--transition-time) forwards,
      hero-bg 8s ease alternate infinite;
  }

  :global(.hero.hero-narrow) {
    padding: 4rem 0;
  }

  :global(.hero h1) {
    white-space: nowrap;
  }

  @keyframes hero-bg {
    from {
      background-position: 10% 0%;
    }
    to {
      background-position: 100% 0%;
    }
  }

  @keyframes hero-text {
    to {color: var(--clr-text);}
  }

  @keyframes hero-expand {
    from {
      width: 0%;
    }
  }

  @keyframes hero-fade {
    to {filter: brightness(50%);}
  }
</style>
