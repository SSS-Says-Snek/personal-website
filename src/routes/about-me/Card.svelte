<script lang="ts">
  export let title: string;
  export let description: string;

  export let imgSrc: string;
  export let imgAlt: string;
</script>

<div class="card">
  <h1>{title}</h1>
  <div class="icon-details">
    <slot />
  </div>
  <img src={imgSrc} alt={imgAlt}>
  <p>{description}</p>
</div>

<style>
  h1 {
    font-size: 2rem;
    background-color: var(--clr-surface);
    margin: unset;
  }

  img {
    display: block;

    aspect-ratio: 4 / 3;
    object-fit: cover;
    object-position: 0% 0%;

    border-radius: 15px;
    margin-inline: 1rem;
  }
  
  p {
    padding-inline: 0.5rem;
  }

  .card {
    display: flex;
    flex-direction: column;

    max-width: 400px;
    gap: 0.25rem;
    padding: 0.25rem;

    text-align: center;
    border-radius: 1rem;
    border: double 4px transparent;
    overflow: hidden;

    border: 4px solid var(--clr-border, var(--clr-accent));
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

  .icon-details {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
</style>
