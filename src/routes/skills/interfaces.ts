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
