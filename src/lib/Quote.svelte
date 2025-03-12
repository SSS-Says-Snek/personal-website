<script lang="ts">
  let { children, type = "quote" } = $props();
</script>

<div class="blockquote {type}">
  <div class="content">
    {@render children?.()}
  </div>
</div>

<style>
  .blockquote .content {
    color: var(--clr-subtext);
  }

  .blockquote {
    padding-left: 2rem;
    margin-block: 1rem;
    position: relative;
    overflow: hidden;
  }

  .blockquote::before,
  .blockquote::after {
    position: absolute;
  }

  .blockquote::before {
    left: 0;
  }

  .blockquote::after {
    content: "";
    left: 5px;
    top: 25px;
    width: 2px;
    height: 100%;
    background-color: currentColor;
  }

  .quote {
    color: var(--clr-mauve);
  }

  .quote::before {
    content: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23cba6f7'><path d='M9.983 3v7.391C9.983 16.095 6.252 19.961 1 21l-.995-2.151C2.437 17.932 4 15.211 4 13H0V3h9.983zM24 3v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151C16.437 17.932 18 15.211 18 13h-3.983V3H24z'/></svg>");
  }

  .note {
    color: var(--clr-blue);
  }

  .note::before {
    content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%2389b4fa" viewBox="2.5 2.72 19.03 19.02"><path d="M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12l5.3 5.31l2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11l2.56.28l.18 2.29l2.28.17l.29 2.56l8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79l-.24-2.16l-2.31-.17l-.18-2.32"></path></svg>');
  }
</style>
