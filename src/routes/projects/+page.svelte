<script lang="ts">
  import Hero from "$lib/Hero.svelte";
  import Delay from "$lib/Delay.svelte";
  import ProjectCard from "./ProjectCard.svelte";
    import { genAnimationDelays } from "$lib";

  const START_DELAY = 500;
  const DELAY_AMOUNT = 100;
  let cards = [
    {
      title: "Hisock",
      dateCreated: "Sep 2021",
      authors: [{
        link: "https://github.com/sheepy0125",
        name: "sheepy0125"
      }],
      description: "A higher level extension of Python's built-in socket module, with simpler and more efficient usages.",
      imgSrc: "/images/cards/hisock.png",
      imgAlt: "Screenshot of an ongoing Connect Four game made with Hisock",

      projectLang: "python",
      projectSrc: "https://github.com/SSS-Says-Snek/hisock",
      projectSpotlight: "https://www.youtube.com/watch?v: UVYoySkm8ZU",
      projectDocs: "https://hisock.readthedocs.io",
    },

    {
      title: "Hisock Chat App",
      dateCreated: "Jul 2023",
      description: "A much-improved overhaul of a 2020 chat app I made, with video technology, direct messages, and global messages. Built with PyQt5 and hisock.",
      imgSrc: "/images/cards/hisock-chat-app.png",
      imgAlt: "Screenshot of an ongoing Connect Four game made with Hisock",

      projectLang: "python",
      projectSrc: "https://github.com/SSS-Says-Snek/hisock-voip-app",
    },

    {
      title: "Hyprland Rice",
      dateCreated: "Dec 2023",
      description: "A complete customization of the Hyprland \"Window Manager\". Includes bar, app launcher, power menu, neovim, login manager, and terminal configurations.",
      imgSrc: "/images/cards/rice.png",
      imgAlt: "Screenshot of the fully configured desktop",

      projectLang: "text",
      projectSrc: "https://github.com/SSS-Says-Snek/dotfiles"
    },

    {
      title: "ParaPac",
      dateCreated: "Jul 2021",
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
      imgSrc: "/images/cards/parapac.png",
      imgAlt: "Screenshot of ghosts chasing the player down",

      projectLang: "python",
      projectSrc: "https://github.com/SSS-Says-Snek/ParaPac",
      projectSpotlight: "https://sss-says-snek.itch.io/parapac"
    },

    {
      title: "Dave's Anniversary",
      dateCreated: "Jul 2022",
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
      imgSrc: "/images/cards/daves-anniversary.png",
      imgAlt: "Screenshot of a green dimension in game",

      projectLang: "python",
      projectSrc: "https://github.com/blankRiot96/Daves-Anniversary",
      projectSpotlight: "https://sss-says-snek.itch.io/daves-anniversary"
    },

    {
      title: "Chunglang",
      dateCreated: "Feb 2023",
      description: "A high-level toy programming language designed for ease of use.",
      imgSrc: "/images/cards/chunglang.png",
      imgAlt: "Screenshot of the Chunglang Programming Language source code",
      
      projectLang: "c++",
      projectSrc: "https://github.com/SSS-Says-Snek/chungussy-lang",
      projectUnfinished: true
    },

    {
      title: "Chip-8 Emulator",
      dateCreated: "Oct 2022",
      description: "A simple Chip-8 console emulator made in Rust.",
      imgSrc: "/images/cards/chip8.png",
      imgAlt: "Screenshot of Corax's Opcode Chip-8 test being emulated",

      projectLang: "rust",
      projectSrc: "https://github.com/SSS-Says-Snek/chip-8"
    },

    {
      title: "WHAP Mock Website",
      dateCreated: "Dec 2022",
      description: "A fake website for an AP World History project. It was designed to educate about several global trading routes centuries ago.",
      imgSrc: "/images/cards/whap-website.png",
      imgAlt: "Screenshot of the website with 3 subsections linking to other subpages",
      
      projectLang: "svelte",
      projectSrc: "https://github.com/SSS-Says-Snek/whap-project",
      projectSpotlight: "https://whap-project.vercel.app"
    }
  ]

  cards.sort((a, b) => {
    let dateA = new Date(`01 ${a.dateCreated}`);
    let dateB = new Date(`01 ${b.dateCreated}`);

    if (dateA > dateB) {
      return 1;
    } else if (dateA < dateB) {
      return -1;
    }
    return 0;
  })

  let delays = genAnimationDelays(cards.length, START_DELAY, DELAY_AMOUNT);
</script>

<Hero>
  <h1>Projects</h1>
</Hero>

<div class="cards">
  {#each cards as card, idx}
    <Delay animationDelayMs={delays[idx]}>
      <ProjectCard {...card}/>
    </Delay>
  {/each}
</div>

<!-- <h2>Non-Programming Projects</h2> -->

<style>
  h2 {
    padding: 5px;
    text-align: center;
  }
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
