<script lang="ts">
  import MdiYoutube from '~icons/mdi/youtube'
  import MdiReddit from '~icons/mdi/reddit'
  import MdiDiscord from '~icons/mdi/discord'

  import Image from '$lib/Image.svelte'
  import Hero from './Hero.svelte'
  import Button from '$lib/Button.svelte';
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
}
</style>
