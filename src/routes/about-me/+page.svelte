<script>
  import Hero from "$lib/Hero.svelte";
  import Card from "./Card.svelte";
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
    description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."

    img_src="/images/cards/literally-me.png"
    img_alt="A photo of me"
  />
</div>

<style>

</style>
