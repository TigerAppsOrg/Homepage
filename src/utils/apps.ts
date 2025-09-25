// AI Assist Apps
import TayImage from "../assets/apps/tay.webp";

// Course Planning Apps
import TigerJunctionImage from "../assets/apps/tigerjunction.webp";
import PrincetonCoursesImage from "../assets/apps/princetoncourses.webp";
import TigerSnatchImage from "../assets/apps/tigersnatch.webp";
import TigerPathImage from "../assets/apps/tigerpath.webp";

// Games
import SpotImage from "../assets/apps/spot.webp";
import ClickerImage from "../assets/apps/clicker.webp";

// Campus Life Apps
import TigerLiftImage from "../assets/apps/lift.webp";
import TodayImage from "../assets/apps/today.webp";
import NutriTigerImage from "../assets/apps/nutritiger.webp";
import TigerStudyImage from "../assets/apps/tigerstudy.webp";
import TigerRetailImage from "../assets/apps/tigerretail.webp";
import TigerMenusImage from "../assets/archive/tigermenus.webp";

// Room Draw Apps
import TigerDrawImage from "../assets/apps/tigerdraw.webp";
import PrincetonRoomsImage from "../assets/apps/princetonrooms.webp";

// Archive Apps
import Food4UImage from "../assets/archive/food4u.webp";
import GiglImage from "../assets/archive/gigl.webp";
import MealMatchImage from "../assets/archive/mealmatch.webp";
import RebookImage from "../assets/archive/rebook.webp";
import RecalImage from "../assets/archive/recal.webp";
import ResearchImage from "../assets/archive/research.webp";
import RoomsImage from "../assets/archive/rooms.webp";
import SpaceTigerImage from "../assets/archive/spacetiger.webp";
import TigerFitImage from "../assets/archive/tigerfit.webp";
import TigerJobsImage from "../assets/archive/tigerjobs.webp";
import TigerMapImage from "../assets/archive/tigermap.webp";
import TigerThriftImage from "../assets/archive/tigerthrift.webp";
import TigerTicketsImage from "../assets/archive/tigertickets.webp";
import TigerToolsImage from "../assets/archive/tigertools.webp";

import type { AppSectionProps } from "./types";

export const aiAssistApps: AppSectionProps = {
    title: "AI Assistant",
    description: "Ask me anything about Princeton and campus life.",
    apps: [
        {
            title: "Tay",
            description:
                "Knows all academic, eating club, and event information in real time. Integrated with Princeton Courses.",
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
            ]
        }
    ]
};

export const coursePlanningApps: AppSectionProps = {
    title: "Course Planning",
    description: "Plan your courses and schedules with these powerful tools.",
    apps: [
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
            ]
        },
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
            ]
        },
        {
            title: "TigerSnatch",
            description:
                "Receive email and text message notifications when spots open in full classes. Trade spots with other students.",
            note: "",
            webLink: "https://tigersnatch.com/?ref=tigerapps",
            repoLink: "https://github.com/PrincetonUSG/tigersnatch",
            screenshot: TigerSnatchImage,
            alt: "Tiger Snatch app screenshot",
            contributors: [
                { name: "Shannon Heh '23", url: "" },
                { name: "Nick Padmanabhan '23", url: "" },
                { name: "Byron Zhang '23", url: "" }
            ]
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
            ]
        }
    ]
};

export const games: AppSectionProps = {
    title: "Games",
    description: "Have fun with these Princeton-themed games!",
    apps: [
        {
            title: "TigerSpot",
            description:
                "Get ready for some fun with the ultimate Princeton campus geography game! In 'Daily' mode, you have one chance each day to guess where a mystery campus photo was taken on the map—score big points the closer you get! Challenge your friends in 'Versus' mode, where you'll go head-to-head in five thrilling rounds of guessing.",
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
            ]
        },
        {
            title: "PawPointClicker",
            description:
                "Cookie Clicker for Princeton! Earn 'paw points' by clicking the prox! PawPointClicker >>> iClicker.",
            note: "",
            webLink: "https://clicker.tigerapps.org/",
            repoLink: "https://github.com/TigerAppsOrg/PawPointClicker/",
            screenshot: ClickerImage,
            alt: "Tiger Clicker app screenshot",
            contributors: [
                { name: "Kevin Liu '28", url: "https://www.kevin-liu.tech/" }
            ]
        }
    ]
};

export const campusLifeApps: AppSectionProps = {
    title: "Campus Life",
    description: "Find rides, meals, study groups, and more!",
    apps: [
        {
            title: "TigerLift",
            description:
                "Tired of shelling out money on Lyft? Don't want to spam the ListServs to find other students going to the same place? Say goodbye to NJ Transit delays and expensive Ubers. TigerLift helps Princeton students connect with each other so they can split costs on rideshares!",
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
            ]
        },

        {
            title: "Today",
            description:
                "Today is a new tab page that compiles the most crucial information you need to get through your day. It also contains study mode, a rotating background, and daily greeting. All data is live and refreshes hourly.",
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
            ]
        },
        {
            title: "NutriTiger",
            description:
                "Discover what your dining hall offers and track your nutrition effortlessly with NutriTiger.",
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
            ]
        },

        {
            title: "TigerStudy",
            description: "Get matched to study groups for any of your courses.",
            note: "Note: Any inquiries about study group matching should be directed to the McGraw Center.",
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
            ]
        },
        {
            title: "TigerMenus",
            description:
                "Easily compare menu options across all 6 dining halls on a single page! Supports mobile and desktop browsers!",
            note: "",
            webLink: "https://menus.tigerapps.org/",
            repoLink: "https://github.com/axu2/tiger-menus",
            screenshot: TigerMenusImage,
            alt: "Tiger Menus app screenshot",
            contributors: [
                { name: "Alex Xu '20", url: "" },
                { name: "William Li '20", url: "" },
                { name: "Yang Song '20", url: "" }
            ]
        }
    ]
};

export const roomDrawApps: AppSectionProps = {
    title: "Room Draw",
    description: "Plan your room draw strategy and find the perfect room.",
    apps: [
        {
            title: "TigerDraw",
            description:
                "The one-stop-shop platform for room draw planning. See when past rooms were drawn, filter them, and create a list of potential rooms without needing to parse through PDFs.",
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
                        {
                            name: "Ammaar Alam '27",
                            url: "https://ammaaralam.com"
                        }
                    ]
                },
                {
                    startMsg: "Data provided by the TigerDen team:",
                    contributors: [
                        { name: "Conor McKenna '26", url: "" },
                        { name: "Kael Mlinek '26", url: "" },
                        { name: "Lucas Tudoras '26", url: "" }
                    ]
                }
            ]
        },
        {
            title: "PrincetonRooms",
            description:
                "Analyze the currently avaliable rooms PDF with seamless filtering and data visualization.",
            note: "",
            webLink: "https://rooms.tigerapps.org/",
            repoLink: "https://github.com/TigerAppsOrg/princeton-rooms",
            screenshot: PrincetonRoomsImage,
            alt: "Princeton Rooms app screenshot",
            contributors: [{ name: "Boaz Yoo '25", url: "" }]
        }
    ]
};

export const archiveApps: AppSectionProps = {
    title: "Archive",
    description: "Past TigerApps that are no longer supported.",
    apps: [
        {
            title: "Food4U",
            description:
                "Locate and share free food easily with a visual campus map marking free food events, email notifications, and more.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/food4u",
            repoLink: "https://github.com/TigerAppsOrg/food4u",
            screenshot: Food4UImage,
            alt: "Food 4 U app screenshot",
            contributors: [
                { name: "Daphne Barretto '23", url: "" },
                { name: "Aaron Buck '23", url: "" },
                { name: "Ben Chan '23", url: "" }
            ]
        },
        {
            title: "Gigl",
            description:
                "Unleash your skills and earn money by connecting with fellow students seeking your talents! Apply to gigs, set up your freelancer profile and wait for offers OR post a gig yourself if you are looking to hire someone.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/gigl",
            repoLink: "https://github.com/TigerAppsOrg/gigl",
            screenshot: GiglImage,
            alt: "Gigl app screenshot",
            contributors: [
                { name: "Taylan Aydin '25", url: "" },
                { name: "Andre Biehl '25", url: "" },
                { name: "Yagiz Devre '26", url: "" },
                { name: "Ibrahim Ahmed '25", url: "" }
            ]
        },
        {
            title: "MealMatch",
            description:
                "Find new people to meet and eat with in dining halls who want to eat at the same time and place as you. Receive real-time text notifications upon finding a match along with your match's profile and contact information.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/MealMatch",
            repoLink: "https://github.com/TigerAppsOrg/MealMatch",
            screenshot: MealMatchImage,
            alt: "Meal Match app screenshot",
            contributors: [
                { name: "Adam Kelch '24", url: "" },
                { name: "Ameya Vaidya '24", url: "" },
                { name: "Jeremy Dapaah '24", url: "" },
                { name: "Rajiv Swamy '24", url: "" }
            ]
        },
        {
            title: "ReBook",
            description: "Textbook marketplace for Princeton students.",
            note: "Replacement: TigerRetail",
            webLink: "https://github.com/TigerAppsOrg/rebook",
            repoLink: "https://github.com/TigerAppsOrg/rebook",
            screenshot: RebookImage,
            alt: "Re-Book app screenshot",
            contributors: [
                { name: "Sophie Li '23", url: "" },
                { name: "Jayson Wu '23", url: "" },
                { name: "Connie Xu '23", url: "" }
            ]
        },
        {
            title: "Recal",
            description:
                "Plan the perfect course schedule and automatically sync with your Google Calendar.",
            note: "Replacement: TigerJunction",
            webLink: "https://github.com/TigerAppsOrg/ReCal",
            repoLink: "https://github.com/TigerAppsOrg/ReCal",
            screenshot: RecalImage,
            alt: "ReCal app screenshot",
            contributors: [
                { name: "Naphat Sanguansin '16", url: "" },
                { name: "Dylan Xue '16", url: "" },
                { name: "Maxim Zaslavsky '17", url: "" }
            ]
        },
        {
            title: "TigerResearch",
            description:
                "Search for available Princeton professors within your field of interest, for independent work, thesis, or other research.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerResearch",
            repoLink: "https://github.com/TigerAppsOrg/TigerResearch",
            screenshot: ResearchImage,
            alt: "Tiger Research app screenshot",
            contributors: [
                { name: "Eric Ahn '24", url: "" },
                { name: "Vivek Kolli '24", url: "" },
                { name: "Alex Zhang '24", url: "" }
            ]
        },
        {
            title: "TigerRooms",
            description: "Search rooms, reviews, and floor plans.",
            note: "Replacement: TigerDraw",
            webLink: "https://github.com/TigerAppsOrg/rooms-app",
            repoLink: "https://github.com/TigerAppsOrg/rooms-app",
            screenshot: RoomsImage,
            alt: "Tiger Rooms app screenshot",
            contributors: [{ name: "Ben Parks '17", url: "" }]
        },
        {
            title: "SpaceTiger",
            description:
                "Search for and review spots on campus, whether it be for studying, partying, rehearsing, or just hanging out.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/SpaceTiger",
            repoLink: "https://github.com/TigerAppsOrg/SpaceTiger",
            screenshot: SpaceTigerImage,
            alt: "Space Tiger app screenshot",
            contributors: [
                { name: "Tyler Benson '24", url: "" },
                { name: "Eva Vesely '24", url: "" },
                { name: "Giao Vu Dinh '24", url: "" },
                { name: "Chenhan Zhang '24", url: "" },
                { name: "Thanya Begum '23", url: "" }
            ]
        },
        {
            title: "TigerFit",
            description:
                "Track workouts, visualize progress, and get recommendations for weights/repetitions based on your workout history.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerFit",
            repoLink: "https://github.com/TigerAppsOrg/TigerFit",
            screenshot: TigerFitImage,
            alt: "Tiger Fit app screenshot",
            contributors: [
                { name: "Ian Murray '23", url: "" },
                { name: "Adam Gamba '23", url: "" },
                { name: "Kevin Castro '23", url: "" },
                { name: "Darren Zheng '23", url: "" }
            ]
        },
        {
            title: "TigerJobs",
            description:
                "Leave a review and find what you need to land your next interview or job from peers.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerJobs",
            repoLink: "https://github.com/TigerAppsOrg/TigerJobs",
            screenshot: TigerJobsImage,
            alt: "Tiger Jobs app screenshot",
            contributors: [
                { name: "Arnav Kumar '24", url: "" },
                { name: "Ambri Ma '24", url: "" }
            ]
        },
        {
            title: "TigerMap",
            description:
                "A course exploration app that allows students to discover what classes to take next. Create and share course tracks with others.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerMap",
            repoLink: "https://github.com/TigerAppsOrg/TigerMap",
            screenshot: TigerMapImage,
            alt: "Tiger Map app screenshot",
            contributors: [
                { name: "Leo Stepanewk '25", url: "" },
                { name: "Aaliyah Sayed '25", url: "" },
                { name: "Bill Ao '24", url: "" }
            ]
        },
        {
            title: "TigerThrift",
            description: "Sell clothing or shop fellow Tigers' closets.",
            note: "Replacement: TigerRetail",
            webLink: "https://github.com/TigerAppsOrg/TigerThrift",
            repoLink: "https://github.com/TigerAppsOrg/TigerThrift",
            screenshot: TigerThriftImage,
            alt: "Tiger Thrift app screenshot",
            contributors: [
                { name: "Katie Chou '23", url: "" },
                { name: "Katelyn Rodrigues '23", url: "" },
                { name: "Iroha Shirai '23", url: "" }
            ]
        },
        {
            title: "TigerTickets",
            description:
                "Secondary marketplace to buy/re-sell/exchange tickets.",
            note: "Replacement: TigerRetail",
            webLink: "https://github.com/TigerAppsOrg/TigerTickets",
            repoLink: "https://github.com/TigerAppsOrg/TigerTickets",
            screenshot: TigerTicketsImage,
            alt: "Tiger Tickets app screenshot",
            contributors: [
                { name: "Jenny Sheng '22", url: "" },
                { name: "Joseph Chen '22", url: "" },
                { name: "Sunny Yoo '22", url: "" }
            ]
        },
        {
            title: "TigerTools",
            description:
                "Find amenities using a map of campus and provide feedback on them.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerTools",
            repoLink: "https://github.com/TigerAppsOrg/TigerTools",
            screenshot: TigerToolsImage,
            alt: "Tiger Tools app screenshot",
            contributors: [
                { name: "Indu Panigrahi '23", url: "" },
                { name: "Raymond Liu '23", url: "" },
                { name: "Adam Rebei '23", url: "" }
            ]
        },
        {
            title: "TigerRetail",
            description:
                "Buy, sell, and request goods; direct message users in-site, connect with transportation buddies, find campus event tickets, and more.",
            note: ".",
            webLink: "https://github.com/PrincetonUSG/TigerReTail/",
            repoLink: "https://github.com/PrincetonUSG/TigerReTail",
            screenshot: TigerRetailImage,
            alt: "Tiger Retail app screenshot",
            contributors: [
                { name: "Albert Lin '23", url: "" },
                { name: "Katie McLaughlin '23", url: "" },
                { name: "Sara Schwartz '23", url: "" },
                { name: "Phoebe Lin '23", url: "" }
            ]
        }
    ]
};
