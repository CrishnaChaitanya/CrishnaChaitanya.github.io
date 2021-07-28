import React from "react"
import SectionTitle from "../components/SectionTitle"
import styled from "styled-components"
import ProjectInfo from "../data/ProjectsData"
import ProjectItem from "../components/ProjectItem"
const ProjectsStyles = styled.div
`
padding:10rem 0;
color:white;
`
const Projects = () => {
    return(
        <ProjectsStyles>
        <div className="container">
            <SectionTitle heading="Projects" subheading="work work work work"/>
        </div>
        <div className="projects__allItems">
            {ProjectInfo.map((item)=>(
                <ProjectItem/>
            ))}
        </div>
        </ProjectsStyles>

    )
}
export default Projects; 