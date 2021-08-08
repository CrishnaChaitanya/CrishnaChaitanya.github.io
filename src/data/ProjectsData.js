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
    desc: "website will fetch results from an API and display the Ingredients and Procedure.Used the concept of de-bouncing made using REACT, AXIOS, API, MATERIAL-UI, STYLED-COMPONENTS ",
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
    desc: "A website that helps students by guiding, provding roadmaps and free resources.  After you enter your subject in the search bar, click on the roadmap button and it will show you how to approach your subject from A to Z.",
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
    desc: "Built using ReactJS and styled components,It fetches details from openWeather API",
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
    desc: " A todo application Built using ReactJS and Firebase as the backend ",
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
    desc: "when users download files from the internet, this tool helps them segregate all the different files based on the extensions and places them in their respective folder",
    img: "fso",
    category: "no",
    stack: ["nodejs"],
    github: "https://github.com/CrishnaChaitanya/File-System-Organizer",
    site: "https://www.wix.com/website-template/view/html/1936",
  },
];

export default projects;
