import React from "react"
import Me from "../images/me.png"
import SectionTitle from "./SectionTitle"
import styled from "styled-components"


const StyledAboutSection = styled.section`
font-size:small;
  // max-width: 1000px;
  color:white;
  display:flex;
  margin:5%;
  .HomeImg{
    position: relative;
    max-width: 300px;
    width:350;
    height:350;
  }
  a{
    color:#f65757
  }
  @media only screen and (max-width:500px)
{
  .HomeImg{
    display:none;
  }
}
`;
const StyledText = styled.div`
opacity:0.8;

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #f65757;
        font-size: xx-large;
        line-height: 12px;
      }
    }
  }
`;
const skills = ['JavaScript (ES6+)', 'React', 'Java', 'DSA', 'Node.js'];

const HomeAbout = () => {
    return(
        <>
        <SectionTitle heading="About_Me" subheading="{this.me}" ></SectionTitle>
        <div className="inner">
        <StyledAboutSection>
          <StyledText>
          <div data-aos="fade-right">
            <p>
            I'm a third year Computer Science Engineering Student, at GITAM, Vizag. WEB DEVELOPMENT It's fantastic. I enjoy the rush. I enjoy seeing my ideas come to life. Now, I always aim to improve on my prior project, which has piqued my interest in web building.
            </p>

            {/* <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="#">an advertising agency</a>,{' '}
              <a href="#">a start-up</a>,{' '}
              <a href="#">a huge corporation</a>, and{' '}
              <a href="#">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="#">Upstatement</a> for a variety of
              clients.
            </p> */}

            <p>Here are a few technologies I've been working with recently:</p>
            </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        
        <img src={Me}  className="HomeImg"></img>
        
        </StyledAboutSection>
        </div>
        
  </>
    )
}
export default HomeAbout;