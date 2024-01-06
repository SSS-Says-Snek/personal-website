<div class="hero full-width">
  <slot />
</div>

<style>
  .hero {
    padding: 7rem 0;
    background-color: red;
    animation: hero-expand 1s forwards;
  }

  @keyframes hero-expand {
    from {
      width: 0%;
    }
    
    to {
      width: 100vw;
    }
  }
</style>
