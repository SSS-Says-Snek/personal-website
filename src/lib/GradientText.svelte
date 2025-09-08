<script lang="ts">
  let { startColor = "var(--clr-teal)", endColor = "var(--clr-blue)", size = "1rem", weight = "500", children } = $props();
</script>

<p style="--startColor: {startColor}; --endColor: {endColor}; --size: {size}; --weight: {weight};" class="gradient-text">{@render children?.()}</p>

<style>
.gradient-text {
  display: inline-block;

  background: linear-gradient(to right, var(--startColor), var(--endColor));
  background-clip: text;
  color: transparent;
  font-size: var(--size);
  font-weight: var(--weight);
}
</style>
