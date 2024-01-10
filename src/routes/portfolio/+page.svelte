<script>
  import Hero from "$lib/Hero.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  let cards = [
    {
      title: "Hisock",
      date_created: "Sep 2021",
      authors: "sheepy0125",
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
    }
  ]
</script>

<Hero>
  <h1>Portfolio</h1>
</Hero>

<div class="cards">
  {#each cards as card}
    <ProjectCard {...card} />
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
