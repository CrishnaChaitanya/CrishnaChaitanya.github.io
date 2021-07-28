import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../images/me.png';

const ProjectItemStyles = styled.div`
.test{
    font-size:xxx-large;
    font-weight:bolder;
    -webkit-text-fill-color : transparent;
    -webkit-text-stroke-width:1px;
}
.adjust{
    margin:40px;

}
.test:hover{
    
    cursor:pointer;
}
.slash{
    display:flex;
    justify-content:row;
    align-items:center;
}
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
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title1 = 'Project Name',
  title2 = "Project Name Cont..",
  title3 = "Kadali",
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
        <div className="adjust">
    <div className="test">{title1}</div>
    <div className="test">{title2}</div>
    <div className="slash">
        
    <div className="test">{title3}</div>
    <div>/</div>
    <div>{desc}</div>
    </div> 

    </div>   
    </ProjectItemStyles>
  );
}