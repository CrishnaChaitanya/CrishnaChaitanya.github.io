import React from "react";
import Me from "../images/demo1.jpg";
import styled from "styled-components"
import bg from "../images/movie.png"


const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background:transparent;
    padding: 1rem;
    border:1px solid white;
    color:white;
  }
  .projectItem__title {
    font-size: 2.2rem;
    
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'Montserrat';
    margin-top: 1rem;
  }
  .custom-btn {
    width: 130px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #fff;
    color:white;
    font-family: 'Monument Extended';
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }
  .btn-9 {
    z-index: 2;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  .btn-9:after {
    position: absolute;
    content: " ";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
  .btn-9:hover {
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
      inset -4px -4px 6px 0 rgba(255,255,255,.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
      color:black;
      border:1px solid white;
  }
  .btn-9:hover:after {
    -webkit-transform: scale(2) rotate(180deg);
    transform: scale(2) rotate(180deg);
    background: #fff;
   
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
      inset -4px -4px 6px 0 rgba(255,255,255,.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  }
  

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function HomeProjectItem({
  img = Me,
  title1 = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  github = "https://www.github.com/CrishnaChaitanya",
  site = "https://www.github.com/CrishnaChaitanya",
}) {
  return (
    <ProjectItemStyles>

    <div className="projectItem__img" data-aos="flip-right">
      {console.log(title1)}
      <img src={img}></img>
      </div>
      <div>
        <div className="projectItem__info">
          <h3 className="projectItem__title">{title1}</h3>

          <p className="projectItem__desc">{desc}</p>
        </div>
        <a href={github} target="_blank" >
        <button class="custom-btn btn-9">GitHub</button>
        </a>
        <a href={site} target="_blank" >
        <button class="custom-btn btn-9">↗ View</button>
        </a>
      </div>
      </ProjectItemStyles>
  );
}
