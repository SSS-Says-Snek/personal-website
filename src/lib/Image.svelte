<script lang="ts">
  export let src: string;
  export let alt: string;

  export let circular = true;
  export let translucent = false;
  let luminous = !translucent;
  export let width: string = "";
</script>

<img
  class:img-circular={circular}
  class:img-translucent={translucent}
  class:luminous
  src={src}
  alt={alt}
  width={width}
>

<style>
  .img-circular {
    object-fit: cover;
    clip-path: circle(closest-side);
  }

  .luminous {
    mix-blend-mode: luminosity;
  }

  .img-translucent {
    opacity: 50%;
  }

  /* .shadow { */
  /*   mix-blend-mode: luminosity; */
  /*   filter: drop-shadow(0px 5px */
  /*     var(--shadow-strength, 10px) */
  /*     var(--clr-shadow, hsl(var(--clr-hsl-text), 0.2))); */
  /* } */
</style>
