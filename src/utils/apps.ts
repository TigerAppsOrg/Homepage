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
                "Knows all academic, eating club, and event information in real time. Integrated with Princeton Courses. By Leo Stepanewk '25, Aaliyah Sayed '26, Ammaar Alam '27, and Shreyas Garimella '28.",
            note: "",
            webLink: "https://tay.tigerapps.org/",
            repoLink: "https://github.com/leo-step/Today",
            screenshot: TayImage,
            alt: "Tay chatbot screenshot"
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
                "Search through courses quickly to find the list of courses you wish to take. By Sebastian Hallum Clarke '19, Caterina Golner '19, Bensu Sicim '19, Mel Shu '19, and Kara Bressler '19.",
            note: "",
            webLink: "https://princetoncourses.com/",
            repoLink: "https://github.com/PrincetonUSG/PrincetonCourses",
            screenshot: PrincetonCoursesImage,
            alt: "Princeton Courses app screenshot"
        },
        {
            title: "TigerSnatch",
            description:
                "Receive email and text message notifications when spots open in full classes. Trade spots with other students. By Shannon Heh '23, Nick Padmanabhan '23, and Byron Zhang '23.",
            note: "",
            webLink: "https://tigersnatch.com/?ref=tigerapps",
            repoLink: "https://github.com/PrincetonUSG/tigersnatch",
            screenshot: TigerSnatchImage,
            alt: "Tiger Snatch app screenshot"
        },
        {
            title: "TigerPath",
            description:
                "Plan out your four-year course schedule and track major/degree requirements. By Richard Chu '18, Barak Nehoran '18, Daniel Leung '20, and Adeniji Ogunlana '19.",
            note: "",
            webLink: "https://www.tigerpath.io/",
            repoLink: "https://github.com/PrincetonUSG/TigerPath",
            screenshot: TigerPathImage,
            alt: "Tiger Path app screenshot"
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
                "Get ready for some fun with the ultimate Princeton campus geography game!  In 'Daily' mode, you have one chance each day to guess where a mystery campus photo was taken on the map—score big points the closer you get! Challenge your friends in 'Versus' mode, where you'll go head-to-head in five thrilling rounds of guessing. By Claudia Lee '26, Jessica Yan '26, Frank Liu '26, Ethan Do '26, and Winsice Ng '26.",
            note: "",
            webLink: "https://spot.tigerapps.org/",
            repoLink: "https://github.com/TigerAppsOrg/TigerSpot",
            screenshot: SpotImage,
            alt: "Tiger Spot app screenshot"
        },
        {
            title: "PawPointClicker",
            description:
                "Cookie Clicker for Princeton! Earn 'paw points' by clicking the prox! PawPointClicker >>> iClicker. By Kevin Liu '28.",
            note: "",
            webLink: "https://clicker.tigerapps.org/",
            repoLink: "https://github.com/TigerAppsOrg/PawPointClicker/",
            screenshot: ClickerImage,
            alt: "Tiger Clicker app screenshot"
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
                "Tired of shelling out money on Lyft? Don't want to spam the ListServs to find other students going to the same place? Say goodbye to NJ Transit delays and expensive Ubers. TigerLift helps Princeton students connect with each other so they can split costs on rideshares! By Julia Ying '26, Grace Kim '26, Ritika Bhatnagar '26, and Aasha Jain '26",
            note: "",
            webLink: "https://lift.tigerapps.org/",
            repoLink: "https://github.com/TigerAppsOrg/TigerLift",
            screenshot: TigerLiftImage,
            alt: "Tiger Lift app screenshot"
        },
        {
            title: "Today",
            description:
                "Today is a new tab page that compiles the most crucial information you need to get through your day. It also contains study mode, a rotating background, and daily greeting. All data is live and refreshes hourly. By Leo Stepanewk '25, Aaliyah Sayed '26, Oyu Enkhbold '26, Shreyas Garimella '28, and Grace Tan '28.",
            note: "",
            webLink:
                "https://chromewebstore.google.com/detail/today-princeton/iejdjhiphonjpgaobmpniifeipiomgee?hl=en",
            repoLink: "https://github.com/leo-step/Today",
            screenshot: TodayImage,
            alt: "Today extension screenshot"
        },
        {
            title: "NutriTiger",
            description:
                "Discover what your dining hall offers and track your nutrition effortlessly with NutriTiger. By Rishabh Jain '26, Oyu Enkhbold '26, Eric Kurkowski '26, Jewel Merriman '26, and Stephanie Oh '26.",
            note: "",
            webLink: "https://nutritiger.tigerapps.org/",
            repoLink: "https://github.com/TigerAppsOrg/nutritiger",
            screenshot: NutriTigerImage,
            alt: "Nutri Tiger app screenshot"
        },
        {
            title: "TigerStudy",
            description:
                "Get matched to study groups for any of your courses. By Caroline di Vittorio '22, Kasey McFadden '22, and Joshua Lau '26.",
            note: "Note: Any inquiries about study group matching should be directed to the McGraw Center.",
            webLink: "https://study.tigerapps.org/",
            repoLink: "https://github.com/tigerappsorg/tiger-study-2",
            screenshot: TigerStudyImage,
            alt: "Tiger Study app screenshot"
        },
        {
            title: "TigerRetail",
            description:
                "Buy, sell, and request goods; direct message users in-site, connect with transportation buddies, find campus event tickets, and more. By Albert Lin '23, Katie McLaughlin '23, Sara Schwartz '23, Phoebe Lin '23.",
            note: "This app is temporarily disabled. We are working on a new version. There is no expected release date at this time.",
            webLink: "http://retail.tigerapps.org/",
            repoLink: "https://github.com/PrincetonUSG/TigerReTail",
            screenshot: TigerRetailImage,
            alt: "Tiger Retail app screenshot"
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
                "The one-stop-shop platform for room draw planning. See when past rooms were drawn, filter them, and create a list of potential rooms without needing to parse through PDFs. By Christine Cho '22, Grace Cuenca '22, Frank Ge '22, and Hannah Huh '22. Updates by Leo Stepanewk '25, Andy Zhang '26, Ammaar Alam '27. Data provided by the TigerDen team: Conor McKenna '26, Kael Mlinek '26, and Lucas Tudoras '26.",
            note: "",
            webLink: "https://draw.tigerapps.org/",
            repoLink: "https://github.com/PrincetonUSG/TigerDraw",
            screenshot: TigerDrawImage,
            alt: "Tiger Draw app screenshot"
        },
        {
            title: "PrincetonRooms",
            description:
                "Analyze the currently avaliable rooms PDF with seamless filtering and data visualization. By Boaz Yoo '25.",
            note: "",
            webLink: "https://rooms.tigerapps.org/",
            repoLink: "https://github.com/TigerAppsOrg/princeton-rooms",
            screenshot: PrincetonRoomsImage,
            alt: "Princeton Rooms app screenshot"
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
                "Locate and share free food easily with a visual campus map marking free food events, email notifications, and more. By Daphne Barretto '23, Aaron Buck '23, and Ben Chan '23.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/food4u",
            repoLink: "https://github.com/TigerAppsOrg/food4u",
            screenshot: Food4UImage,
            alt: "Food 4 U app screenshot"
        },
        {
            title: "Gigl",
            description:
                "Unleash your skills and earn money by connecting with fellow students seeking your talents! Apply to gigs, set up your freelancer profile and wait for offers OR post a gig yourself if you are looking to hire someone. By Taylan Aydin '25, Andre Biehl '25, Yagiz Devre '26, and Ibrahim Ahmed '25.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/gigl",
            repoLink: "https://github.com/TigerAppsOrg/gigl",
            screenshot: GiglImage,
            alt: "Gigl app screenshot"
        },
        {
            title: "MealMatch",
            description:
                "Find new people to meet and eat with in dining halls who want to eat at the same time and place as you. Receive real-time text notifications upon finding a match along with your match's profile and contact information. By Adam Kelch '24, Ameya Vaidya '24, Jeremy Dapaah'24, and Rajiv Swamy '24.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/MealMatch",
            repoLink: "https://github.com/TigerAppsOrg/MealMatch",
            screenshot: MealMatchImage,
            alt: "Meal Match app screenshot"
        },
        {
            title: "ReBook",
            description:
                "Textbook marketplace for Princeton students. By Sophie Li '23, Jayson Wu '23, and Connie Xu '23.",
            note: "Replacement: TigerRetail",
            webLink: "https://github.com/TigerAppsOrg/rebook",
            repoLink: "https://github.com/TigerAppsOrg/rebook",
            screenshot: RebookImage,
            alt: "Re-Book app screenshot"
        },
        {
            title: "Recal",
            description:
                "Plan the perfect course schedule and automatically sync with your Google Calendar. By Naphat Sanguansin '16, Dyland Xue '16, and Maxim Zaslavsky '17.",
            note: "Replacement: TigerJunction",
            webLink: "https://github.com/TigerAppsOrg/ReCal",
            repoLink: "https://github.com/TigerAppsOrg/ReCal",
            screenshot: RecalImage,
            alt: "ReCal app screenshot"
        },
        {
            title: "TigerResearch",
            description:
                "Search for available Princeton professors within your field of interest, for independent work, thesis, or other research. By Eric Ahn '24, Vivek Kolli '24, and Alex Zhang '24.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerResearch",
            repoLink: "https://github.com/TigerAppsOrg/TigerResearch",
            screenshot: ResearchImage,
            alt: "Tiger Research app screenshot"
        },
        {
            title: "TigerRooms",
            description:
                "Search rooms, reviews, and floor plans. By Ben Parks '17.",
            note: "Replacement: TigerDraw",
            webLink: "https://github.com/TigerAppsOrg/rooms-app",
            repoLink: "https://github.com/TigerAppsOrg/rooms-app",
            screenshot: RoomsImage,
            alt: "Tiger Rooms app screenshot"
        },
        {
            title: "SpaceTiger",
            description:
                "Search for and review spots on campus, whether it be for studying, partying, rehearsing, or just hanging out. By Tyler Benson '24, Eva Vesely '24, Giao Vu Dinh '24, Chenhan Zhang '24, Thanya Begum '23.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/SpaceTiger",
            repoLink: "https://github.com/TigerAppsOrg/SpaceTiger",
            screenshot: SpaceTigerImage,
            alt: "Space Tiger app screenshot"
        },
        {
            title: "TigerFit",
            description:
                "Track workouts, visualize progress, and get recommendations for weights/repetitions based on your workout history. By Ian Murray '23, Adam Gamba '23, Kevin Castro '23, Darren Zheng '23.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerFit",
            repoLink: "https://github.com/TigerAppsOrg/TigerFit",
            screenshot: TigerFitImage,
            alt: "Tiger Fit app screenshot"
        },
        {
            title: "TigerJobs",
            description:
                "Leave a review and find what you need to land your next interview or job from peers. By Arnav Kumar '24 and Ambri Ma '24.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerJobs",
            repoLink: "https://github.com/TigerAppsOrg/TigerJobs",
            screenshot: TigerJobsImage,
            alt: "Tiger Jobs app screenshot"
        },
        {
            title: "TigerMap",
            description:
                "A course exploration app that allows students to discover what classes to take next. Create and share course tracks with others. By Leo Stepanewk '25, Aaliyah Sayed '25, and Bill Ao '24.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerMap",
            repoLink: "https://github.com/TigerAppsOrg/TigerMap",
            screenshot: TigerMapImage,
            alt: "Tiger Map app screenshot"
        },
        {
            title: "TigerThrift",
            description:
                "Sell clothing or shop fellow Tigers' closets. Katie Chou '23, Katelyn Rodrigues '23, Iroha Shirai '23.",
            note: "Replacement: TigerRetail",
            webLink: "https://github.com/TigerAppsOrg/TigerThrift",
            repoLink: "https://github.com/TigerAppsOrg/TigerThrift",
            screenshot: TigerThriftImage,
            alt: "Tiger Thrift app screenshot"
        },
        {
            title: "TigerTickets",
            description:
                "Secondary marketplace to buy/re-sell/exchange tickets. By Jenny Sheng '22, Joseph Chen '22, and Sunny Yoo '22.",
            note: "Replacement: TigerRetail",
            webLink: "https://github.com/TigerAppsOrg/TigerTickets",
            repoLink: "https://github.com/TigerAppsOrg/TigerTickets",
            screenshot: TigerTicketsImage,
            alt: "Tiger Tickets app screenshot"
        },
        {
            title: "TigerTools",
            description:
                "Find amenities using a map of campus and provide feedback on them. By Indu Panigrahi '23, Raymond Liu '23, and Adam Rebei '23.",
            note: "",
            webLink: "https://github.com/TigerAppsOrg/TigerTools",
            repoLink: "https://github.com/TigerAppsOrg/TigerTools",
            screenshot: TigerToolsImage,
            alt: "Tiger Tools app screenshot"
        }
    ]
};
