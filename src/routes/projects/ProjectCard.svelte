<script lang="ts">
  import MdiCalendarToday from '~icons/mdi/calendar-today'
  import MdiAccountMultiple from '~icons/mdi/account-multiple'
  import MdiApplicationBracketsOutline from '~icons/mdi/application-brackets-outline'
  import MdiYoutube from '~icons/mdi/youtube'
  import MdiFileDocument from '~icons/mdi/file-document'
  import MdiLanguagePython from '~icons/mdi/language-python'
  import MdiLightbulbQuestionOutline from '~icons/mdi/lightbulb-question-outline'
  import MdiFile from '~icons/mdi/file'
  import MdiLanguageCpp from '~icons/mdi/language-cpp'
  import MdiPlusBox from '~icons/mdi/plus-box';
  import MdiLanguageRust from '~icons/mdi/language-rust'
  import MdiLanguageJava from '~icons/mdi/language-java';

  export let title: string;
  export let dateCreated: string;
  export let description: string;
  export let imgSrc: string;
  export let imgAlt: string;
  export let projectLang: string;
  export let authors: Array<{ name: string; link: string }> = [];

  let allAuthors = [{ name: "Me", link: ""}].concat(authors);

  export let projectSrc: string = "";
  export let projectSpotlight: string = "";
  export let projectDocs: string = "";
  export let projectUnfinished: boolean = false;

  const NUM_AUTHOR_DETAILS = 2;
  let extraAuthors: Array<{ name: string; link: string }> = [];
  if (allAuthors.length > NUM_AUTHOR_DETAILS) { // Gotta include myself
    for (let i = NUM_AUTHOR_DETAILS; i < allAuthors.length; i++) {
      extraAuthors.push(allAuthors[i]);
    }
  }

  let extraAuthorsTooltip = "";
  for (let i = 0; i < extraAuthors.length; i++) {
    extraAuthorsTooltip += extraAuthors[i].name + (i == extraAuthors.length - 1 ? "" : ", ");
  }
</script>


<div class="card">
  {#if projectUnfinished}
    <div class="info-unfinished">
      <h3>Project in Progress</h3>
    </div>
  {/if}

  <div class="img-container"><img class="img-darken" src={imgSrc} alt={imgAlt}></div>
  <div class="info">
    <h2 class="title">{title}</h2>

    <div class="details date">
      <div class="icon-container">
        <MdiCalendarToday style="color: var(--clr-mauve);"/>
        <h3>{dateCreated}</h3>
      </div>

      <div class="icon-container authors">
        <MdiAccountMultiple style="color: var(--clr-blue);"/>
        <div class="author-idk">
          {#each allAuthors as author, idx}
            {#if idx < NUM_AUTHOR_DETAILS}
              <a href={author.link}>
                {author.name}{idx == Math.min(
                  allAuthors.length - 1, NUM_AUTHOR_DETAILS - 1
                ) ? '' : ','} 
              </a>
            {/if}

          {/each}
        </div>

        {#if extraAuthors.length > 0}
          <div class="extra-authors-tooltip" data-tooltip={extraAuthorsTooltip}>
            <MdiPlusBox />
          </div>
        {/if}
      </div>

      <div class="icon-container lang">
        {#if projectSrc}
          {#if projectLang == "python"}
            <MdiLanguagePython />
            {:else if projectLang == "c++"}
            <MdiLanguageCpp />
            {:else if projectLang == "text"}
            <MdiFile />
            {:else if projectLang == "rust"}
            <MdiLanguageRust />
            {:else if projectLang == "java"}
            <MdiLanguageJava />
          {/if}
        {:else}
          <MdiLightbulbQuestionOutline />
        {/if}
        <h3>{projectLang}</h3>
      </div>
    </div>

    <div class="links">
      {#if projectSrc}
        <a href={projectSrc}>
          <button class="button-link icon-container">
            <MdiApplicationBracketsOutline />
            Source Code
          </button>
        </a>
      {/if}
      {#if projectSpotlight}
        <a href={projectSpotlight}>
          <button class="button-link icon-container">
            <MdiYoutube />
            Spotlight
          </button>
        </a>
      {/if}
      {#if projectDocs}
        <a href={projectDocs}>
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
    transition: all 200ms;
  }
  a:hover {
    filter: brightness(0.7);
  }

  img {
    width: 100%;
    height: 300px;

    object-fit: cover;
    object-position: 0% 0%;
  }

  .img-container {
    overflow: hidden;

    margin-bottom: 1rem;
  }

  .card {
    position: relative;
    border-radius: 1rem;
    border: double 3px transparent;
    overflow: hidden;
    height: 100%;

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

    transition: all 400ms;
  }
  .card:hover {
    scale: 1.05;
    box-shadow: 0px 0px 40px hsl(var(--clr-hsl-mauve), 0.2);
  }

  /* CONTAINERS */
  .info {
    display: grid;

    place-items: center;
    text-align: center;

    gap: 0.5rem;
    padding-inline: 1rem;
  }

  .info-unfinished {
    position: absolute;
    background-color: hsl(var(--clr-hsl-peach), 0.7);
    z-index: 1;

    left: 0;
    right: 0;

    text-align: right;
    font-weight: 700;
    font-style: italic;
    padding: 0.25rem 1rem;
  }

  .details {
    display: flex;
    gap: 1rem;
    flex-flow: wrap;
    justify-content: center;
  }

  .icon-container {
    display: flex;
    gap: 0.125rem;
    align-items: center;
  }

  .links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
  }

  /* EMBELLISHMENTS */
  .date, .authors, .lang {
    font-weight: 600;
  }

  .date {
    color: var(--clr-mauve);
  }

  .authors {
    color: var(--clr-blue);
  }

  .author-idk {
    display: flex;
    gap: 0.5ch;
  }

  .extra-authors-tooltip {
    position: relative;
    margin-left: 0.25ch;

    font-size: 0.75em;

    transition: all 200ms;
  }

  .extra-authors-tooltip::before {
    --scale: 0;

    content: attr(data-tooltip);
    width: max-content;

    position: absolute;
    top: -15px;
    padding: 0.25rem;

    background: var(--clr-blue);
    color: var(--clr-base);
    border-radius: 0.25rem;

    font-size: 1rem;

    transform: translateX(-50%) translateY(-50%) scale(var(--scale));
    transform-origin: bottom center;
    transition: 100ms all;
  }
  .extra-authors-tooltip:hover::before,
  .extra-authors-tooltip:active::before {
    --scale: 1;
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
