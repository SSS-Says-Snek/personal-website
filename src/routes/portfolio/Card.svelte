<script lang="ts">
  import MdiCalendarToday from '~icons/mdi/calendar-today'
  import MdiAccountMultiple from '~icons/mdi/account-multiple'
  import MdiApplicationBracketsOutline from '~icons/mdi/application-brackets-outline'
  import MdiYoutube from '~icons/mdi/youtube'
  import MdiFileDocument from '~icons/mdi/file-document'
  import MdiLanguagePython from '~icons/mdi/language-python'
  import MdiLightbulbQuestionOutline from '~icons/mdi/lightbulb-question-outline'

  export let title: string;
  export let date_created: string;
  export let description: string;
  export let img_src: string;
  export let img_alt: string;
  export let project_lang: string;
  export let authors: string = "";


  export let project_src: string = "";
  export let project_spotlight: string = "";
  export let project_docs: string = "";
</script>

<div class="card">
  <div class="top-rainbow" />
  <div class="img-container"><img class="img-darken" src={img_src} alt={img_alt}></div>
  <div class="info">
    <h2 class="title">{title}</h2>

    <div class="details">
      <div class="icon-container">
        <MdiCalendarToday style="color: var(--clr-mauve);"/>
        <h3 class="date">{date_created}</h3>
      </div>

      <div class="icon-container">
        <MdiAccountMultiple style="color: var(--clr-blue);"/>
        <h3 class="authors">Me{authors ? ', ' : ''}{authors}</h3>
      </div>
      
      <div class="icon-container">
        {#if project_src}
          {#if project_lang == "python"}
            <MdiLanguagePython style="color: var(--clr-peach)" />
          {/if}
        {:else}
          <MdiLightbulbQuestionOutline />
        {/if}
        <h3 class="lang">{project_lang}</h3>
      </div>
    </div>

    <div class="links">
      {#if project_src}
        <a href={project_src}>
          <button class="button-link icon-container">
            <MdiApplicationBracketsOutline />
            Source Code
          </button>
        </a>
      {/if}
      {#if project_spotlight}
        <a href={project_spotlight}>
          <button class="button-link icon-container">
            <MdiYoutube />
            Spotlight
          </button>
        </a>
      {/if}
      {#if project_docs}
        <a href={project_docs}>
          <button class="button-link icon-container">
            <MdiFileDocument />
            Docs
          </button>
        </a>
      {/if}
    </div>

    <p class="description">
      {description}
    </p>
  </div>
</div>


<style>
  button {
    all: unset;
  }
  a {
    all: unset;
    cursor: pointer;
  }

  img {
    aspect-ratio: 4 / 3;
    object-fit: contain;
  }

  .img-container {
    max-height: 300px;
    overflow: hidden;

    margin-bottom: 1rem;
  }

  .card {
    border-radius: 1rem;
    border: double 3px transparent;
    overflow: hidden;

    background: linear-gradient(135deg,
      var(--clr-black),
      var(--clr-mantle),
      var(--clr-surface)
    ),
      conic-gradient(
        from var(--border-angle, 0deg),
        var(--clr-red),
        var(--clr-peach),
        var(--clr-green),
        var(--clr-sky),
        var(--clr-blue),
        var(--clr-mauve),
        var(--clr-red)
      );
    background-origin: border-box;
    background-clip: content-box, border-box; 
  }

  /* CONTAINERS */
  .info {
    display: grid;

    place-items: center;
    text-align: center;

    gap: 0.5rem;
    padding-inline: 1rem;
  }

  .details {
    display: flex;
    gap: 1rem;
  }

  .icon-container {
    display: flex;
    gap: 0.125rem;
  }

  .links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
  }

  /* EMBELLISHMENTS */
  /* .top-rainbow {width: 100%; */
  /*   height: 10px; */
  /*   border-radius: 4px; */
  /*   background-image: repeating-linear-gradient(to right, */
  /*     #c4e17f 0px, #c4e17f 50px, */
  /*     #f7fdca 50px, #f7fdca 100px, */
  /*     #fad071 100px, #fad071 150px, */
  /*     #f0766b 150px, #f0766b 200px, */
  /*     #db9dbe 200px, #db9dbe 250px, */
  /*     #c49cdf 250px, #c49cdf 300px, */
  /*     #6599e2 300px, #6599e2 350px, */
  /*     #61c2e4 350px, #61c2e4 400px); */
  /*   background-size: 100% 10px; */
  /* } */

  .date, .authors, .lang {
    font-weight: 600;
  }

  .date {
    color: var(--clr-mauve);
  }

  .authors {
    color: var(--clr-blue);
  }

  .lang {
    text-transform: capitalize;
    color: var(--clr-peach);
  }

  .title {
    font-size: 2.5rem;
  }

  .description {
    margin-block: 1rem;
  }

  .img-darken {
    filter: brightness(70%);
  }

  .button-link {
    background-color: hsl(var(--clr-hsl-accent), 1);
    color: var(--clr-surface);

    border-radius: 0.25rem;
    padding: 0.25rem 1rem;
    font-weight: 600;

    transition: scale 200ms;
  }
  .button-link:hover {
    scale: 1.1;
  }
</style>
