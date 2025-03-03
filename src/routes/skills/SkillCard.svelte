<script lang="ts">
  import PercentBar from "./PercentBar.svelte";

  import MdiKeyboardArrowDown from '~icons/mdi/keyboard-arrow-down';

  import type { Subskill, RelatedSkill } from "$lib/interfaces";

  export let proficiency: string;
  export let percentage: number;
  export let name: string;
  export let subskills: Array<Subskill>;
  export let relatedSkills: Array<RelatedSkill>;

  export let borderColor = "";

  let openedRelatedSkills = false;
</script>

<section class="skill-group-info"
  style="{borderColor !== '' ? `--border-color: ${borderColor}` : ''}"
>
  <div class="heading">
    <p>{name}</p>

    <div class="skill-proficiency">
      <p>{proficiency}</p>
      <PercentBar width="275" percentage={percentage}/>
    </div>
  </div>

  <ul class="subskills">
    {#each subskills as subskill}
      <li class="subskill">
        <p>{subskill.name}</p>
        <PercentBar
          percentage={subskill.percentage}
          learning={subskill.tags.includes("learning")} 
        />
      </li>
    {/each}
  </ul>

  {#if (relatedSkills.length > 0)}
    <div class="related-skills-container">
      <button class="related-skills-toggle" on:click={() => {openedRelatedSkills = !openedRelatedSkills}}>
        <p>{openedRelatedSkills ? "Less" : "More"} on {name}</p>
        <MdiKeyboardArrowDown style="font-size: 2rem;" />
      </button>

      <div class="related-skills" class:related-skills-is-toggled={openedRelatedSkills}>
        <div>
          {#each relatedSkills as relatedSkill}
            <svelte:self {...relatedSkill} relatedSkills={[]} />
          {/each}
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  .heading > p {
    font-size: 2rem;
    font-weight: 700;
  }

  section {
    border-radius: 8px;
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
    border: 2px solid var(--border-color, transparent);
    background-origin: border-box;
    background-clip: padding-box, border-box; 

    padding: 1rem;
  }

  .skill-group-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill-proficiency {
    display: flex;
    align-items: center;
  }

  .skill-proficiency p {
    font-weight: 600;
    display: none;
  }

  .subskills {
    padding: 0;
    list-style-type: none;

    display: grid;
    place-items: center;
    gap: 1.25rem;
  }

  .subskill {
    text-align: center;
  }

  .subskill p {
    font-weight: 600;
  }

  .related-skills-toggle {
    all: unset;
    cursor: pointer;
    user-select: none;

    display: grid;
    place-items: center;

    font-weight: 900;
    align-self: center;
    transition: all 200ms;
  }

  .related-skills-toggle:hover {
    scale: 1.1;
  }

  .related-skills {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 500ms;
  }

  .related-skills > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    overflow: hidden;
  }

  .related-skills-is-toggled {
    grid-template-rows: 1fr;
  }

  .related-skills-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  @media (width > 600px) {
    .subskills {
      max-width: fit-content;
      grid-template-columns: 1fr 1fr;
      place-items: end;
      margin-inline: auto;
    }
  }

  @media (width > 800px) {
    .heading {
      flex-direction: row;
      justify-content: space-between;
    }

    .skill-proficiency {
      flex-direction: row;
      gap: 0.5rem;
    }

    .skill-proficiency p {
      display: unset;
    }

    .subskill {
      display: flex;
      gap: 1rem;
    }

  }
</style>

