import React from "react"
import styled from "styled-components"
import Mee from "../images/mee.png";
import  useMediaQuery  from "@material-ui/core/useMediaQuery";

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
    const matches = useMediaQuery('(max-width:500px)');
    const equals = useMediaQuery('(min-width:700px)')
    return(
        <LeftSide>
                    {matches && 
        <img src={Mee} style={{width:"300px", height:"300px"}}></img>
        }
        <div className="container">
        <div className="leftSide">
        <h1>Hi I am <em>krishna chaitanya</em></h1>
        <div className="containerTex">
            <p>I am from chittagong, Bangladesh. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.
  
            I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.
  
             My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p>
        </div>
        <button class="custom-btn btn-9">Get CV</button>
        </div>
        {equals &&
        <img src={Mee} style={{width:"500px", height:"500px"}}></img>}
        </div>

        
        </LeftSide>
    )
}
export default AboutMe;