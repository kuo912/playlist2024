import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TbClick } from "react-icons/tb";
import { TbClover } from "react-icons/tb";
import { BiBookHeart } from "react-icons/bi";
import { TbHeadphones } from "react-icons/tb";
import { TbHeadphonesFilled } from "react-icons/tb";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { HiOutlineFire } from "react-icons/hi";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "Home",
        icon: <TbClover />,
        src: "/"
    },
    {
        title: "오늘의 추천음악",
        icon: <TbClick />,
        src: "/today"
    },
    {
        title: "추천 아티스트",
        icon: <PiPersonArmsSpreadFill />,
        src: "/artist"
    },
    {
        title: "추천 플레이리스트",
        icon: <BiBookHeart />,
        src: "/playlist"
    },
    {
        title: "최신 음악",
        icon: <HiOutlineFire />,
        src: "/latest"
    },
    {
        title: "뮤직비디오",
        icon: <TbBrandYoutubeFilled />,
        src: "/musicvideo"
    },
    {
        title: "Pop",
        icon: <TbHeadphones />,
        src: "/pop"
    },
    {
        title: "K-pop",
        icon: <TbHeadphonesFilled />,
        src: "/Kpop"
    },
];

export const searchKeyword = [
    {
        title: "playlist",
        src: "/search/playlist"
    },
    {
        title: "pop",
        src: "/search/pop"
    },
    {
        title: "K-pop",
        src: "/search/k-pop"
    },
    {
        title: "Hip-hop",
        src: "/search/hiphop"
    },
    {
        title: "Classic",
        src: "/search/classic"
    },
    {
        title: "Band",
        src: "/search/band"
    },
    {
        title: "Rock",
        src: "/search/rock"
    },
    {
        title: "Ost",
        src: "/search/ost"
    },
    {
        title: "Ballade",
        src: "/search/ballade"
    },
    {
        title: "Dance",
        src: "/search/dance"
    },
    {
        title: "Trot",
        src: "/search/trot"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/",
        icon: <AiOutlineInstagram />
    },
]