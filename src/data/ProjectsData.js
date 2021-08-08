import { v4 as uuidv4 } from "uuid";
import RandomImg from "../images/project.png";
import fso from "../images/FSO.png";
import recipe from "../images/Recipe.png";
import todo from "../images/Todo.png";
import weather from "../images/Weather.png";
const projects = [
  {
    id: uuidv4(),
    title1: "Recipe Search",
    title2: "web app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: "recipe",
    category: "top",
    stack: ["react", "material", "styled"],
    github: "https://github.com/CrishnaChaitanya/React-recipie-search",
    site: "https://hardcore-lamport-69224f.netlify.app/",
  },
  {
    id: uuidv4(),
    title1: "mentorr",
    title2: "web app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: "mentorr",
    category: "top",
    stack: ["html", "bootstrap", "javascript"],
    github: "https://github.com/CrishnaChaitanya/mentorr",
    site: "https://crishnachaitanya.github.io/mentorr/",
  },
  {
    id: uuidv4(),
    title1: "Weather App",
    title2: "react app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: "weather",
    category: "top",
    stack: ["react", "styled"],
    github: "https://github.com/CrishnaChaitanya/React-Weather-App",
    site: "https://crishnachaitanya.github.io/mentorr/",
  },
  {
    id: uuidv4(),
    title1: "firebase todo",
    title2: "web app",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: "todo",
    category: "top",
    stack: ["react", "firebase"],
    github: "https://github.com/CrishnaChaitanya/",
    site: "https://github.com/CrishnaChaitanya/",
  },
  {
    id: uuidv4(),
    title1: "File System Organizer",
    title2: "CLI TOOL",
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: "fso",
    category: "no",
    stack: ["nodejs"],
    github: "https://github.com/CrishnaChaitanya/File-System-Organizer",
    site: "https://www.wix.com/website-template/view/html/1936",
  },
];

export default projects;
