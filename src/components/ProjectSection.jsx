import React from "react"
import SectionTitle from "./SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Projets from "../data/ProjectsData"
import HomeProjectItem from "../components/HomeProjectItem"
import projects from "../data/ProjectsData"
import 'swiper/swiper-bundle.min.css';
import styled from "styled-components"
import mentorr from "../images/mentorr.png";
import fso from "../images/FSO.png";
import recipe from "../images/Recipe.png";
import todo from "../images/Todo.png";
import weather from "../images/Weather.png";
import sic from "../images/SIC.PNG"
import dashboard from "../images/homeDashboard.PNG"
// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
    color:white;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: #F65757;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color:black;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

let ss = {
  "fso": fso,
  "mentorr":mentorr,
  "todo":todo,
  "weather":weather,
  "recipe":recipe,
  "dashboard":dashboard,
    "sic":sic,
}
export default function ProjectSection() {
    return(
        <ProjectSectionStyle>
        
        <div className="container">
            <SectionTitle heading="Projects" subheading="a quick look"/>
            <div className="projects__allitems">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
                    
                    {Projets.map((item, index) => {
                      {console.log("asda"+item.title1)}
                        return ((item.category == "top") ? 
                        <SwiperSlide >
                     <HomeProjectItem 
                     title1={item.title1}
                    img={ss[item.img]}
                    desc={item.desc}
                    github={item.github}
                    site={item.site}
                     /></SwiperSlide>

                         : null)
                    })}
                    
                        
                    
                
                    </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}

