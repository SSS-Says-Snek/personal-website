<script lang="ts">
  export let fadeDuration: number = 1;
  export let animationDelayMs: number;
</script>

<div class="delay-anim"
  style="--fade-duration: {fadeDuration}; --animation-delay: {animationDelayMs};"
>
  <slot />
</div>

<style>
  .delay-anim {
    animation: calc(1s * var(--fade-duration, 1)) ease fade forwards;
    animation-delay: calc(var(--animation-delay) * 1ms);

    opacity: 0;
  }

  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
