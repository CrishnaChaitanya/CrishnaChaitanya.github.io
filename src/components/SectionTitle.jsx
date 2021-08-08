import React from 'react';
import styled from 'styled-components';
import Aos from "aos"
import "aos/dist/aos.css"

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: font-family: 'Monument Extended';
    font-size: 2rem;
    color:white;
  }
  h2 {
    font-family:font-family: 'Monument Extended';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color:white;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title"  data-aos="fade-up">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}