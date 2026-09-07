import FillerHeadshot from "../assets/members/filler.webp";

// '27
import AmmaarHeadshot from "../assets/members/ammaar.webp";
import AngelinaHeadshot from "../assets/members/angelina.webp";
import ClaireHeadshot from "../assets/members/claire.webp";

// '28
import AyushHeadshot from "../assets/members/ayush.webp";
import BrittneyHeadshot from "../assets/members/brittney.webp";
import BrookeHeadshot from "../assets/members/brooke.webp";
import GraceHeadshot from "../assets/members/grace.webp";
import HelenHeadshot from "../assets/members/helen.webp";
import IbraheemHeadshot from "../assets/members/ibraheem.webp";
import LucyHeadshot from "../assets/members/lucy.webp";
import NiyathiHeadshot from "../assets/members/niyathi.webp";
import ShreyasHeadshot from "../assets/members/shreyas.webp";
import YubiHeadshot from "../assets/members/yubi.webp";

// '29
import AikhanHeadshot from "../assets/members/aikhan.webp";
import AlbertHeadshot from "../assets/members/albert.webp";
import AngelinaHHeadshot from "../assets/members/angelinah.webp";
import AnnaSongHeadshot from "../assets/members/anna_song.webp";
import GwanpilHeadshot from "../assets/members/gwanpil.webp";
import JiyaHeadshot from "../assets/members/jiya.webp";
import PrishaaHeadshot from "../assets/members/prishaa.webp";
import RohanHeadshot from "../assets/members/rohan.webp";
import SophiaHeadshot from "../assets/members/sophia.webp";
import WilliamLiuHeadshot from "../assets/members/william_liu.webp";
import WilliamZhaoHeadshot from "../assets/members/william_zhao.webp";
import PatrickHeadshot from "../assets/members/patrick.webp";

// Companies
import AirbnbLogo from "../assets/companies/airbnb.webp";
import AWSLogo from "../assets/companies/aws.webp";
import DatabricksLogo from "../assets/companies/databricks.webp";
import KizakiLogo from "../assets/companies/kizaki.webp";
import MetaLogo from "../assets/companies/meta.webp";
import MicrosoftLogo from "../assets/companies/microsoft.webp";
import NetflixLogo from "../assets/companies/netflix.webp";
import PineconeLogo from "../assets/companies/pinecone.webp";
import StripeLogo from "../assets/companies/stripe.webp";

import type { Role } from "./types";

type Member = {
    name: string;
    title: string;
    position: string;
    roles: Role[];
    website: string;
    github: string;
    headshot: ImageMetadata;
};

export const currentMembers: Member[] = [
    // Board
    {
        name: "Angelina Ji '27",
        title: "Software Developer & Designer",
        position: "Co-President",
        roles: ["Board", "Engineering", "Design"],
        website: "",
        github: "https://github.com/angelina-ji",
        headshot: AngelinaHeadshot
    },
    {
        name: "Ibraheem Amin '28",
        title: "Infrastructure & DevOps Engineer",
        position: "Co-President",
        roles: ["Board", "Engineering"],
        website: "https://ibraheemamin.dev/",
        github: "https://github.com/DIodide",
        headshot: IbraheemHeadshot
    },
    {
        name: "Sophia You '29",
        title: "Designer & Software Developer",
        position: "Vice President",
        roles: ["Board", "Design", "Engineering"],
        website: "",
        github: "https://github.com/sophia-you",
        headshot: SophiaHeadshot
    },
    {
        name: "Angelina Huang '29",
        title: "Marketer",
        position: "Head of Marketing / Treasurer",
        roles: ["Board", "Marketing"],
        website: "",
        github: "",
        headshot: AngelinaHHeadshot
    },
    {
        name: "Ammaar Alam '27",
        title: "Software & Infrastructure Engineer",
        position: "Lead Software Engineer",
        roles: ["Board", "Engineering"],
        website: "https://ammaaralam.com",
        github: "https://github.com/Ammaar-Alam",
        headshot: AmmaarHeadshot
    },

    // Leads
    {
        name: "Prishaa Kapasi '29",
        title: "Product Manager",
        position: "PM Lead",
        roles: ["Product Management"],
        website: "",
        github: "",
        headshot: PrishaaHeadshot
    },
    {
        name: "Yubi Mamiya '28",
        title: "Software Developer",
        position: "Tech Lead",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/yubimamiya",
        headshot: YubiHeadshot
    },
    {
        name: "Raj Patel",
        title: "Software Developer",
        position: "Tech Lead",
        roles: ["Engineering"],
        website: "",
        github: "",
        headshot: FillerHeadshot
    },
    {
        name: "Helen Hui '28",
        title: "Product Manager",
        position: "Team Lead",
        roles: ["Product Management"],
        website: "",
        github: "https://github.com/ilovehhhyn",
        headshot: HelenHeadshot
    },
    {
        name: "Brittney Barnwell '28",
        title: "Product Manager",
        position: "PM Lead",
        roles: ["Product Management"],
        website: "",
        github: "https://github.com/brittastic27",
        headshot: BrittneyHeadshot
    },
    {
        name: "Niyathi Kukkapalli '28",
        title: "Software Developer",
        position: "Tech Lead",
        roles: ["Engineering"],
        website: "https://niyathikukkapalli.com",
        github: "https://github.com/niyathikukkapalli",
        headshot: NiyathiHeadshot
    },
    {
        name: "Anna Song '29",
        title: "Product Manager",
        position: "PM Lead",
        roles: ["Product Management"],
        website: "",
        github: "",
        headshot: AnnaSongHeadshot
    },

    // Princeton Intelligence
    {
        name: "Aikhan Jumashukurov '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "https://www.aikhanjumashukurov.com/",
        github: "https://github.com/aikhanj",
        headshot: AikhanHeadshot
    },
    {
        name: "Grace Tan '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/gracezyt",
        headshot: GraceHeadshot
    },
    {
        name: "Mustafa Tajammul '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "",
        headshot: FillerHeadshot
    },
    {
        name: "Shreyas Garimella '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/sgarimel",
        headshot: ShreyasHeadshot
    },
    {
        name: "William Liu '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/thewilliamliu",
        headshot: WilliamLiuHeadshot
    },

    // The Forum
    {
        name: "Claire Wang '27",
        title: "Product Manager",
        position: "",
        roles: ["Product Management"],
        website: "",
        github: "",
        headshot: ClaireHeadshot
    },
    {
        name: "Rocco Zhang '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "",
        headshot: FillerHeadshot
    },
    {
        name: "Rohan Matta '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/rohanmatta11",
        headshot: RohanHeadshot
    },
    // Courses Ecosystem
    {
        name: "Brooke Xu '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/brookex923",
        headshot: BrookeHeadshot
    },
    {
        name: "Gwanpil Son '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/gwanpilson",
        headshot: GwanpilHeadshot
    },
    {
        name: "Lucy Park '28",
        title: "Designer",
        position: "",
        roles: ["Design"],
        website: "",
        github: "",
        headshot: LucyHeadshot
    },

    // TigerLift
    {
        name: "Albert Rho '29",
        title: "Designer",
        position: "",
        roles: ["Design"],
        website: "",
        github: "",
        headshot: AlbertHeadshot
    },

    // TigerOps
    {
        name: "Ayush Jain '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/ayush80",
        headshot: AyushHeadshot
    },
    {
        name: "Vishrut Thoutam '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/vish317",
        headshot: FillerHeadshot
    },
    {
        name: "William Zhao '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/william-w-zhao",
        headshot: WilliamZhaoHeadshot
    },

    // TigerRetail
    {
        name: "Jiya Shetty '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "",
        headshot: JiyaHeadshot
    },
    {
        name: "Patrick Fu '29",
        title: "Software Developer & Designer",
        position: "",
        roles: ["Engineering", "Design"],
        website: "",
        github: "https://github.com/trickfu",
        headshot: PatrickHeadshot
    }
];

export const pastMembers: string[] = [
    "Andy Zhang '26",
    "Joshua Lau '26",
    "Angela Cai '27",
    "Oliver Cho '29",
    "Gauri Kshettry '29",
    "Winsice Ng '26",
    "Anna Wang '26",
    "Christina Wu '26",
    "Eliana Du '28",
    "Ben Aepli '28",
    "Keith Matanachai '26",
    "Myles Anderson '26",
    "Oyu Enkhbold '26",
    "Erica Lee '26",
    "Marvin Chen '26",
    "Katie Lee '28",
    "Emily Zou '28",
    "Aayush Mitra '29",
    "Rohit Katuri '29",
    "Sai Nallani '29",
    "Emilio Medina Castellanos '29",
    "Kevin Liu '28",
    "Julia Ying '26",
    "Lauren Pak '27",
    "Emily Zhou '27",
    "Glen Nfor '27",
    "Hang Pham '26",
    "Aaliyah Sayed '26",
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
    [MetaLogo, "Meta"],
    [MicrosoftLogo, "Microsoft"],
    [StripeLogo, "Stripe"],
    [AWSLogo, "Amazon Web Services"],
    [KizakiLogo, "Kizaki"],
    [AirbnbLogo, "Airbnb"],
    [PineconeLogo, "Pinecone"],
    [DatabricksLogo, "Databricks"],
    [NetflixLogo, "Netflix"]
];
