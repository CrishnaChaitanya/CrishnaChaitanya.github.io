import React from "react";

import styled from "styled-components";
import Me from "../images/me.png";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AboutMe from "../components/AboutMe"
import SectionTitle from "../components/SectionTitle"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import TimelineDisplay from "../components/TimelineDisplay"
import {  DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,DiJava,DiBootstrap,DiDatabase } from "react-icons/di";

const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    //   color: theme.palette.text.secondary,
    color:"white",
      backgroundColor:"transparent",
    },
  }));
  const Krishna = styled.div
  `
  margin-top:60px;
  `





export default function About() {
  const classes = useStyles();

  return (
      <Krishna>
        <AboutMe/>
    <SectionTitle heading="MY SKILLS" subheading="</>"/>
    
    <div className={classes.root} style={{margin:"30px 100px 30px"}}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:"#61DBFB", width:"150px"}}><DiReact/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{color:" #5382a1", width:"150px"}}><DiJava/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:"#563d7c", width:"150px"}}><DiBootstrap/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:" #3c873a", width:"150px"}}><DiNodejs/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:" #f0db4f", width:"150px"}}><DiJavascript1/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:"#4DB33D", width:"150px"}}><DiMongodb/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:"#61DBFB", width:"150px"}}><DiPython/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:"orange", width:"150px"}}><DiDatabase/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}  style={{color:"red", width:"150px"}}><DiGit/></Paper>
        </Grid>
      </Grid>
    </div>
    <SectionTitle heading="🔵Education" subheading="🔴Achivements &"/>
  
 
    <TimelineDisplay/>
     
    <Sidebar/>
    <Footer/>

    </Krishna>
  );
}
