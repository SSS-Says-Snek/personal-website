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
    --clr-blue: #89b4fa;
    --clr-green: #a6e3a1;
    --clr-teal: #94e2d5;
    --clr-black: #11111b;
  }

  :global(body) {
    color-scheme: dark;
    font-family: 'Montserrat';

    background-color: var(--clr-base);
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
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 7rem 0;

    color: var(--clr-black);
    animation: hero-text 4s forwards;
  }

  .hero::before {
    content: "";
    position: absolute;
    z-index: -1;
    background:
      linear-gradient(45deg, var(--clr-mauve), var(--clr-accent), var(--clr-teal), var(--clr-blue));
    background-size: 200% 100%;

    --mask:
      radial-gradient(111.80px at 50% calc(100% - 150.00px),#000 99%,#0000 101%) calc(50% - 100px) 0/200px 100%,
      radial-gradient(111.80px at 50% calc(100% + 100.00px),#0000 99%,#000 101%) 50% calc(100% - 50px)/200px 100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);

    /* mask-image: linear-gradient(rgb(0 0 0 / 1), rgb(0 0 0 / 0.8) 30%, rgb(0 0 0 / 0.3)); */
    animation: hero-bg 8s ease alternate infinite, hero-fade 4s forwards;

    inset: 0;
  }

  @keyframes hero-bg {
  from {background-position: 10% 0%;}
  to {background-position: 100% 0%;}
  }

  @keyframes hero-text {
  to {color: var(--clr-text);}
  }

  @keyframes hero-fade {
  to {filter: brightness(50%);}
  }
</style>
