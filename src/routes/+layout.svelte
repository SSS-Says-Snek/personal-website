<script lang="ts">
  import { onMount } from 'svelte';
  import './app.css';

  let visible = false;

  function onNavClick() {
    let primaryNav = document.querySelector(".right");
    let button = document.querySelector(".mobile-hamburger");
    let modalBackground = document.querySelector(".modal-background");

    if (visible) {
      visible = false;
    } else {
      visible = true;
    }
    primaryNav?.setAttribute("data-visible", visible.toString());
    button?.setAttribute("aria-expanded", visible.toString());
    modalBackground?.setAttribute("data-in-effect", visible.toString());
  }

  onMount(() => {
    let resizeTimer: any;
    window.addEventListener("resize", () => {
      let primaryNav = document.querySelector(".right");
      primaryNav?.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        primaryNav?.classList.remove("resize-animation-stopper");
      }, 400);
    });
  })
</script>

<nav class="full-width">
  <a href="/" class="home">Home</a>
  <button onclick={onNavClick} aria-controls="primary-navigation" aria-expanded="false" class="mobile-hamburger"><span class="sr-only">Menu</span></button>
  <div data-visible="false" id="primary-navigation" class="right">
    <a href="/projects" onclick={onNavClick}>Projects</a>
    <a href="/about-me" onclick={onNavClick}>About Me</a>
    <a href="/skills" onclick={onNavClick}>Skills</a>
    <a href="/blog" onclick={onNavClick}>Blog</a>
    <a href="https://yunticu.s4aysnek.com">Yünticu</a>
  </div>
</nav>

<!-- can only click on modal when nav is visible; call onNavClick again to hide  !-->
<div class="modal-background" onclick={onNavClick} aria-hidden="true"></div>
<slot />

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.325rem 0;
  position: absolute;
  left: 0;
  z-index: 100;
}

nav > a {
  margin-left: 1rem;
}
nav > div:last-child {
  margin-right: 1rem;
}
nav > div a {
  font-size: 1.5rem;
  font-weight: 600;
}

a {
  all: unset;
  cursor: pointer;

  transition: scale 200ms;

  counter-increment: counter;
}

a:hover {
  scale: 1.1;
}

:global(.modal-background[data-in-effect="true"]) {
  position: absolute;
  inset: 0;
  z-index: 1;

  /*background-color: rgba(0, 0, 0, 0.3);*/
}

.mobile-hamburger {
  position: absolute;

  border: 0;
  width: 2.5rem;
  background-image: url("/images/icons/hamburger.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;

  aspect-ratio: 1;
  top: 0;
  right: 1rem;
  z-index: 9999;
}

.home {
  font-size: 1.5rem;
  font-weight: 700;
}

/* Actual "navbar"*/
.right {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  inset: 0 0 0 30%;
  width: 70vw;

  padding: 10rem 2rem;

  background: hsl(0, 0%, 0%, 0.2);
  backdrop-filter: blur(1rem);

  counter-reset: counter;
  counter-set: counter -1; /* haha start at 0 */

  transform: translateX(100%);
  transition: transform 300ms ease-out;
}

:global(.right[data-visible="true"]) {
  transform: translateX(0%);
}

:global(.mobile-hamburger[aria-expanded="true"]) {
  background-image: url("/images/icons/close-hamburger.svg");
}

:global(.resize-animation-stopper) {
  animation: none !important;
  transition: none !important;
}

@media (max-width: 599px) {
  .right a::before {
    content: counter(counter, decimal-leading-zero);
    margin-right: 0.5rem;
    font-weight: 900;
  }
}

@media (min-width: 600px) {
  nav {
    background-color: hsl(var(--clr-hsl-base), 0.2);
  }

  nav > div a {
    font-size: 1rem;
  }

  .right {
    position: unset;

    flex-direction: row;
    gap: 2rem;

    padding: unset;
    background: unset;
    backdrop-filter: unset;
    width: unset;
    inset: unset;
    transform: translateX(0%);
  }

  .mobile-hamburger {
    display: none;
  }
}

</style>
