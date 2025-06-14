// '26
import JoshuaHeadshot from "../assets/members/joshua.webp";
import AndyHeadshot from "../assets/members/andy.webp";
import HangHeadshot from "../assets/members/hang.webp";
import AaliyahHeadshot from "../assets/members/aaliyah.webp";
import AnnaHeadshot from "../assets/members/anna.webp";
import EricaHeadshot from "../assets/members/erica.webp";
import JuliaHeadshot from "../assets/members/julia.webp";
import KeithHeadshot from "../assets/members/keith.webp";
import MarvinHeadshot from "../assets/members/marvin.webp";
import MylesHeadshot from "../assets/members/myles.webp";
import OyuHeadshot from "../assets/members/oyu.webp";
import KevinYangHeadshot from "../assets/members/kevinYang.webp";
import NicholasHeadshot from "../assets/members/nicholas.webp";
import WinsiceHeadshot from "../assets/members/winsice.webp";

// '27
import AngelinaHeadshot from "../assets/members/angelina.webp";
import AmmaarHeadshot from "../assets/members/ammaar.webp";
import EmilyHeadshot from "../assets/members/emily.webp";
import GlenHeadshot from "../assets/members/glen.webp";

// '28
import BenHeadshot from "../assets/members/ben.webp";
import ShreyasHeadshot from "../assets/members/shreyas.webp";
import GraceHeadshot from "../assets/members/grace.webp";
import KevinHeadshot from "../assets/members/kevin.webp";

// Companies
import DatabricksLogo from "../assets/companies/databricks.webp";
import NetflixLogo from "../assets/companies/netflix.webp";
import MetaLogo from "../assets/companies/meta.webp";
import StripeLogo from "../assets/companies/stripe.webp";
import PineconeLogo from "../assets/companies/pinecone.webp";
import AWSLogo from "../assets/companies/aws.webp";
import AirbnbLogo from "../assets/companies/airbnb.webp";
import MicrosoftLogo from "../assets/companies/microsoft.webp";

import type { Team } from "./types";

type Member = {
    name: string;
    title: string;
    position: string;
    teams: Team[];
    website: string;
    github: string;
    headshot: ImageMetadata;
};

export const currentMembers: Member[] = [
    // Board
    {
        name: "Joshua Lau '26",
        title: "Chief Developer",
        position: "Co-President",
        teams: ["Board", "Engineering", "Design", "Marketing"],
        website: "https://motoaki.dev",
        github: "https://github.com/joshuamotoaki",
        headshot: JoshuaHeadshot
    },
    {
        name: "Ben Aepli '28",
        title: "Senior Developer",
        position: "Co-President",
        teams: ["Board", "Engineering"],
        website: "https://benaepli.com",
        github: "https://github.com/benaepli",
        headshot: BenHeadshot
    },
    {
        name: "Andy Zhang '26",
        title: "Product Manager",
        position: "Head of Product",
        teams: ["Board", "Product"],
        website: "",
        github: "https://github.com/andy-h-zhang",
        headshot: AndyHeadshot
    },
    {
        name: "Shreyas Garimella '28",
        title: "Senior Developer",
        position: "Treasurer",
        teams: ["Board", "Engineering"],
        website: "",
        github: "https://github.com/sgarimel",
        headshot: ShreyasHeadshot
    },

    // Senior Devs
    {
        name: "Hang Pham '26",
        title: "Senior Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/thanhhang1306",
        headshot: HangHeadshot
    },
    {
        name: "Aaliyah Sayed '26",
        title: "Senior Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/riiptide",
        headshot: AaliyahHeadshot
    },
    {
        name: "Ammaar Alam '27",
        title: "Senior Developer",
        position: "",
        teams: ["Engineering"],
        website: "https://ammaaralam.com",
        github: "https://github.com/Ammaar-Alam",
        headshot: AmmaarHeadshot
    },
    {
        name: "Glen Nfor '27",
        title: "Senior Developer",
        position: "",
        teams: ["Engineering"],
        website: "https://glennfor.tech",
        github: "https://github.com/glennfor",
        headshot: GlenHeadshot
    },
    {
        name: "Grace Tan '28",
        title: "Senior Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/gracezyt",
        headshot: GraceHeadshot
    },

    // Product
    {
        name: "Winsice Ng '26",
        title: "Product Manager and Software Developer",
        position: "",
        teams: ["Product", "Engineering"],
        website: "",
        github: "https://github.com/winsice-ng",
        headshot: WinsiceHeadshot
    },
    {
        name: "Anna Wang '26",
        title: "Product Manager and Marketer",
        position: "",
        teams: ["Product", "Marketing"],
        website: "",
        github: "",
        headshot: AnnaHeadshot
    },

    // Designers
    {
        name: "Angelina Ji '27",
        title: "Software Developer and Designer",
        position: "",
        teams: ["Engineering", "Design"],
        website: "",
        github: "",
        headshot: AngelinaHeadshot
    },

    // Software Developers
    {
        name: "Julia Ying '26",
        title: "Software Developer and Designer",
        position: "",
        teams: ["Engineering", "Design"],
        website: "",
        github: "https://github.com/juliaying26",
        headshot: JuliaHeadshot
    },
    {
        name: "Erica Lee '26",
        title: "Software Developer and Designer",
        position: "",
        teams: ["Engineering", "Design"],
        website: "",
        github: "https://github.com/ericayrlee",
        headshot: EricaHeadshot
    },
    {
        name: "Keith Matanachai '26",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/matan53153",
        headshot: KeithHeadshot
    },
    {
        name: "Marvin Chen '26",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/marvin-chen",
        headshot: MarvinHeadshot
    },
    {
        name: "Myles Anderson '26",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/myles332",
        headshot: MylesHeadshot
    },
    {
        name: "Oyu Enkhbold '26",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/oyu-e",
        headshot: OyuHeadshot
    },
    {
        name: "Kevin Yang '26",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/ky6374",
        headshot: KevinYangHeadshot
    },
    {
        name: "Nicholas Vickery '26",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/nickvick04",
        headshot: NicholasHeadshot
    },
    {
        name: "Emily Zhou '27",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "",
        github: "https://github.com/z-emily",
        headshot: EmilyHeadshot
    },
    {
        name: "Kevin Liu '28",
        title: "Software Developer",
        position: "",
        teams: ["Engineering"],
        website: "https://www.kevin-liu.tech/",
        github: "https://github.com/Kevin-Liu-01",
        headshot: KevinHeadshot
    }
];

export const pastMembers: string[] = [
    "Shivam Kak '26",
    "Mark Rubin '26",
    "Leo Stepanewk '25",
    "Youngseo Lee '25",
    "Adam Kelch '24",
    "Daniel Park '24",
    "Taylor Yamashita '24",
    "Benjamin Chan '23",
    "Adam Gamba '23",
    "Shannon Heh '23",
    "Nicholas Padmanabhan '23",
    "Charles An '22",
    "Ayo Oguntola '23",
    "Emre Cakir '21",
    "Reilly Bova '20",
    "Rushy Panchal '19",
    "Ben Parks '17",
    "Maxim Zaslavsky '17"
];

export const companies: [ImageMetadata, string][] = [
    [DatabricksLogo, "Databricks"],
    [NetflixLogo, "Netflix"],
    [MetaLogo, "Meta"],
    [StripeLogo, "Stripe"],
    [PineconeLogo, "Pinecone"],
    [AWSLogo, "Amazon Web Services"],
    [AirbnbLogo, "Airbnb"],
    [MicrosoftLogo, "Microsoft"]
];
