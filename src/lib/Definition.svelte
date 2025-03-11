<script lang="ts">
  import MaterialSymbolsDictionary from '~icons/material-symbols/dictionary';

  let { children } = $props();
</script>

<div class="definition-callout">
  <div class="callout-header">
    <MaterialSymbolsDictionary style="color: var(--clr-red);" />
    <p>Definition</p>
  </div>
  {@render children?.()}
</div>

<style>
  .definition-callout {
    padding: 1rem;
    margin-block: 1rem;
    border: 1px solid var(--clr-mauve);
    border-radius: 0.5rem;
    background: hsl(var(--clr-hsl-mauve), 0.05);
  }

  .callout-header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 1.375rem;
    margin-bottom: 1rem;
  }

  .callout-header p {
    color: var(--clr-red);
    font-weight: 700;
  }
</style>
