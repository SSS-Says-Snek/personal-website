<script lang="ts">
  import { genAnimationDelays } from "$lib";

  import Hero from "$lib/Hero.svelte";
  import SkillCard from "./SkillCard.svelte";

  import type { Subskill, Skill } from "./interfaces";

  function skillSorter(a: Subskill, b: Subskill) {
    if (a.percentage < b.percentage) { return 1; }
    else if (a.percentage > b.percentage) { return -1;}
    return 0;
  }

  const START_DELAY = 500;
  const DELAY_AMOUNT = 100;

  // Trust me it's not confusing at all :(
  let allSkills: Array<Skill> = [
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
          name: "Git/Github",
          percentage: 90,
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
      ],

      relatedSkills: [
        {
          name: "Python",
          percentage: 95,
          proficiency: "Advanced",
          borderColor: "var(--clr-mauve)",
          subskills: [
            {
              name: "Pygame",
              percentage: 80,
              tags: []
            },
            {
              name: "PyQt/PySide",
              percentage: 65,
              tags: []
            },
            {
              name: "Socket",
              percentage: 75,
              tags: []
            },
            {
              name: "Python C API",
              percentage: 60,
              tags: []
            },
            {
              name: "Discord.py",
              percentage: 55,
              tags: []
            }
          ]
        },

        {
          name: "C++",
          percentage: 65,
          proficiency: "Beginner-Intermediate",
          borderColor: "var(--clr-red)",
          subskills: [
            {
              "name": "Qt6",
              percentage: 0,
              tags: []
            }
          ]
        }
      ]
    },

    {
      name: "Music",
      percentage: 70,
      proficiency: "Intermediate-Advanced",
      subskills: [
        {
          name: "Piano",
          percentage: 80,
          tags: ["learning"]
        },
        {
          name: "Trombone",
          percentage: 68,
          tags: []
        },
        {
          name: "Music Theory",
          percentage: 64,
          tags: []
        }
      ],
      relatedSkills: []
    }
  ];

  let totalSkills = 0;
  for (let skill of allSkills) {
    skill.subskills.sort(skillSorter);

    for (let relatedSkill of skill.relatedSkills) {
      relatedSkill.subskills.sort(skillSorter);
    }
    totalSkills += 1 + skill.relatedSkills.length;
  }

  let cardDelays = genAnimationDelays(totalSkills, START_DELAY, DELAY_AMOUNT);
</script>

<Hero>
  <h1>My Skills</h1>
</Hero>

<div class="container">
  {#each allSkills as skill, idx}
    <SkillCard {...skill} animationDelayMs={cardDelays[idx]}/>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    max-width: 50rem;
    margin-inline: auto;
  }
</style>
