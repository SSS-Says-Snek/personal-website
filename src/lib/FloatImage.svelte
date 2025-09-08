<script lang="ts">
  let { src, alt, width, float = "left" }: { src: string, alt: string, width: number, float: string } = $props();
</script>

<img {src} {alt} {width} class="float-image float-{float}">

<style>
  img.float-image {
    border-radius: 1rem;
    box-shadow: none;
    border: none;
  }

  @media (width > 400px) {
    img.float-image {
      margin: 0rem 1rem;
    }

    .float-left {
      float: left;
    }

    .float-right {
      float: right;
    }
  }
</style>
