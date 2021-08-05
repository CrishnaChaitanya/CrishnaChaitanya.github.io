import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../images/project.png";
import { DiReact, DiHtml5,DiCss3,DiBootstrap,DiJavascript1,DiMysql,DiNodejs,DiPython} from "react-icons/di";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const ProjectItemStyles = styled.div`
  .projectElement {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: xxx-large;
    font-weight: bolder;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
  }
  .adjust {
    margin: 40px;
    margin-left: 100px;
  }
  .adjust:hover {
    -webkit-text-fill-color: white;
    -webkit-text-stroke: 0px #fff;
    
  }
  .description {
    font-family: "Montserrat", sans-serif;
    font-size: small;
    word-wrap: break-word;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 0px;
    width: 800px;
  }
  .number {
    font-size: xx-large;
    opacity: 0.7;
  }

  @media only screen and (max-width: 500px) {
    .projectElement {
      // margin-left:100px;
     
      font-size: x-large;
      font-weight: bolder;
      -webkit-text-fill-color: white;
      -webkit-text-stroke: 0px #fff;
    }
    .adjust {
      margin: 40px;
      margin-left: 20px;
    }
    .adjust:hover {
      
      
    }
    .description {
      font-family: "Montserrat", sans-serif;
      font-size: small;
      word-wrap: break-word;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 0px;
      width:275px;
    }

    .number {
      font-size: xx-large;
      opacity: 0.7;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title1 = "Project Name",
  title2 = "Project Name Cont..",
  number="",
  desc = "This is my personla projet which helps stiudent in navigating course and blah blah vlah and this is verty useful makde using HRML CSS SALIDFSD FSLF .My attempt at rebuilding Instagram, built with ReactJS, and hosted on firebase, this app allows you create an account, post your favourite photos and also comment!",
  stack = ["react","javascript","nodejs"],
}) {
  const [val, set] = useState();
  const [show, setShow] = useState(false);
  const matches = useMediaQuery('(max-width:500px)');


  const loadImg = () => {
    set(<img src={img} className="smooth"></img>);
    setShow(true);
  };
  const unLoadImg = () => {
    set();
    setShow(false);
  };
  
  let techStack = {
    "react": <DiReact style={{width:"50px", marginRight:"10px"}}/>,
    "html": <DiHtml5 style={{width:"50px", marginRight:"10px"}}/>,
    "bootstrap":<DiBootstrap style={{width:"50px", marginRight:"10px"}}/>,
    "nodejs":<DiNodejs style={{width:"50px", marginRight:"10px"}}/>,
    "sql":<DiMysql style={{width:"50px", marginRight:"10px"}}/>,
    "javascript":<DiJavascript1 style={{width:"50px", marginRight:"10px"}}/>,
    "python":<DiPython style={{width:"50px", marginRight:"10px"}}/>,
  };

  return (
    <ProjectItemStyles>
     
      <a
        href="#"
        className="menu_items"
        onMouseOver={loadImg}
        onMouseLeave={unLoadImg}
      >
        <div className="projectElement">
          <div className="adjust">
            <div className="test">
              {show ? <span className="number">{number + 1}. </span> : null}
              {title1}
            </div>
            <div className="test">{title2}</div>
            <div className="description">{desc} </div>
            <div>
              {stack.map((x)=>techStack[x])}
            </div>
          </div>
          

          
          <div className="forImg">{val}</div>
        </div>
        {matches && 
                <img src={img} className="smooth"></img>

          }
      </a>
    </ProjectItemStyles>
  );
}

