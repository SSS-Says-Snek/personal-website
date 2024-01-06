<script>
  import Hero from "$lib/Hero.svelte";
  import Card from "./Card.svelte";
</script>

<Hero>
  <h1>Portfolio</h1>
</Hero>

<div class="cards">
  <Card
    title="Hisock"
    date_created="Sep 2021"
    authors="sheepy0125"
    description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    img_src="/images/cards/hisock.png"
    img_alt="Screenshot of an ongoing Connect Four game made with Hisock"

    project_src="https://github.com/SSS-Says-Snek/hisock"
    project_spotlight="https://www.youtube.com/watch?v=UVYoySkm8ZU"
  />

  <Card
    title="Hisock"
    date_created="Sep 2021"
    authors="sheepy0125"
    description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
    img_src="/images/trombone.jpg"
    img_alt="Screenshot of an ongoing Connect Four game made with Hisock"

    project_src="https://github.com/SSS-Says-Snek/hisock"
    project_spotlight="https://www.youtube.com/watch?v=UVYoySkm8ZU"
    --clr-border="var(--clr-green)"
  />
</div>

<style>
  .cards {
    display: grid;
    gap: 2rem;
  }

  @media (width > 1000px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
