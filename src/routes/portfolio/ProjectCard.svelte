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

  export let title: string;
  export let date_created: string;
  export let description: string;
  export let img_src: string;
  export let img_alt: string;
  export let project_lang: string;
  export let authors: Array<{ name: string; link: string }> = [];

  let all_authors = [{ name: "Me", link: ""}].concat(authors);

  export let project_src: string = "";
  export let project_spotlight: string = "";
  export let project_docs: string = "";
  export let project_unfinished: boolean = false;

  const NUM_AUTHOR_DETAILS = 2;

  let extra_authors: Array<{ name: string; link: string }> = [];
  if (all_authors.length > NUM_AUTHOR_DETAILS) { // Gotta include myself
    for (let i = NUM_AUTHOR_DETAILS; i < all_authors.length; i++) {
      extra_authors.push(all_authors[i]);
    }
  }

  let extra_authors_tooltip = "";
  for (let i = 0; i < extra_authors.length; i++) {
    extra_authors_tooltip += extra_authors[i].name + (i == extra_authors.length - 1 ? "" : ", ");
  }
</script>

<div class="card">
  {#if project_unfinished}
    <div class="info-unfinished">
      <h3>Project in Progress</h3>
    </div>
  {/if}

  <div class="img-container"><img class="img-darken" src={img_src} alt={img_alt}></div>
  <div class="info">
    <h2 class="title">{title}</h2>

    <div class="details date">
      <div class="icon-container">
        <MdiCalendarToday style="color: var(--clr-mauve);"/>
        <h3>{date_created}</h3>
      </div>

      <div class="icon-container authors">
        <MdiAccountMultiple style="color: var(--clr-blue);"/>
        <div class="author-idk">
          {#each all_authors as author, idx}
            {#if idx < NUM_AUTHOR_DETAILS}
              <a href={author.link}>
                {author.name}{idx == Math.min(
                  all_authors.length - 1, NUM_AUTHOR_DETAILS - 1
                ) ? '' : ','} 
              </a>
            {/if}

          {/each}
        </div>

        {#if extra_authors.length > 0}
          <div class="extra-authors-tooltip" data-tooltip={extra_authors_tooltip}>
            <MdiPlusBox />
          </div>
        {/if}
      </div>
      
      <div class="icon-container lang">
        {#if project_src}
          {#if project_lang == "python"}
            <MdiLanguagePython />
          {:else if project_lang == "c++"}
            <MdiLanguageCpp />
          {:else if project_lang == "text"}
            <MdiFile />
          {/if}
        {:else}
          <MdiLightbulbQuestionOutline />
        {/if}
        <h3>{project_lang}</h3>
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
    transition: all 200ms;
  }
  a:hover {
    filter: brightness(0.7);
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .img-container {
    max-height: 300px;
    overflow: hidden;

    margin-bottom: 1rem;
  }

  .card {
    position: relative;
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
    animation: 1s ease card-fade forwards;
    animation-delay: calc(var(--animation-delay) * 1ms);
    opacity: 0;

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
  .extra-authors-tooltip:hover {
  }

  .extra-authors-tooltip::before {
    --scale: 0;

    content: attr(data-tooltip);
    font-size: 1rem;
    width: max-content;

    position: absolute;
    top: -15px;
    padding: 0.25rem;

    background: hsl(234, 13%, 31%);
    border-radius: 0.25rem;

    transform: translateX(-50%) translateY(-50%) scale(var(--scale));
    transform-origin: bottom center;
    transition: 200ms all;
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

  @keyframes card-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
