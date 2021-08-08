import React from "react";
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const XX = styled.div
`
color:"white";
font-weight:"lighter";
`
const TimeItem = ({
    title= "Project Name",
    period = "-",
    percentage = "-" }) => {
      useEffect(() => {
        Aos.init({duration:1000})
      },[]);
   
  return (
    <XX>
      
          <div data-aos="fade-left">
            <h1>{title}</h1>
            <h2>{period}</h2>
            <h2>{percentage}</h2>
          </div>
    
      
    </XX>
  )}

export default TimeItem;

