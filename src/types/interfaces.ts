import { LucideIcon } from "lucide-react";

export interface ISocialLinks {
    href: string;
    icon: LucideIcon;
}

export interface INavLink extends ISocialLinks {
    title: string;
    
}
export interface IStatistic {
    label: string;
    value: number;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface ISkill {
    _id: string;
    label: string;
    value: number;
    category: SkillCategory;
}

export interface ITabItems {
    value: SkillCategory;
    icon: LucideIcon;
    label: string;
}

export interface IProjects {
    _id: string;
    title: string;
    description: string;
    images:any[];
    tags: string[];
    demoLink: string;
    githubLink: string;
    publishedAt:Date;
    isResponsive: boolean;
}
