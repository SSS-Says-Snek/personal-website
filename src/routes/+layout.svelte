<script>
  import './app.css';
</script>

<nav class="full-width">
  <a href="/" class="home">Home</a>
  <div class="right">
    <a href="/projects">Projects</a>
    <a href="/about-me">About Me</a>
    <a href="/skills">Skills</a>
  </div>
</nav>

<slot />

<style>
  nav {
    background-color: hsl(var(--clr-hsl-base), 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.325rem 0;
    position: absolute;
    left: 0;
    z-index: 1;
  }

  nav > a {
    margin-left: 1rem;
  }
  nav > div:last-child {
    margin-right: 1rem;
  }
  nav > div a {
    font-weight: 600;
  }

  a {
    all: unset;
    cursor: pointer;

    transition: scale 200ms;
  }
  a:hover {
    scale: 1.1;
  }

  .home {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .right {
    display: flex;
    gap: 2rem;
  }
</style>
