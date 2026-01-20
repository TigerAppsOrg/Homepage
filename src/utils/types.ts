export type Team =
    | "Nexus"
    | "TigerPages"
    | "TigerOps"
    | "Orbit"
    | "Nucleus"
    | "Venture"
    | "TigerJunction";

export type Role =
    | "Engineering"
    | "Design"
    | "Product Management"
    | "Marketing"
    | "Board";

export type Contributor = { name: string; url?: string };

export type ContributorSection = {
    startMsg: string;
    contributors: Contributor[];
};

export type AppCategory =
    | "AI Assistant"
    | "Course Planning"
    | "Games"
    | "Campus Life"
    | "Room Draw";

export interface AppProps {
    title: string;
    description: string;
    note: string;
    webLink: string;
    repoLink: string;
    screenshot: ImageMetadata;
    alt: string;
    contributors?: Contributor[];
    additionalContributors?: ContributorSection[];
    featured?: boolean;
    category: AppCategory;
}

export interface AppSectionProps {
    title: string;
    description: string;
    apps: AppProps[];
}
