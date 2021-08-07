import React from "react"
import Me from "../images/me.png"
import SectionTitle from "./SectionTitle"
import styled from "styled-components"
import { height } from "dom7";

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
const skills = ['JavaScript (ES6+)', 'React', 'Eleventy', 'Vue', 'Node.js', 'WordPress'];

const HomeAbout = () => {
    return(
        <>
        <SectionTitle heading="About_Me" subheading="hi !" ></SectionTitle>
        <div className="inner">
        <StyledAboutSection>
          <StyledText>
          <div>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot
              about HTML &amp; CSS!
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
              <a href="https://starry.com/">a start-up</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
            </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        {/* <img src={Me} className="HomeImg" style={{}}></img> */}
        
        </StyledAboutSection>
        </div>
        
  </>
    )
}
export default HomeAbout;