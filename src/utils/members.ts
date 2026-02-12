import FillerHeadshot from "../assets/members/filler.webp";

// '26
import AndyHeadshot from "../assets/members/andy.webp";
import AnnaHeadshot from "../assets/members/anna.webp";
import ChristinaHeadshot from "../assets/members/christina.webp";
import EricaHeadshot from "../assets/members/erica.webp";
import JoshuaHeadshot from "../assets/members/joshua.webp";
import JuliaHeadshot from "../assets/members/julia.webp";
import KeithHeadshot from "../assets/members/keith.webp";
import MarvinHeadshot from "../assets/members/marvin.webp";
import MylesHeadshot from "../assets/members/myles.webp";
import OyuHeadshot from "../assets/members/oyu.webp";
import WinsiceHeadshot from "../assets/members/winsice.webp";

// '27
import AmmaarHeadshot from "../assets/members/ammaar.webp";
import AngelinaHeadshot from "../assets/members/angelina.webp";
import ClaireHeadshot from "../assets/members/claire.webp";

// '28
import AngelaHeadshot from "../assets/members/angela.webp";
import AyushHeadshot from "../assets/members/ayush.webp";
import BenHeadshot from "../assets/members/ben.webp";
import BrittneyHeadshot from "../assets/members/brittney.webp";
import BrookeHeadshot from "../assets/members/brooke.webp";
import ElianaHeadshot from "../assets/members/eliana.webp";
import EmilyHeadshot from "../assets/members/emily.webp";
import GraceHeadshot from "../assets/members/grace.webp";
import HelenHeadshot from "../assets/members/helen.webp";
import IbraheemHeadshot from "../assets/members/ibraheem.webp";
import KatieHeadshot from "../assets/members/katie.webp";
import KevinHeadshot from "../assets/members/kevin.webp";
import LucyHeadshot from "../assets/members/lucy.webp";
import NiyathiHeadshot from "../assets/members/niyathi.webp";
import ShreyasHeadshot from "../assets/members/shreyas.webp";
import YubiHeadshot from "../assets/members/yubi.webp";

// '29
import AayushHeadshot from "../assets/members/aayush.webp";
import AikhanHeadshot from "../assets/members/aikhan.webp";
import AlbertHeadshot from "../assets/members/albert.webp";
import AngelinaHHeadshot from "../assets/members/angelinah.webp";
import AnnaSongHeadshot from "../assets/members/anna_song.webp";
import EmilioHeadshot from "../assets/members/emilio.webp";
import GauriHeadshot from "../assets/members/gauri.webp";
import GwanpilHeadshot from "../assets/members/gwanpil.webp";
import JiyaHeadshot from "../assets/members/jiya.webp";
import OliverHeadshot from "../assets/members/oliver.webp";
import PrishaaHeadshot from "../assets/members/prishaa.webp";
import RohanHeadshot from "../assets/members/rohan.webp";
import RohitHeadshot from "../assets/members/rohit.webp";
import SaiHeadshot from "../assets/members/sai.webp";
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
        name: "Andy Zhang '26",
        title: "Product Manager",
        position: "Head of Product",
        roles: ["Board", "Product Management"],
        website: "",
        github: "https://github.com/andy-h-zhang",
        headshot: AndyHeadshot
    },
    {
        name: "Ammaar Alam '27",
        title: "Senior Developer",
        position: "Lead DevOps Engineer",
        roles: ["Board", "Engineering"],
        website: "https://ammaaralam.com",
        github: "https://github.com/Ammaar-Alam",
        headshot: AmmaarHeadshot
    },
    {
        name: "Shreyas Garimella '28",
        title: "Lead AI Engineer",
        position: "Treasurer",
        roles: ["Board", "Engineering"],
        website: "",
        github: "https://github.com/sgarimel",
        headshot: ShreyasHeadshot
    },
    {
        name: "Joshua Lau '26",
        title: "Chief Developer",
        position: "Technical Mentor",
        roles: ["Board", "Engineering"],
        website: "https://motoaki.dev",
        github: "https://github.com/joshuamotoaki",
        headshot: JoshuaHeadshot
    },

    {
        name: "Angela Cai '27",
        title: "Software Developer",
        position: "Junction Tech Lead",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/ang-cai",
        headshot: AngelaHeadshot
    },
    {
        name: "Helen Hui '28",
        title: "Product Manager",
        position: "Junction Product Lead",
        roles: ["Product Management"],
        website: "",
        github: "https://github.com/ilovehhhyn",
        headshot: HelenHeadshot
    },

    {
        name: "Oliver Cho '29",
        title: "Software Developer",
        position: "Tech Lead",
        roles: ["Engineering"],
        website: "https://olivercho.me",
        github: "https://github.com/olivcho",
        headshot: OliverHeadshot
    },
    {
        name: "Vishrut Thoutam '29",
        title: "Software Developer",
        position: "Tech Lead",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/vish317",
        headshot: FillerHeadshot
    },

    // Product
    {
        name: "Gauri Kshettry '29",
        title: "Product Manager",
        position: "",
        roles: ["Product Management"],
        website: "",
        github: "https://github.com/gk7494",
        headshot: GauriHeadshot
    },
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
        name: "Winsice Ng '26",
        title: "Product Manager & Marketer",
        position: "",
        roles: ["Product Management", "Marketing"],
        website: "",
        github: "https://github.com/winsice-ng",
        headshot: WinsiceHeadshot
    },

    // Marketing
    {
        name: "Anna Wang '26",
        title: "Marketer & Product Manager",
        position: "",
        roles: ["Marketing", "Product Management"],
        website: "",
        github: "",
        headshot: AnnaHeadshot
    },
    {
        name: "Angelina Huang '29",
        title: "Marketer",
        position: "",
        roles: ["Marketing"],
        website: "",
        github: "",
        headshot: AngelinaHHeadshot
    },

    // Designers
    {
        name: "Christina Wu '26",
        title: "Senior Designer",
        position: "",
        roles: ["Design"],
        website: "https://www.christina-wu.com/",
        github: "",
        headshot: ChristinaHeadshot
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
    {
        name: "Eliana Du '28",
        title: "Designer",
        position: "",
        roles: ["Design"],
        website: "",
        github: "",
        headshot: ElianaHeadshot
    },
    {
        name: "Anna Song '29",
        title: "Designer",
        position: "",
        roles: ["Design"],
        website: "",
        github: "",
        headshot: AnnaSongHeadshot
    },
    {
        name: "Prishaa Kapasi '29",
        title: "Designer",
        position: "",
        roles: ["Design"],
        website: "",
        github: "",
        headshot: PrishaaHeadshot
    },
    {
        name: "Albert Rho '29",
        title: "Designer",
        position: "",
        roles: ["Design"],
        website: "",
        github: "",
        headshot: AlbertHeadshot
    },

    // Senior Devs
    {
        name: "Ben Aepli '28",
        title: "Senior Developer",
        position: "",
        roles: ["Engineering"],
        website: "https://benaepli.com",
        github: "https://github.com/benaepli",
        headshot: BenHeadshot
    },
    {
        name: "Grace Tan '28",
        title: "Senior Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/gracezyt",
        headshot: GraceHeadshot
    },

    {
        name: "Keith Matanachai '26",
        title: "Senior Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/matan53153",
        headshot: KeithHeadshot
    },

    {
        name: "Myles Anderson '26",
        title: "Senior Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/myles332",
        headshot: MylesHeadshot
    },
    {
        name: "Oyu Enkhbold '26",
        title: "Senior Engineer",
        position: "",
        roles: ["Engineering"],
        website: "https://oyu-e.github.io/",
        github: "https://github.com/oyu-e",
        headshot: OyuHeadshot
    },

    // AI Engineers
    {
        name: "Aikhan Jumashukurov '29",
        title: "AI Engineer",
        position: "",
        roles: ["Engineering"],
        website: "https://www.aikhanjumashukurov.com/",
        github: "https://github.com/aikhanj",
        headshot: AikhanHeadshot
    },
    {
        name: "Mustafa Tajammul '29",
        title: "AI Engineer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "",
        headshot: FillerHeadshot
    },

    // Software Developers
    {
        name: "Erica Lee '26",
        title: "Software Developer & Designer",
        position: "",
        roles: ["Engineering", "Design"],
        website: "",
        github: "https://github.com/ericayrlee",
        headshot: EricaHeadshot
    },
    {
        name: "Marvin Chen '26",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/marvin-chen",
        headshot: MarvinHeadshot
    },
    {
        name: "Brooke Xu '28",
        title: "Software Developer & Product Manager",
        position: "",
        roles: ["Engineering", "Product Management"],
        website: "",
        github: "https://github.com/brookex923",
        headshot: BrookeHeadshot
    },
    {
        name: "Niyathi Kukkapalli '28",
        title: "Software Developer & Designer",
        position: "",
        roles: ["Engineering", "Design"],
        website: "https://niyathikukkapalli.com",
        github: "https://github.com/niyathikukkapalli",
        headshot: NiyathiHeadshot
    },
    {
        name: "Katie Lee '28",
        title: "Software Developer & Designer",
        position: "",
        roles: ["Engineering", "Design"],
        website: "",
        github: "https://github.com/katiejihyo",
        headshot: KatieHeadshot
    },
    {
        name: "Yubi Mamiya '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/yubimamiya",
        headshot: YubiHeadshot
    },
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
        name: "Brittney Barnwell '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/brittastic27",
        headshot: BrittneyHeadshot
    },
    {
        name: "Emily Zou '28",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/ezou6",
        headshot: EmilyHeadshot
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
        name: "Aayush Mitra '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "https://www.aayushmitra.com",
        github: "https://github.com/aayush-mitra",
        headshot: AayushHeadshot
    },
    {
        name: "Rohit Katuri '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/raheekatuhee",
        headshot: RohitHeadshot
    },
    {
        name: "Sai Nallani '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "https://sai-nallani.github.io",
        github: "https://github.com/sai-nallani",
        headshot: SaiHeadshot
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
    {
        name: "William Liu '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/thewilliamliu",
        headshot: WilliamLiuHeadshot
    },
    {
        name: "Emilio Medina Castellanos '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/Meda1217",
        headshot: EmilioHeadshot
    },
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
        name: "Rohan Matta '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "https://github.com/rohanmatta11",
        headshot: RohanHeadshot
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
        name: "Patrick Fu '29",
        title: "Software Developer",
        position: "",
        roles: ["Engineering"],
        website: "",
        github: "",
        headshot: PatrickHeadshot
    },

    // Miscellaneous
    {
        name: "Kevin Liu '28",
        title: "Game Developer",
        position: "",
        roles: ["Engineering"],
        website: "https://www.kevin-liu.tech/",
        github: "https://github.com/Kevin-Liu-01",
        headshot: KevinHeadshot
    },
    {
        name: "Julia Ying '26",
        title: "Design Consultant",
        position: "",
        roles: ["Design"],
        website: "",
        github: "https://github.com/juliaying26",
        headshot: JuliaHeadshot
    }
];

export const pastMembers: string[] = [
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
