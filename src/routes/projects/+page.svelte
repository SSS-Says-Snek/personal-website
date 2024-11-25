<script lang="ts">
  import type {Card} from "$lib/interfaces"

  import Hero from "$lib/Hero.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import PageEntrance from "$lib/PageEntrance.svelte";

  const START_DELAY = 500;
  let progCards = [
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
    },

    {
      title: "Cryptography GUI Tool",
      dateCreated: "Mar 2024",
      description: "A GUI made with Swing to showcase several crucial cryptography algorithms, including RSA and AES-128/192/256.",
      imgSrc: "/images/cards/cryptography-gui-tool.png",
      imgAlt: "A screenshot of the GUI in session. The tool is encrypting Lorem Ipsum with a randomly generated key",

      projectLang: "java",
      projectSrc: "https://github.com/SSS-Says-Snek/cryptography-gui-tool"
    },

    {
      title: "Diurnals",
      dateCreated: "Aug 2024",
      description: "A tool written in GTK that pops up regularly on your desktop to remind you what tasks on Todoist are due today. Configurable and simple.",
      imgSrc: "/images/cards/todoist-dailies.png",
      imgAlt: "Screenshot of Todoist Dailies in action with 2 tasks due today",

      projectLang: "python",
      projectSrc: "https://github.com/SSS-Says-Snek/todoist-dailies",
      projectDownload: "https://flathub.org/apps/io.github.sss_says_snek.diurnals"
    },
  ];

  let nonProgCards = [
    {
      title: "Yünticu",
      dateCreated: "Feb 2024",
      description: "A constructed language (conlang) that many inhabitants of the fictional Yünticu world speak on a daily basis.",
      imgSrc: "/images/cards/yünticu.png",
      imgAlt: "Screenshot of a sample of text, written in the Yünticu writing script",

      projectLang: "text",
      projectDocs: "https://hurricane-cheque-70b.notion.site/Proto-Y-nticu-698ed26f640e4914823ff568b7127802",
      projectSpotlight: "https://docs.google.com/presentation/d/1ZyT7fftf-RpGdJmcLkWA9q_GjT6X4bQHc41IY0dGEl4/edit?usp=sharing"
    },

    {
      title: "Cürang",
      dateCreated: "Apr 2024",
      description: "A fictional universe that incorporates the world of Yünticu and the language of Yünticu and expands it with a plethora of vastly unique cultures and an rich history and storyline.",
      imgSrc: "/images/cards/cürang.png",
      imgAlt: "Screenshot of an Obsidian graph showing the complexity of the Cürang project",

      projectLang: "text",
      projectUnfinished: true
    }
  ];

  function sortCards(list: Card[]) {
    list.sort((a, b) => {
      let dateA = new Date(`01 ${a.dateCreated}`);
      let dateB = new Date(`01 ${b.dateCreated}`);

      if (dateA > dateB) {
        return 1;
      } else if (dateA < dateB) {
        return -1;
      }
      return 0;
    })
  }

  sortCards(progCards);
  sortCards(nonProgCards);

</script>

<Hero>
  <h1>Projects</h1>
</Hero>

<div class="cards">
  {#each progCards as card}
    <PageEntrance delay={START_DELAY}>
      <ProjectCard {...card}/>
    </PageEntrance>
  {/each}
</div>

<PageEntrance delay={START_DELAY}><h2>Non-Programming Projects</h2></PageEntrance>

<div class="cards">
  {#each nonProgCards as card}
    <PageEntrance delay={START_DELAY}>
      <ProjectCard {...card}/>
    </PageEntrance>
  {/each}
</div>

<style>
  h2 {
    font-size: 3rem;
    padding: 2rem;
    text-align: center;
    text-shadow: 0px 0px 50px var(--clr-text);
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
