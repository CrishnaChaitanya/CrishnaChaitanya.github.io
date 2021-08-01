import { v4 as uuidv4 } from "uuid";
import RandomImg from "../images/project.png";

const projects = [
  {
    id: uuidv4(),
    title1: "Recipe Search",
    title2: "web app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: RandomImg,
    category: "top",
    stack: ["react", "nodejs"],
    github: "https://github.com/CrishnaChaitanya/mentorr",
    site: "https://crishnachaitanya.github.io/mentorr/",
  },
  {
    id: uuidv4(),
    title1: "mentorr",
    title2: "web app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: RandomImg,
    category: "top",
    stack: ["html", "css", "javascript"],
    github: "https://github.com/CrishnaChaitanya/mentorr",
    site: "https://crishnachaitanya.github.io/mentorr/",
  },
  {
    id: uuidv4(),
    title1: "Weather App",
    title2: "react app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: RandomImg,
    category: "top",
    stack: ["react", "nodejs"],
    github: "https://github.com/CrishnaChaitanya/mentorr",
    site: "https://crishnachaitanya.github.io/mentorr/",
  },
  {
    id: uuidv4(),
    title1: "pepCalender",
    title2: "web app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: RandomImg,
    category: "top",
    stack: ["react", "nodejs"],
    github: "https://github.com/CrishnaChaitanya/mentorr",
    site: "https://crishnachaitanya.github.io/mentorr/",
  },
  {
    id: uuidv4(),
    title1: "File System Organizer",
    title2: "CLI TOOL",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: RandomImg,
    category: "no",
    stack: ["react", "nodejs"],
    github: "https://github.com/CrishnaChaitanya/mentorr",
    site: "https://crishnachaitanya.github.io/mentorr/",
  },
];

export default projects;
