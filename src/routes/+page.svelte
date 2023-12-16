<script>
</script>

<div class="hero full-width">
  <h1>Hey, I'm Brandon</h1>
  <h2>(also known as SSS-Says-Snek)</h2>
</div>

<div class="container">
  <section>
    <h2 class="description">
      Programer.<br/>
      Professional Nerd.<br/>
      Passionate Learner.
    </h2>

    <img class="circular-img" src="/images/piano.jpg" width="500px" alt="Me playing the piano">
  </section>

  <section class="skew-bg" data-gap="large">
    <div class="button-group">
      <h2 class="description">
        Forgetting Semicolons<br/>
        Since 2018
      </h2>

      <button type="button">Go to Portfolio</button>
    </div>

    <img class="circular-img" id="programming-img" src="/images/programming.png"
      width="400px"
      alt="Source code of one of my projects">
  </section>
</div>

<style>
  :global(:root) {
    --clr-hsl-base: 240, 21%, 15%;
    --clr-hsl-text: 226, 64%, 88%;
    --clr-hsl-accent: 232, 97%, 85%;
    --clr-hsl-mauve: 267, 84%, 81%;
    --clr-hsl-blue: 218, 92%, 76%;
    --clr-hsl-green: 115, 54%, 76%;
    --clr-hsl-teal: 170, 57%, 73%;
    --clr-hsl-black: 240, 23%, 9%;

    --clr-base: hsl(var(--clr-hsl-base));
    --clr-text: hsl(var(--clr-hsl-text));
    --clr-accent: hsl(var(--clr-hsl-accent));
    --clr-mauve: hsl(var(--clr-hsl-mauve));
    --clr-blue: hsl(var(--clr-hsl-blue));
    --clr-green: hsl(var(--clr-hsl-green));
    --clr-teal: hsl(var(--clr-hsl-teal));
    --clr-black: hsl(var(--clr-hsl-black));
  }

  :global(body) {
    color-scheme: dark;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: var(--clr-base);
    color: var(--clr-text);

    max-width: min(60rem, 100% - 6rem);
    margin-inline: auto;
  }

  /* RESETS */
  * {
    margin: 0;
    font: inherit;
  }

  h1 {
    font-size: 4em;
    font-weight: 900;
  }
  h2 {
    font-size: 1.25em;
    font-weight: 600;
  }

  img,
  svg {
    max-width: 100%;
  }

  /* COOL STYLES */
  button {
    padding: 0.375em 0.125em;
    font-size: 2em;
    font-weight: 700;
    border-radius: 100vw;
    border: none;

    box-shadow: 0px 0px 20px hsl(var(--clr-hsl-mauve), 0.35);
    background-color: var(--clr-blue);
    color: var(--clr-black);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    text-align: center;
    align-items: center;
  }

  /* Utility classes */
  .circular-img {
    object-fit: cover;
    clip-path: circle(closest-side);
    mix-blend-mode: luminosity;
  }

  .full-width {
    width: 100vw;
    margin-left: calc((100% - 100vw) / 2);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  /* Specific stuff idk */
  .description {
    font-size: 2em;
    font-weight: 800;
    text-shadow: 0px 0px 20px hsl(var(--clr-hsl-mauve), 0.35);
  }

  .button-group {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
  }

  /* Cool effects */
  .skew-bg {
    position: relative;
    padding: 4em 0;
  }

  .skew-bg::before {
    content: "";
    z-index: -1;
    position: absolute;
    background: #313244;

    width: 100vw;
    margin-left: calc((100% - 100vw) / 2);

    transform: skewY(-4deg);
    inset: 0;
  }

  .hero {
    position: relative;
    /* display: flex; */
    /* align-items: center; */
    flex-direction: column;

    padding: 7rem 0;
    text-align: center;

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

    animation: hero-bg 8s ease alternate infinite, hero-fade 4s forwards;

    inset: 0;
  }

  @media (width > 1100px) {
    section {
      text-align: unset;
      flex-direction: row;
    }

    section[data-gap="large"] {
      gap: 20em;
    }

    .description {
      font-size: 3em;
    }
  }

  /* TODO: hero anim: expand downwards, wavy pattern move across*/
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

  #programming-img {
    mix-blend-mode: unset;
    opacity: 50%;
  }

</style>
