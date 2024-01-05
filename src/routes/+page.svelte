<script>
  import Image from '$lib/Image.svelte'
  import Hero from './Hero.svelte'
  import Button from '$lib/Button.svelte';
</script>

<Hero>
  <h1>Hey, I'm Brandon</h1>
  <h2>(also known as SSS-Says-Snek)</h2>
</Hero>

<div class="container">
  <section>
    <h2 class="description">
      Programer.<br/>
      Professional Nerd.<br/>
      Passionate Learner.
    </h2>

    <Image src="/images/piano.jpg" width="500" alt="Me playing a piano" />
  </section>

  <section class="skew-bg" data-gap="large">
    <div class="button-group">
      <h2 class="description">
        Forgetting Semicolons<br/>
        Since 2018
      </h2>

      <button type="button">Go to Portfolio</button>
    </div>

    <Image src="/images/programming.png"
      alt="Source code of one of my projects"
      width="400"
      translucent={true} />

  </section>

  <section data-gap="medium">
    <div class="img-group">
      <Image src="/images/math.png"
        alt="Math"
        width="200"
        translucent={true} />
      <Image src="/images/trombone.jpg"
        alt="Trombone"
        width="250"/>
    </div>

    <div class="button-group right-align">
      <h2 class="description text-align-right">
        Math Enthusiast<br/>
        and Classical<br/>
        Music Geek
      </h2>

      <button type="button">About Me</button>
    </div>
  </section>
</div>

<style>
  /* COOL STYLES */
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    text-align: center;
    align-items: center;
  }

  /* Utility classes */
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

  .img-group {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  /* Maybe I should use a container query */
  @media (width > 650px) {
    .img-group {
      flex-direction: row;
      gap: 5em;
    }
  }

  /* Media Query for large devices */
  @media (width > 1100px) {
    section {
      text-align: unset;
      flex-direction: row;
    }

    section[data-gap="large"] {
      gap: 20em;
    }

    section[data-gap="medium"] {
      gap: 10em;
    }

    .description {
      font-size: 3em;
    }
    
    img, svg {
      display: inline;
    }
    
    .right-align {
      margin-left: auto;
      margin-right: 0;
    }

    .text-align-right {
      text-align: right;
    }

    .img-group {
      gap: 5em; 
    }
    .img-group :first-child {
      align-self: flex-start;
    }
    .img-group > :last-child {
      align-self: flex-end;
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

</style>
