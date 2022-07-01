import React from "react"
import styled from "styled-components"
import Mee from "../images/mee.png";
import  useMediaQuery  from "@material-ui/core/useMediaQuery";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const LeftSide = styled.div
`
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    margin:5%;
    backgroundColor:"#F56565";
}
h1{
    font-size:xx-large;
    margin-bottom:40px;
}
em{
    color:indianred;
}
.containerTex{
    font-size:large;
    opacity:0.8;
}

    .custom-btn {
        width: 130px;
        height: 40px;
        padding: 10px 25px;
        border: 2px solid #fff;
        color:white;
        font-family: 'Monument Extended';
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        margin-top:50px;
      }
      .btn-9 {
        z-index: 2;
        transition: all 0.3s ease;
        overflow: hidden;
      }
      .btn-9:after {
        position: absolute;
        content: " ";
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
      }
      .btn-9:hover {
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                    -4px -4px 6px 0 rgba(116, 125, 136, .2), 
          inset -4px -4px 6px 0 rgba(255,255,255,.5),
          inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
          color:black;
          border:1px solid white;
      }
      .btn-9:hover:after {
        -webkit-transform: scale(2) rotate(180deg);
        transform: scale(2) rotate(180deg);
        background: #fff;
       
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                    -4px -4px 6px 0 rgba(116, 125, 136, .2), 
          inset -4px -4px 6px 0 rgba(255,255,255,.5),
          inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
      }

`
const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration:1000})
      },[]);
    const matches = useMediaQuery('(max-width:500px)');
    const equals = useMediaQuery('(min-width:700px)')
    return(
        <LeftSide>
                    {matches && 
        <img src={Mee} style={{width:"300px", height:"300px"}}></img>
        }
        <div className="container">
        <div className="leftSide" data-aos="fade-down">
        <h1 >Hi I am <em>krishna chaitanya</em></h1>
        <div className="containerTex" >
            <p>I am a computer-science student who has a passion for building web apps.</p>
        </div>
        <button class="custom-btn btn-9"><a href="https://drive.google.com/file/d/1GcA9ENgv5-udzTcBgBkw2HbZ3EGA50Ri/view" target="_blank" >Get CV</a></button>
        </div>
        {equals &&
        <img src={Mee} data-aos="fade-left" style={{width:"500px", height:"500px"}}></img>}
        </div>

        
        </LeftSide>
    )
}
export default AboutMe;