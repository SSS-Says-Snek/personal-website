<script>
</script>

<div class="hero">
  <h1>Hey, I'm Brandon</h1>
  <h2>(also known as SSS-Says-Snek)</h2>
</div>

<div class="cards">
</div>


<style>
  :global(:root) {
    --clr-base: #1e1e2e;
    --clr-text: #cdd6f4;
    --clr-accent: #b4befe;
    --clr-mauve: #cba6f7;
    --clr-black: #11111b;
  }

  :global(body) {
    color-scheme: dark;
    font-family: 'Montserrat';

    background-color:var(--clr-base);
    color: var(--clr-text);
  }

  h1, h2 {
    margin: 0;
  }

  h1 {
    font-size: 5em;
  }

  h2 {
    font-size: 1.25em;
  }

  .hero {
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 4rem 0;

    background:
        linear-gradient(45deg, var(--clr-mauve), var(--clr-accent));
    color: var(--clr-black);
    animation: hero 3s forwards;
  }

  @keyframes hero {
    from {
      opacity: 0;
      transform: translateY(-100px);
      color: var(--clr-text);
    }

    30% {
      transform: translateY(0px);
      color: var(--clr-text);
    }

    60% {
      opacity: 1;
      color: var(--clr-black);
    }

    to {
      opacity: 0.5;
    }
  }
</style>
