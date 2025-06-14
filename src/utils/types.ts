export type Contributor = { name: string; url?: string };

export type ContributorSection = {
    startMsg: string;
    contributors: Contributor[];
};

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
}

export interface AppSectionProps {
    title: string;
    description: string;
    apps: AppProps[];
}
