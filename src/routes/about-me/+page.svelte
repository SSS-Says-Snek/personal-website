<script lang="ts">
  import MdiCakeVariant from '~icons/mdi/cake-variant'
  import MdiSchoolOutline from '~icons/mdi/school-outline'

  import Hero from "$lib/Hero.svelte";
  import Card from "./Card.svelte";

  const START_DELAY = 500;
  const DELAY_AMOUNT = 100;
  let cards = [
    {
      title: "Programming",
      description: "I had began \"programming\" in 2016, but actually got into Python in early 2018. Since then, I've learnt many things and built several projects!",

      img_src: "/images/cards/programming.png",
      img_alt: "A screenshot of code of a project of mine"
    },

    {
      title: "Math",
      description: "I take lots of interest in math, and have participated profusely in competition math. However, I also love self-learning maay fields of math, such as calculus.",

      img_src: "/images/cards/math.png",
      img_alt: "Math"
    },

    {
      title: "Piano",
      description: "Since 2015, I have played piano. I enjoy both performing and listening to classical music.",

      img_src: "/images/cards/piano.png",
      img_alt: "A photo of me"
    },
  ]
  let card_delays: Array<String> = []

  // Including the first one
  let delay = START_DELAY + DELAY_AMOUNT;
  for (let _ of cards) {
    card_delays.push(delay.toString())
    delay += DELAY_AMOUNT;
  }
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
  <Card 
    title="Hey, I'm Brandon!"
    description="I'm currently a high school student somewhere in Alabama, and like to do nerdy stuff like programming and math."
    
    img_src="/images/cards/literally-me.png"
    img_alt="A photo of me"
    --animation-delay="{START_DELAY}"
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

  {#each cards as card, idx}
    <Card {...card} --animation-delay="{card_delays[idx]}"/>
  {/each}
</div>

<style>
  .cards {
    display: grid;
    place-items: center;
    gap: 3rem;
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
