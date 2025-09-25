import FillerHeadshot from "../assets/members/filler.webp";

// '26
import JoshuaHeadshot from "../assets/members/joshua.webp";
import AndyHeadshot from "../assets/members/andy.webp";
import AnnaHeadshot from "../assets/members/anna.webp";
import EricaHeadshot from "../assets/members/erica.webp";
import JuliaHeadshot from "../assets/members/julia.webp";
import KeithHeadshot from "../assets/members/keith.webp";
import MarvinHeadshot from "../assets/members/marvin.webp";
import MylesHeadshot from "../assets/members/myles.webp";
import OyuHeadshot from "../assets/members/oyu.webp";
import WinsiceHeadshot from "../assets/members/winsice.webp";
// import ChristinaHeadshot from "../assets/members/christina.webp";

// '27
import AngelinaHeadshot from "../assets/members/angelina.webp";
import AmmaarHeadshot from "../assets/members/ammaar.webp";
import ClaireHeadshot from "../assets/members/claire.webp";
import LaurenHeadshot from "../assets/members/lauren.webp";

// '28
import BenHeadshot from "../assets/members/ben.webp";
import ShreyasHeadshot from "../assets/members/shreyas.webp";
import GraceHeadshot from "../assets/members/grace.webp";
import KevinHeadshot from "../assets/members/kevin.webp";
import YubiHeadshot from "../assets/members/yubi.webp";
import BrookeHeadshot from "../assets/members/brooke.webp";
import NiyathiHeadshot from "../assets/members/niyathi.webp";
import KatieHeadshot from "../assets/members/katie.webp";
import IbraheemHeadshot from "../assets/members/ibraheem.webp";
import TomHeadshot from "../assets/members/tom.webp";
import LucyHeadshot from "../assets/members/lucy.webp";
import HelenHeadshot from "../assets/members/helen.webp";
import AngelaHeadshot from "../assets/members/angela.webp";
import AyushHeadshot from "../assets/members/ayush.webp";

// '29
import GauriHeadshot from "../assets/members/gauri.webp";
import AngelinaHHeadshot from "../assets/members/angelinah.webp";
import GwanpilHeadshot from "../assets/members/gwanpil.webp";
import AayushHeadshot from "../assets/members/aayush.webp";
import RohitHeadshot from "../assets/members/rohit.webp";
import OliverHeadshot from "../assets/members/oliver.webp";
import JosephHeadshot from "../assets/members/joseph.webp";
// import VishruthHeadshot from "../assets/members/vishruth.webp";
import SaiHeadshot from "../assets/members/sai.webp";
import SophiaHeadshot from "../assets/members/sophia.webp";
import TiffanyHeadshot from "../assets/members/tiffany.webp";

// Companies
import DatabricksLogo from "../assets/companies/databricks.webp";
import NetflixLogo from "../assets/companies/netflix.webp";
import MetaLogo from "../assets/companies/meta.webp";
import StripeLogo from "../assets/companies/stripe.webp";
import PineconeLogo from "../assets/companies/pinecone.webp";
import AWSLogo from "../assets/companies/aws.webp";
import AirbnbLogo from "../assets/companies/airbnb.webp";
import MicrosoftLogo from "../assets/companies/microsoft.webp";

import type { Role, Team } from "./types";

type Member = {
    name: string;
    title: string;
    position: string;
    roles: Role[];
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
        roles: ["Board", "Engineering"],
        teams: ["Kizaki", "Nucleus", "TigerOps", "TigerJunction"],
        website: "https://motoaki.dev",
        github: "https://github.com/joshuamotoaki",
        headshot: JoshuaHeadshot
    },
    {
        name: "Ben Aepli '28",
        title: "Senior Developer",
        position: "Co-President",
        roles: ["Board", "Engineering"],
        teams: ["TigerPages"],
        website: "https://benaepli.com",
        github: "https://github.com/benaepli",
        headshot: BenHeadshot
    },
    {
        name: "Andy Zhang '26",
        title: "Product Manager",
        position: "Head of Product",
        roles: ["Board", "Product Management"],
        teams: ["Orbit"],
        website: "",
        github: "https://github.com/andy-h-zhang",
        headshot: AndyHeadshot
    },
    {
        name: "Shreyas Garimella '28",
        title: "Senior Developer",
        position: "Treasurer",
        roles: ["Board", "Engineering"],
        teams: ["Nexus"],
        website: "",
        github: "https://github.com/sgarimel",
        headshot: ShreyasHeadshot
    },

    // Senior Devs
    {
        name: "Ammaar Alam '27",
        title: "Senior Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerOps"],
        website: "https://ammaaralam.com",
        github: "https://github.com/Ammaar-Alam",
        headshot: AmmaarHeadshot
    },
    {
        name: "Grace Tan '28",
        title: "Senior Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Kizaki"],
        website: "",
        github: "https://github.com/gracezyt",
        headshot: GraceHeadshot
    },

    // Product
    {
        name: "Winsice Ng '26",
        title: "Product Manager and Software Developer",
        position: "",
        roles: ["Product Management", "Engineering"],
        teams: ["Nucleus"],
        website: "",
        github: "https://github.com/winsice-ng",
        headshot: WinsiceHeadshot
    },

    {
        name: "Claire Wang '27",
        title: "Product Manager",
        position: "",
        roles: ["Product Management"],
        teams: ["Orbit"],
        website: "",
        github: "",
        headshot: ClaireHeadshot
    },
    {
        name: "Helen Hui '28",
        title: "Product Manager",
        position: "",
        roles: ["Product Management"],
        teams: ["TigerJunction"],
        website: "",
        github: "https://github.com/ilovehhhyn",
        headshot: HelenHeadshot
    },
    {
        name: "Gauri Kshettry '29",
        title: "Product Manager",
        position: "",
        roles: ["Product Management"],
        teams: ["Orbit"],
        website: "",
        github: "https://github.com/gk7494",
        headshot: GauriHeadshot
    },

    // Marketing
    {
        name: "Anna Wang '26",
        title: "Product Manager and Marketer",
        position: "",
        roles: ["Product Management", "Marketing"],
        teams: ["Orbit"],
        website: "",
        github: "",
        headshot: AnnaHeadshot
    },
    {
        name: "Angelina Huang '29",
        title: "Marketer",
        position: "",
        roles: ["Marketing"],
        teams: ["Orbit"],
        website: "",
        github: "",
        headshot: AngelinaHHeadshot
    },

    // Designers
    {
        name: "Christina Wu '26",
        title: "Designer",
        position: "",
        roles: ["Design"],
        teams: ["Kizaki"],
        website: "https://www.christina-wu.com/",
        github: "",
        headshot: FillerHeadshot
    },
    {
        name: "Lauren Pak '27",
        title: "Designer",
        position: "",
        roles: ["Design"],
        teams: ["Orbit"],
        website: "",
        github: "",
        headshot: LaurenHeadshot
    },
    {
        name: "Lucy Park '28",
        title: "Designer",
        position: "",
        roles: ["Design"],
        teams: ["Orbit"],
        website: "",
        github: "",
        headshot: LucyHeadshot
    },

    // Software Developers
    {
        name: "Julia Ying '26",
        title: "Software Developer and Designer",
        position: "",
        roles: ["Engineering", "Design"],
        teams: ["Venture"],
        website: "",
        github: "https://github.com/juliaying26",
        headshot: JuliaHeadshot
    },
    {
        name: "Erica Lee '26",
        title: "Software Developer and Designer",
        position: "",
        roles: ["Engineering", "Design"],
        teams: ["TigerOps"],
        website: "",
        github: "https://github.com/ericayrlee",
        headshot: EricaHeadshot
    },
    {
        name: "Keith Matanachai '26",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Kizaki"],
        website: "",
        github: "https://github.com/matan53153",
        headshot: KeithHeadshot
    },
    {
        name: "Marvin Chen '26",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerOps"],
        website: "",
        github: "https://github.com/marvin-chen",
        headshot: MarvinHeadshot
    },
    {
        name: "Myles Anderson '26",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Kizaki"],
        website: "",
        github: "https://github.com/myles332",
        headshot: MylesHeadshot
    },
    {
        name: "Oyu Enkhbold '26",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Kizaki"],
        website: "https://oyu-e.github.io/",
        github: "https://github.com/oyu-e",
        headshot: OyuHeadshot
    },
    {
        name: "Angelina Ji '27",
        title: "Software Developer and Designer",
        position: "",
        roles: ["Engineering", "Design"],
        teams: ["Nucleus"],
        website: "",
        github: "https://github.com/angelina-ji",
        headshot: AngelinaHeadshot
    },
    {
        name: "Brooke Xu '28",
        title: "Software Developer and Product Manager",
        position: "",
        roles: ["Engineering", "Product Management"],
        teams: ["Nexus"],
        website: "",
        github: "https://github.com/brookex923",
        headshot: BrookeHeadshot
    },
    {
        name: "Niyathi Kukkapalli '28",
        title: "Software Developer and Designer",
        position: "",
        roles: ["Engineering", "Design"],
        teams: ["Nexus"],
        website: "https://niyathikukkapalli.com",
        github: "https://github.com/niyathikukkapalli",
        headshot: NiyathiHeadshot
    },
    {
        name: "Katie Lee '28",
        title: "Software Developer and Designer",
        position: "",
        roles: ["Engineering", "Design"],
        teams: ["TigerPages"],
        website: "",
        github: "https://github.com/katiejihyo",
        headshot: KatieHeadshot
    },
    {
        name: "Ibraheem Amin '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerOps"],
        website: "https://ibraheemamin.dev/",
        github: "https://github.com/DIodide",
        headshot: IbraheemHeadshot
    },
    {
        name: "Yubi Mamiya '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Nucleus"],
        website: "",
        github: "https://github.com/yubimamiya",
        headshot: YubiHeadshot
    },
    {
        name: "Kevin Liu '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Venture"],
        website: "https://www.kevin-liu.tech/",
        github: "https://github.com/Kevin-Liu-01",
        headshot: KevinHeadshot
    },
    {
        name: "Tom Wang '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Nexus"],
        website: "",
        github: "https://github.com/tom05919",
        headshot: TomHeadshot
    },
    {
        name: "Angela Cai '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerJunction"],
        website: "",
        github: "https://github.com/ang-cai",
        headshot: AngelaHeadshot
    },
    {
        name: "Ayush Jain '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerJunction"],
        website: "",
        github: "https://github.com/ayush80",
        headshot: AyushHeadshot
    },

    {
        name: "Sophia You '29",
        title: "Designer and Software Developer",
        position: "",
        roles: ["Design", "Engineering"],
        teams: ["TigerJunction"],
        website: "",
        github: "https://github.com/sophia-you",
        headshot: SophiaHeadshot
    },

    {
        name: "Gwanpil Son '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerPages"],
        website: "",
        github: "https://github.com/gwanpilson",
        headshot: GwanpilHeadshot
    },
    {
        name: "Aayush Mitra '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerPages"],
        website: "https://www.aayushmitra.com",
        github: "https://github.com/aayush-mitra",
        headshot: AayushHeadshot
    },
    {
        name: "Rohit Katuri '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerPages"],
        website: "",
        github: "https://github.com/raheekatuhee",
        headshot: RohitHeadshot
    },
    {
        name: "Oliver Cho '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerOps"],
        website: "https://olivercho.me",
        github: "https://github.com/olivcho",
        headshot: OliverHeadshot
    },
    {
        name: "Joseph Tso '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Nexus", "TigerJunction"],
        website: "",
        github: "https://github.com/jt914",
        headshot: JosephHeadshot
    },
    {
        name: "Vishrut Thoutam '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["Kizaki"],
        website: "",
        github: "",
        headshot: FillerHeadshot
    },
    {
        name: "Sai Nallani '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerJunction"],
        website: "https://sai-nallani.github.io",
        github: "https://github.com/sai-nallani",
        headshot: SaiHeadshot
    },
    {
        name: "Tiffany Kim '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        teams: ["TigerJunction"],
        website: "",
        github: "https://github.com/ttiffanykkim",
        headshot: TiffanyHeadshot
    }
];

export const pastMembers: string[] = [
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
    [DatabricksLogo, "Databricks"],
    [NetflixLogo, "Netflix"],
    [MetaLogo, "Meta"],
    [StripeLogo, "Stripe"],
    [PineconeLogo, "Pinecone"],
    [AWSLogo, "Amazon Web Services"],
    [AirbnbLogo, "Airbnb"],
    [MicrosoftLogo, "Microsoft"]
];
