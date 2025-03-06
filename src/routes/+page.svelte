<script lang="ts">
  import MdiYoutube from '~icons/mdi/youtube'
  import MdiReddit from '~icons/mdi/reddit'
  import MdiDiscord from '~icons/mdi/discord'
  import MdiKeyboardArrowLeft from '~icons/mdi/keyboard-arrow-left';
  import MdiKeyboardArrowRight from '~icons/mdi/keyboard-arrow-right';

  import Image from '$lib/Image.svelte'
  import Hero from './Hero.svelte'
  import Button from '$lib/Button.svelte';
  import Delay from '$lib/Delay.svelte'

  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import Autoplay from 'embla-carousel-autoplay'

  let emblaApi: any
  let autoplay = Autoplay()
  let options = { loop: true }
  let plugins = [autoplay]

  function onInit(event: any) {
    emblaApi = event.detail
  }

  function prev() {
    emblaApi.scrollPrev();
    autoplay.stop();
  }

  function next() {
    emblaApi.scrollNext();
    autoplay.stop();
  }
</script>

<Hero>
  <h1>Hey, I'm Brandon</h1>
  <h2>(also known as SSS-Says-Snek)</h2>

  <div class="links">
    <a class="profile-link" href="https://www.youtube.com/channel/UCy0lVIEyazL73R-8NECWMfw">
      <MdiYoutube style="font-size: 30px;" />
    </a>
    <a class="profile-link" href="https://www.reddit.com/user/s4aysnek/">
      <MdiReddit style="font-size: 30px;" />
    </a>
    <a class="profile-link" href="https://www.discordapp.com/users/683852333293109269">
      <MdiDiscord style="font-size: 30px;" />
    </a>
  </div>
</Hero>

<div class="container">
  <Delay animationDelayMs={300}>
    <div class="embla">
      <div class="embla__prev" on:click={prev}><MdiKeyboardArrowLeft style="font-size: 4rem;"/></div>
      <div class="embla__viewport"
        use:emblaCarouselSvelte="{{ options, plugins }}"
        on:emblaInit="{onInit}"
      >
        <div class="embla__container">
          <img class="embla__slide" src="/images/piano.jpg" alt="Me playing the piano" />
          <img class="embla__slide" src="/images/carousel/band.jpg" alt="The wind ensemble concert band I play in high school" />
          <img class="embla__slide" src="/images/carousel/minecraft.png" alt="A screenshot of my modded minecraft world"/>
          <img class="embla__slide" src="/images/carousel/gplates.png" alt="A snapshot of my tectonic plates simulator in an ambitious worldbuilding project" />
        </div>
      </div>
      <div class="embla__next" on:click={next}><MdiKeyboardArrowRight style="font-size: 4rem;"/></div>
    </div>
  </Delay>

  <section>
    <h2 class="description">
      Programmer.<br/>
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

      <Button text="Go to Projects" href="/projects" />
    </div>

    <Image src="/images/programming.png"
      alt="Source code of one of my projects"
      width="400"
      translucent={true} />
  </section>

  <section class="" data-gap="large">
    <div class="button-group">
      <h2 class="description">
        Jack of (Some) Trades<br/>
      </h2>

      <Button text="My Skills" href="/skills"
        --clr-button="var(--clr-mauve)"/>
    </div>

    <Image src="/images/skills.jpg"
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

      <Button text="About Me"
        href="/about-me"
        --clr-button="var(--clr-green)"/>
    </div>
  </section>
</div>

<style>
  h1 {
    text-wrap: wrap;
    display: inline-block;
  }

  h2 {
    font-size: 1.25em;
  }

  @keyframes embla-box-shadow {
    from {
      box-shadow: 0px 0px 20px hsl(var(--clr-hsl-mauve), 0.35);
    }

    to {
      box-shadow: 0px 0px 20px hsl(var(--clr-hsl-pink), 0.35);
    }
  }

  .embla {
    position: relative;
    border-radius: 1.5rem;
  }

  .embla__prev,
  .embla__next {
    display: none;
  }

  .embla__viewport {
    overflow: hidden;
    border-radius: 1.5rem;
    /*margin: -26px;*/
    /*padding: 26px;*/
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    border-radius: 1.5rem; /* Two border-radius to satisfy box-shadow*/
    margin-right: 3rem;
    /*animation: embla-box-shadow 5s ease alternate infinite;*/
  }

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

  .profile-link {
    all: unset;
    transition: scale 200ms;
    cursor: pointer;
  }
  .profile-link:hover {
    scale: 1.1;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .button-link {
    border: unset;
    border-radius: 0.25rem;

    color: var(--clr-black);
    font-weight: 600;

    background-color: var(--clr-mauve);
    padding: 0.25rem;
  }

  /* Cool effects */
  .skew-bg {
    --skew-angle: -4deg;

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

    transform: skewY(var(--skew-angle));
    inset: 0;
  }

  .skew-bg-down {
    --skew-angle: 4deg;
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

    .embla__prev {
      display: unset;
      position: absolute;
      top: 50%;
      transform: translateX(-100%) translateY(-50%);
      transition: scale 200ms;
    }

    .embla__next {
      display: unset;
      position: absolute;
      top: 50%;
      right: 0%;
      transform: translateX(100%) translateY(-50%);
      transition: scale 200ms;
    }

    .embla__prev:hover,
    .embla__next:hover {
      scale: 1.07;
    }
}
</style>
