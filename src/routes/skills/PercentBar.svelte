<script lang="ts">
  export let height: string = "20";
  export let width: string = "200";

  export let percentage: number = 0;

  const DEFAULT_COLOR = "var(--clr-mauve)";
  export let color: string = DEFAULT_COLOR;

  export let learning: boolean = false;
  const LEARNING_TEXT = learning ? "Learning.." : "";

  console.log(LEARNING_TEXT);

  if (color == DEFAULT_COLOR) {
    if (percentage > 75) { color = "var(--clr-mauve)"; }
    else if (percentage > 60) { color = "var(--clr-green)"; }
    else if (percentage > 40) { color = "var(--clr-yellow)"; }
    else { color = "var(--clr-red)"; }
  }
</script>

<div class="percentage-bar"
  style="--height: {height}; --width: {width}; --bar-color: {color}; --percent: {percentage}; --learning: '{LEARNING_TEXT}'">
</div>

<style>
  .percentage-bar {
    --bar-height: calc(1px * var(--height));
    --bar-width: calc(1px * var(--width));

    position: relative;

    height: var(--bar-height);
    width: var(--bar-width);
    overflow: hidden;

    background: var(--clr-base);
    border-radius: 8px;
    border: 2px solid var(--clr-accent);
  }
  .percentage-bar::before {
    content: var(--learning, "");
    position: absolute;

    display: grid;
    align-items: center;
    inset: 0;

    /* not really 100% cuz the border radius */
    width: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    animation: percentage-slide 1s forwards;

    background: var(--bar-color);
    color: var(--clr-base);

    font-weight: 600;
    font-size: 0.75rem;
    text-align: center;
  }

  @keyframes percentage-slide {
    from { width: 0; }
    to { width: calc((var(--percent, 50) + 2) / 100 * var(--bar-width)); }
  }

</style>
