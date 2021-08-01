import React from "react";
import styled from "styled-components"

const XX = styled.div
`
color:"white";
font-weight:"lighter";
`
const TimeItem = ({
    title= "Project Name",
    period = "-",
    percentage = "-" }) => {
  return (
    <XX>
      
          <div>
            <h1>{title}</h1>
            <h2>{period}</h2>
            <h2>{percentage}</h2>
          </div>
    
      
    </XX>
  )}

export default TimeItem;

