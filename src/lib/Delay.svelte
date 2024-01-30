<script lang="ts">
  export let fade_duration: number = 1;
  export let animation_delay_ms: number;
</script>

<div class="delay-anim"
  style="--fade-duration: {fade_duration}; --animation-delay: {animation_delay_ms};"
>
  <slot />
</div>

<style>
  .delay-anim {
    animation: calc(1s * var(--fade-duration, 1)) ease fade forwards;
    animation-delay: calc(var(--animation-delay) * 1ms);

    opacity: 0;
    width: 100%;
    height: 100%;
  }

  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
