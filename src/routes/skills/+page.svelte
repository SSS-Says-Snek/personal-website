<script lang="ts">
  import Hero from "$lib/Hero.svelte";
  import PercentBar from "./PercentBar.svelte";

  interface skill { name: string, percentage: number, tags: Array<string> };

  function skillSorter(a: skill, b: skill) {
    if (a.percentage < b.percentage) { return 1; }
    else if (a.percentage > b.percentage) { return -1;}
    return 0;
  }

  let allSkills = [
    {
      name: "Programming",
      percentage: 85,
      proficiency: "Proficient",

      subskills: [
        {
          name: "Python",
          percentage: 95,
          tags: []
        },
        {
          name: "Pygame",
          percentage: 80,
          tags: []
        },
        {
          name: "Git/Github",
          percentage: 90,
          tags: []
        },
        {
          name: "PyQt/PySide",
          percentage: 65,
          tags: []
        },
        {
          name: "HTML/CSS",
          percentage: 80,
          tags: []
        },
        {
          name: "C++",
          percentage: 65,
          tags: ["learning"]
        },
        {
          name: "C",
          percentage: 55,
          tags: []
        },
        {
          name: "Rust",
          percentage: 40,
          tags: []
        },
        {
          name:"SQL",
          percentage: 40,
          tags: []
        },
        {
          name:"Java",
          percentage: 45,
          tags: ["learning"]
        },

        {
          name: "Networking",
          percentage: 65,
          tags: []
        },
        {
          name: "Gamedev",
          percentage: 75,
          tags: []
        }
      ]
    },

    {
      name: "Music",
      percentage: 60,
      proficiency: "Intermediate-Advanced",
      subskills: [

      ]
    }
  ];

  for (let skill of allSkills) {
    skill.subskills.sort(skillSorter);
  }
</script>

<Hero>
  <h1>My Skills</h1>
</Hero>

<div class="container">
  {#each allSkills as skill}
    <section class="skill-group-info">
      <div class="heading">
        <h2>{skill.name}</h2>

        <div class="skill-proficiency">
          <h3>{skill.proficiency}</h3>
          <PercentBar width="275" percentage={skill.percentage}/>
        </div>
      </div>

      <ul class="subskills">
        {#each skill.subskills as subskill}
          <li class="subskill">
            <h4>{subskill.name}</h4>
            <PercentBar
              percentage={subskill.percentage}
              learning={subskill.tags.includes("learning")} 
            />
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  h2 {
    font-size: 2rem;
  }

  section {
    border-radius: 8px;
    border: 2px solid transparent;
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
    background-clip: padding-box, border-box; 

    padding: 1rem;
  }

  :global(body) {
    --max-content-size: 50rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
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

  .skill-proficiency h3 {
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

  .subskill h4 {
    font-weight: 600;
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

    .skill-proficiency h3 {
      display: unset;
    }

    .subskill {
      display: flex;
      gap: 1rem;
    }

  }
</style>
