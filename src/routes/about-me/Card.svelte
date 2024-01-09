<script lang="ts">
  export let title: string;
  export let description: string;

  export let img_src: string;
  export let img_alt: string;
</script>

<div class="card">
  <h1>{title}</h1>
  <img src={img_src} alt={img_alt}>
  <p>{description}</p>
</div>

<style>
  h1 {
    padding-block: 0.5rem;
    font-size: 2rem;
    background-color: var(--clr-surface);
  }

  img {
    width: 100%;
    display: block;

    aspect-ratio: 4 / 3;
    object-fit: cover;
    object-position: 0% 0%;

    border-radius: 20px;
  }
  
  p {
    padding: 0.5rem;
  }

  .card {
    display: flex;
    flex-direction: column;

    max-width: 400px;

    text-align: center;
    border-radius: 1rem;
    border: double 4px transparent;
    overflow: hidden;

    border: 4px solid var(--clr-accent);
    background: linear-gradient(180deg,
      var(--clr-surface),
      var(--clr-base)
    );
    background-origin: border-box;
    background-clip: content-box, border-box; 

    transition: all 400ms;
  }
  .card:hover {
    scale: 1.05;
    box-shadow: 0px 0px 40px hsl(var(--clr-hsl-mauve), 0.2);
  }

</style>
