import React from "react"
import SectionTitle from "../components/SectionTitle"
import styled from "styled-components"
import ProjectInfo from "../data/ProjectsData"
import ProjectItem from "../components/ProjectItem"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
const ProjectsStyles = styled.div
`
.projects__allItems{
    left: 0;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 2s;
}
padding:10rem 0;
color:white;
`
const Projects = () => {
    return(
        <>
        <ProjectsStyles>
        <div className="container">
            <SectionTitle heading="Projects" subheading="work work work work"/>
        </div>
        <div className="projects__allItems">
            {ProjectInfo.map((item,index)=>(
                <ProjectItem title1={item.title1} title2={item.title2} number={index} desc={item.desc} stack={item.stack}/>
            ))}
        </div>
        <Sidebar/>
        </ProjectsStyles>
        <Footer/>
</>
    )
}
export default Projects; 