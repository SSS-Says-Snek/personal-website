<script lang="ts">
  import Hero from "$lib/Hero.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  const START_DELAY = 500;
  const DELAY_AMOUNT = 100;
  let cards = [
    {
      title: "Hisock",
      date_created: "Sep 2021",
      authors: [{
        link: "https://github.com/sheepy0125",
        name: "sheepy0125"
      }],
      description: "A higher level extension of Python's built-in socket module, with simpler and more efficient usages.",
      img_src: "/images/cards/hisock.png",
      img_alt: "Screenshot of an ongoing Connect Four game made with Hisock",

      project_lang: "python",
      project_src: "https://github.com/SSS-Says-Snek/hisock",
      project_spotlight: "https://www.youtube.com/watch?v: UVYoySkm8ZU",
      project_docs: "https://hisock.readthedocs.io",
    },

    {
      title: "Hisock Chat App",
      date_created: "Jul 2023",
      description: "A much-improved overhaul of a 2020 chat app I made, with video technology, direct messages, and global messages. Built with PyQt5 and hisock.",
      img_src: "/images/cards/hisock-chat-app.png",
      img_alt: "Screenshot of an ongoing Connect Four game made with Hisock",

      project_lang: "python",
      project_src: "https://github.com/SSS-Says-Snek/hisock-voip-app",
    },

    {
      title: "Hyprland Rice",
      date_created: "Dec 2023",
      description: "A complete customization of the Hyprland \"Window Manager\". Includes bar, app launcher, power menu, neovim, login manager, and terminal configurations.",
      img_src: "/images/cards/rice.png",
      img_alt: "Screenshot of the fully configured desktop",

      project_lang: "text",
      project_src: "https://github.com/SSS-Says-Snek/dotfiles"
    },

    {
      title: "ParaPac",
      date_created: "Jul 2021",
      authors: [
        {
          link: "https://github.com/avaxar",
          name: "Avaxar"
        },
        {
          link: "https://github.com/coolstuff123",
          name: "coolstuff123"
        }
      ],
      description: "A multidimensional Pac-Man spinoff, with a few twists. Made in 7 days for the 2021 Pygame Community Summer Team jam.",
      img_src: "/images/cards/parapac.png",
      img_alt: "Screenshot of ghosts chasing the player down",

      project_lang: "python",
      project_src: "https://github.com/SSS-Says-Snek/ParaPac",
      project_spotlight: "https://sss-says-snek.itch.io/parapac"
    },

    {
      title: "Dave's Anniversary",
      date_created: "Jul 2022",
      authors: [
        {
          link: "https://github.com/blankRiot96",
          name: "Axis"
        },
        {
          link: "https://github.com/pycoinfu",
          name: "disa"
        }
      ],
      description: "A 2D platformer game based on otherworldly dimensions and parkour. Made in 7 days for the 2022 Pygame Community Summer Team jam.",
      img_src: "/images/cards/daves-anniversary.png",
      img_alt: "Screenshot of a green dimension in game",

      project_lang: "python",
      project_src: "https://github.com/blankRiot96/Daves-Anniversary",
      project_spotlight: "https://sss-says-snek.itch.io/daves-anniversary"
    },

    {
      title: "Chunglang",
      date_created: "Feb 2023",
      description: "A high-level toy programming language designed for ease of use.",
      img_src: "/images/cards/chunglang.png",
      img_alt: "Screenshot of the Chunglang Programming Language source code",
      
      project_lang: "c++",
      project_src: "https://github.com/SSS-Says-Snek/chungussy-lang",
      project_unfinished: true
    }
  ]

  cards.sort((a, b) => {
    let dateA = new Date(`01 ${a.date_created}`);
    let dateB = new Date(`01 ${b.date_created}`);

    if (dateA > dateB) {
      return 1;
    } else if (dateA < dateB) {
      return -1;
    }
    return 0;
  })

  let delays: Array<string> = [];
  let delay = START_DELAY;
  for (let _ of cards) {
    delays.push(delay.toString());
    delay += DELAY_AMOUNT;
  }
</script>

<Hero>
  <h1>Portfolio</h1>
</Hero>

<div class="cards">
  {#each cards as card, idx}
    <ProjectCard {...card} --animation-delay={delays[idx]}/>
  {/each}
</div>

<style>
  .cards {
    display: grid;
    gap: 3rem;
  }

  @media (width > 1000px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
