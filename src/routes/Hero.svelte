<div class="hero full-width">
  <slot />
</div>

<style>
  @keyframes hero-bg {
    from {background-position: 10% 0%;}
    to {background-position: 100% 0%;}
  }

  @keyframes hero-text {
    to {color: var(--clr-text);}
  }

  @keyframes hero-fade {
    to {filter: brightness(50%);}
  }

  .full-width {
    width: 100vw;
    margin-left: calc((100% - 100vw) / 2);
  }

  .hero {
    position: relative;
    /* display: flex; */
    /* align-items: center; */
    flex-direction: column;

    padding: 7rem 0;
    text-align: center;

    color: var(--clr-black);
    animation: hero-text 4s forwards;
  }

  .hero::before {
    content: "";
    position: absolute;
    z-index: -1;
    background:
      linear-gradient(45deg, var(--clr-mauve), var(--clr-accent), var(--clr-teal), var(--clr-blue));
    background-size: 200% 100%;

    --mask:
      radial-gradient(111.80px at 50% calc(100% - 150.00px),#000 99%,#0000 101%) calc(50% - 100px) 0/200px 100%,
      radial-gradient(111.80px at 50% calc(100% + 100.00px),#0000 99%,#000 101%) 50% calc(100% - 50px)/200px 100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);

    animation: hero-bg 8s ease alternate infinite, hero-fade 4s forwards;

    inset: 0;
  }

</style>
