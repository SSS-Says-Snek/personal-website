<script lang="ts">
  let { children } = $props();
</script>

<div class="quad">
  {@render children?.()}
</div>

<style>
  .quad {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
</style>
