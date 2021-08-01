import React from "react"
import styled from "styled-components"
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimeItem from "../components/TimeItem";


const Linetime = styled.div
`
color:white;
.del{
margin:20px;
font-family:'Monument Extended';
opacity:0.9;
font-weight:"bolder";
letter-spacing:1px;

}



`

const TimelineDisplay = () => {
    const period = ["2019 - Present","", "2017 - 2019","", "2009-present",""];
const percentage = [" CGPA: 9.0","", "Precentage: 81%","", "😉",""];
// const activities = ["Achieved 3rd place, at the “World Space Week” organized by Indian Space Research Organization (OCT-2017).","","98% marks secured for ABRSM graded music exam.","","Joint Secretary at ACM (Association for Computing Machinery) student chapter, GITAM UNIVERSITY.",""]
const colors = ["primary","secondary"]
const edu = [
    "B. Tech. Computer Science Engineering, GITAM, Vizag",
    "Achieved 3rd place, at the “World Space Week” organized by Indian Space Research Organization (OCT-2017).",
    "12th Grade [CBSE], Kendriya Vidyalaya, Vizag",
    "98% marks secured for ABRSM graded music exam.",
    "Google",
    "Joint Secretary at ACM (Association for Computing Machinery) student chapter, GITAM UNIVERSITY."
  ];
  
    return(
          <Linetime>
             
    <div className="del">
       
    <Timeline align="alternate" style={{color:"white", fontFamily:'Monument Extended'}}>
    {edu.map((item,index) => (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={colors[index%2]}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimeItem title={item} period={period[index]} percentage={percentage[index]}/>
        </TimelineContent>
      </TimelineItem>
    )) }
    </Timeline>
    </div>
    </Linetime> 
    )
}
export default TimelineDisplay;