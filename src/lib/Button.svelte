<script lang="ts">
  export let text: string;
  export let href: string = "";
</script>

<button type="button">
  <a href={href}>{text}</a>
</button>

<style>
  button {
    padding: 0.375em 0.125em;
    font-size: 2em;
    font-weight: 700;
    border-radius: 100vw;
    border: none;

    box-shadow: 0px 0px 20px hsl(var(--clr-hsl-mauve), 0.35);
    background-color: var(--clr-button, var(--clr-blue));
    color: var(--clr-black);
    cursor: pointer;

    transition: transform 200ms;
  }

  button:hover {
    transform: scale(1.05);
  }

  a {
    all: unset;
  }
</style>
