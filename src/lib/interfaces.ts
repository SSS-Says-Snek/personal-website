export type Subskill = {
  name: string;
  percentage: number;
  tags: Array<string>;
}

export type Skill = {
  name: string;
  percentage: number;
  proficiency: string;
  subskills: Array<Subskill>;
  borderColor?: string;

  relatedSkills: Array<RelatedSkill>;
}

export type RelatedSkill = {
  name: string;
  percentage: number;
  proficiency: string;
  subskills: Array<Subskill>;
  borderColor?: string;
}

export type Author = {
  link: string;
  name: string;
}

export type Card = {
  title: string;
  dateCreated: string;
  authors?: Array<Author>;
  description: string;
  imgSrc: string;
  imgAlt: string;

  projectLang?: string;
  projectSrc?: string;
  projectDocs?: string;
  projectSpotlight?: string;
}

export type Post = {
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    coverImageAlt: string;
    coverWidth: number;
    coverHeight: number;
    date: Date;
    categories: string[];
    minRead: string;
}

