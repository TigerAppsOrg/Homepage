// AI Assist Apps
import TayImage from "../assets/apps/tay.webp";

// Course Planning Apps
import TigerJunctionImage from "../assets/apps/tigerjunction.webp";
import PrincetonCoursesImage from "../assets/apps/princetoncourses.webp";
import TigerSnatchImage from "../assets/apps/tigersnatch.webp";
import TigerPathImage from "../assets/apps/tigerpath.webp";

// Games
import TigerTypeImage from "../assets/apps/type.webp";
import SpotImage from "../assets/apps/spot.webp";
import ClickerImage from "../assets/apps/clicker.webp";

// Campus Life Apps
import TigerLiftImage from "../assets/apps/lift.webp";
import TodayImage from "../assets/apps/today.webp";
import NutriTigerImage from "../assets/apps/nutritiger.webp";
import TigerStudyImage from "../assets/apps/tigerstudy.webp";
import TigerMenusImage from "../assets/archive/tigermenus.webp";

// Room Draw Apps
import TigerDrawImage from "../assets/apps/tigerdraw.webp";
import PrincetonRoomsImage from "../assets/apps/princetonrooms.webp";

import type { AppProps } from "./types";

// All apps in a single flat array with categories
export const allApps: AppProps[] = [
    // Featured apps first for better grid layout
    {
        title: "TigerJunction",
        description:
            "Plan your schedules with powerful advanced search features, customizable themes, and built-in ratings.",
        note: "",
        webLink: "https://junction.tigerapps.org",
        repoLink: "https://github.com/TigerAppsOrg/tiger-junction",
        screenshot: TigerJunctionImage,
        alt: "Tiger Junction app screenshot",
        contributors: [
            { name: "Joshua Lau '26", url: "https://motoaki.dev/" },
            { name: "Emily Zhou '27", url: "" },
            { name: "Keith Matanachai '26", url: "" },
            { name: "Myles Anderson '26", url: "" }
        ],
        featured: true,
        category: "Course Planning"
    },
    {
        title: "Tay",
        description:
            "Your AI assistant that knows all academic, eating club, and event information in real time. Integrated with Princeton Courses.",
        note: "",
        webLink: "https://tay.tigerapps.org/",
        repoLink: "https://github.com/leo-step/Today",
        screenshot: TayImage,
        alt: "Tay chatbot screenshot",
        contributors: [
            { name: "Leo Stepanewk '25", url: "" },
            { name: "Aaliyah Sayed '26", url: "" },
            { name: "Ammaar Alam '27", url: "https://ammaaralam.com" },
            { name: "Shreyas Garimella '28", url: "" }
        ],
        featured: true,
        category: "AI Assistant"
    },
    {
        title: "TigerSpot",
        description:
            "The ultimate Princeton campus geography game — like GeoGuesser but for Princeton! Guess where mystery photos were taken.",
        note: "",
        webLink: "https://spot.tigerapps.org/",
        repoLink: "https://github.com/TigerAppsOrg/TigerSpot",
        screenshot: SpotImage,
        alt: "Tiger Spot app screenshot",
        contributors: [
            { name: "Claudia Lee '26", url: "" },
            { name: "Jessica Yan '26", url: "" },
            { name: "Frank Liu '26", url: "" },
            { name: "Ethan Do '26", url: "" },
            { name: "Winsice Ng '26", url: "" }
        ],
        featured: true,
        category: "Games"
    },
    // Course Planning
    {
        title: "PrincetonCourses",
        description:
            "Search through courses quickly to find the list of courses you wish to take.",
        note: "",
        webLink: "https://princetoncourses.com/",
        repoLink: "https://github.com/PrincetonUSG/PrincetonCourses",
        screenshot: PrincetonCoursesImage,
        alt: "Princeton Courses app screenshot",
        contributors: [
            { name: "Sebastian Hallum Clarke '19", url: "" },
            { name: "Caterina Golner '19", url: "" },
            { name: "Bensu Sicim '19", url: "" },
            { name: "Mel Shu '19", url: "" },
            { name: "Kara Bressler '19", url: "" }
        ],
        category: "Course Planning"
    },
    {
        title: "TigerSnatch",
        description:
            "Receive email and text notifications when spots open in full classes. Trade spots with other students.",
        note: "",
        webLink: "https://tigersnatch.com/?ref=tigerapps",
        repoLink: "https://github.com/PrincetonUSG/tigersnatch",
        screenshot: TigerSnatchImage,
        alt: "Tiger Snatch app screenshot",
        contributors: [
            { name: "Shannon Heh '23", url: "" },
            { name: "Nick Padmanabhan '23", url: "" },
            { name: "Byron Zhang '23", url: "" }
        ],
        category: "Course Planning"
    },
    {
        title: "TigerPath",
        description:
            "Plan out your four-year course schedule and track major/degree requirements.",
        note: "",
        webLink: "https://www.tigerpath.io/",
        repoLink: "https://github.com/PrincetonUSG/TigerPath",
        screenshot: TigerPathImage,
        alt: "Tiger Path app screenshot",
        contributors: [
            { name: "Richard Chu '18", url: "" },
            { name: "Barak Nehoran '18", url: "" },
            { name: "Daniel Leung '20", url: "" },
            { name: "Adeniji Ogunlana '19", url: "" }
        ],
        category: "Course Planning"
    },
    // Games
    {
        title: "TigerType",
        description:
            "Battle in typing races against friends in real-time. Create private lobbies and compete on leaderboards!",
        note: "",
        webLink: "https://type.tigerapps.org/",
        repoLink: "https://github.com/TigerAppsOrg/tigertype",
        screenshot: TigerTypeImage,
        alt: "Tiger Type app screenshot",
        contributors: [
            { name: "Ammaar Alam '27", url: "https://ammaaralam.com" },
            { name: "William Guan '27", url: "" },
            { name: "Ryan Chen '27", url: "" }
        ],
        category: "Games"
    },
    {
        title: "PawPointClicker",
        description:
            "Cookie Clicker for Princeton! Earn 'paw points' by clicking the prox!",
        note: "",
        webLink: "https://clicker.tigerapps.org/",
        repoLink: "https://github.com/TigerAppsOrg/PawPointClicker/",
        screenshot: ClickerImage,
        alt: "Tiger Clicker app screenshot",
        contributors: [
            { name: "Kevin Liu '28", url: "https://www.kevin-liu.tech/" }
        ],
        category: "Games"
    },
    // Campus Life
    {
        title: "TigerLift",
        description:
            "Connect with travel buddies and split rideshare costs effortlessly!",
        note: "",
        webLink: "https://lift.tigerapps.org/",
        repoLink: "https://github.com/TigerAppsOrg/TigerLift",
        screenshot: TigerLiftImage,
        alt: "Tiger Lift app screenshot",
        contributors: [
            { name: "Julia Ying '26", url: "" },
            { name: "Grace Kim '26", url: "" },
            { name: "Ritika Bhatnagar '26", url: "" },
            { name: "Aasha Jain '26", url: "" }
        ],
        category: "Campus Life"
    },
    {
        title: "Today",
        description:
            "Chrome extension that replaces your new tab with crucial daily Princeton info. Features live data and study mode!",
        note: "",
        webLink:
            "https://chromewebstore.google.com/detail/today-princeton/iejdjhiphonjpgaobmpniifeipiomgee?hl=en",
        repoLink: "https://github.com/leo-step/Today",
        screenshot: TodayImage,
        alt: "Today extension screenshot",
        contributors: [
            { name: "Leo Stepanewk '25", url: "" },
            { name: "Aaliyah Sayed '26", url: "" },
            { name: "Oyu Enkhbold '26", url: "https://oyu-e.github.io/" },
            { name: "Shreyas Garimella '28", url: "" },
            { name: "Grace Tan '28", url: "" }
        ],
        category: "Campus Life"
    },
    {
        title: "NutriTiger",
        description:
            "Discover what your dining hall offers and track your nutrition effortlessly.",
        note: "",
        webLink: "https://nutritiger.tigerapps.org/",
        repoLink: "https://github.com/TigerAppsOrg/nutritiger",
        screenshot: NutriTigerImage,
        alt: "Nutri Tiger app screenshot",
        contributors: [
            { name: "Rishabh Jain '26", url: "" },
            { name: "Oyu Enkhbold '26", url: "https://oyu-e.github.io/" },
            { name: "Eric Kurkowski '26", url: "" },
            { name: "Jewel Merriman '26", url: "" },
            { name: "Stephanie Oh '26", url: "" }
        ],
        category: "Campus Life"
    },
    {
        title: "TigerStudy",
        description: "Get matched to study groups for any of your courses.",
        note: "Inquiries should be directed to the McGraw Center.",
        webLink: "https://study.tigerapps.org/",
        repoLink: "https://github.com/tigerappsorg/tiger-study-2",
        screenshot: TigerStudyImage,
        alt: "Tiger Study app screenshot",
        contributors: [
            { name: "Caroline di Vittorio '22", url: "" },
            { name: "Kasey McFadden '22", url: "" }
        ],
        additionalContributors: [
            {
                startMsg: "Updates by",
                contributors: [
                    { name: "Joshua Lau '26", url: "https://motoaki.dev/" }
                ]
            }
        ],
        category: "Campus Life"
    },
    {
        title: "TigerMenus",
        description:
            "Compare menu options across all 6 dining halls on a single page!",
        note: "",
        webLink: "https://menus.tigerapps.org/",
        repoLink: "https://github.com/axu2/tiger-menus",
        screenshot: TigerMenusImage,
        alt: "Tiger Menus app screenshot",
        contributors: [
            { name: "Alex Xu '20", url: "" },
            { name: "William Li '20", url: "" },
            { name: "Yang Song '20", url: "" }
        ],
        category: "Campus Life"
    },
    // Room Draw
    {
        title: "TigerDraw",
        description:
            "The one-stop-shop for room draw planning. See when past rooms were drawn and create wishlists.",
        note: "",
        webLink: "https://draw.tigerapps.org/",
        repoLink: "https://github.com/PrincetonUSG/TigerDraw",
        screenshot: TigerDrawImage,
        alt: "Tiger Draw app screenshot",
        contributors: [
            { name: "Christine Cho '22", url: "" },
            { name: "Grace Cuenca '22", url: "" },
            { name: "Frank Ge '22", url: "" },
            { name: "Hannah Huh '22", url: "" }
        ],
        additionalContributors: [
            {
                startMsg: "Updates by",
                contributors: [
                    { name: "Leo Stepanewk '25", url: "" },
                    { name: "Andy Zhang '26", url: "" },
                    { name: "Ammaar Alam '27", url: "https://ammaaralam.com" }
                ]
            }
        ],
        category: "Room Draw"
    },
    {
        title: "PrincetonRooms",
        description:
            "Analyze available rooms with seamless filtering and data visualization.",
        note: "",
        webLink: "https://rooms.tigerapps.org/",
        repoLink: "https://github.com/TigerAppsOrg/princeton-rooms",
        screenshot: PrincetonRoomsImage,
        alt: "Princeton Rooms app screenshot",
        contributors: [{ name: "Boaz Yoo '25", url: "" }],
        category: "Room Draw"
    }
];

// Category color mapping for UI
export const categoryColors: Record<
    string,
    { bg: string; text: string; border: string }
> = {
    "AI Assistant": {
        bg: "bg-coral/10",
        text: "text-coral-dark",
        border: "border-coral/20"
    },
    "Course Planning": {
        bg: "bg-sage/10",
        text: "text-sage-dark",
        border: "border-sage/20"
    },
    "Games": {
        bg: "bg-peach",
        text: "text-coral-dark",
        border: "border-peach-dark/20"
    },
    "Campus Life": {
        bg: "bg-warm-blue/10",
        text: "text-warm-blue",
        border: "border-warm-blue/20"
    },
    "Room Draw": {
        bg: "bg-lavender/20",
        text: "text-charcoal",
        border: "border-lavender/30"
    }
};
