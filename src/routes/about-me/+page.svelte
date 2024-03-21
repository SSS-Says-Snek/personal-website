<script lang="ts">
  import MdiCakeVariant from '~icons/mdi/cake-variant'
  import MdiSchoolOutline from '~icons/mdi/school-outline'

  import Hero from "$lib/Hero.svelte";
  import Delay from '$lib/Delay.svelte';
  import Card from "./Card.svelte";

  import { genAnimationDelays } from '$lib';

  const START_DELAY = 500;
  const DELAY_AMOUNT = 100;
  let cards = [
    {
      title: "Programming",
      description: "I had began \"programming\" in 2016, but actually got into Python in early 2018. Since then, I've learnt many things and built several projects!",

      imgSrc: "/images/cards/programming.png",
      imgAlt: "A screenshot of code of a project of mine"
    },

    {
      title: "Math",
      description: "I take lots of interest in math, and have participated profusely in competition math. However, I also love self-learning many fields of math, such as calculus.",

      imgSrc: "/images/cards/math.png",
      imgAlt: "Math"
    },

    {
      title: "Piano",
      description: "Since 2015, I have played piano. I enjoy both performing and listening to classical music.",

      imgSrc: "/images/cards/piano.png",
      imgAlt: "A photo of me"
    },
  ]

  let cardDelays = genAnimationDelays(cards.length, START_DELAY + DELAY_AMOUNT, DELAY_AMOUNT);
</script>

<Hero
  --background="linear-gradient(45deg,
  var(--clr-accent),
  var(--clr-mauve),
  var(--clr-pink)
  )">
  <h1>About Me</h1>
</Hero>

<div class="cards">
  <Delay animationDelayMs={START_DELAY}>
    <Card 
      title="Hey, I'm Brandon!"
      description="I'm currently a high school student somewhere in Alabama, and like to do nerdy stuff like programming and math."

      imgSrc="/images/cards/literally-me.png"
      imgAlt="A photo of me"
    >
      <div class="icon-container age">
        <MdiCakeVariant />
        <p>16</p>
      </div>

      <div class="icon-container grade">
        <MdiSchoolOutline />
        <p>Sophomore</p>
      </div>
    </Card>
  </Delay>

  {#each cards as card, idx}
    <Delay animationDelayMs={cardDelays[idx]}><Card {...card}/></Delay>
  {/each}
</div>

<style>
  .cards {
    display: grid;
    place-items: center;
    gap: 3rem;
    grid-template-columns: 1fr;
  }

  .icon-container {
    display: flex;
    gap: 0.125rem;
  }

  .age {
    color: var(--clr-mauve);
    font-weight: 600;
  }

  .grade {
    font-weight: 600;
  }

  @media (width > 1000px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
