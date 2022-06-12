import React from "react";
import styled from "styled-components";
import Arrow from "../images/arrow.svg";
import Backgroung from "../images/movie.png"
import Me from "../images/me.png"
import Sidebar from "./Sidebar"
import HomeAbout from "./HomeAbout";
import Button from "../components/Button"
const HeroStyles = styled.div`

  .hero {
    height: 80vh;
    // min-height: 500px;
    width: 100%;
    // text-align: center;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
      color:white;
    font-size: 10em;
    font-weight: bold;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 100%;
      color: white;
    }
  }
  .hero__heading em{
    color:#f65757;
  }
  .del{
    color:white;
    font-size: 4em;
    font-weight: bold;
    opacity:0.8;
  }
  .del em{
    color:#f65757;
  }
  .wrap-info {
    display: flex;
    justify-content: flex-right;
    align-items: center;
    margin-top:25px;
    float:right;
    margin-right:20px;
  }
  #text{
      margin-left:20px;
      color:white;
      font-size:15px;
      letter-spacing: 5px
  }

  .multi-button {
  display: flex;
  width: 80%;
  box-shadow: 0.125rem 4px 4px;
  margin-top:80px;
  margin-left:100px;
  margin-bottom:105px;
}

.multi-button button {
    flex-grow: 1;
    cursor: pointer;
    position: relative;
    padding: calc(1rem / 1.125) 1rem 1rem;
    border: 0.2rem solid white;
    color: white;
    background-color: black;
    font-size: 2rem;
    font-family: var(--font-family);
    text-transform: lowercase;
    text-shadow: rgb(0 0 0 / 10%) 2px 2px;
  transition: flex-grow 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.multi-button button + button {
  border-left: 0.125rem solid white;
  margin-left: calc(0.125rem * -1);
}

.multi-button button:hover,
.multi-button button:focus {
  flex-grow: 2;
  color: white;
  outline: none;
  text-shadow: none;
  background-color: #f65757;
}

.multi-button button:focus {
  outline: 0.125rem dashed black;
  outline-offset: calc(0.125rem * -3);
}

.multi-button:hover button:focus:not(:hover) {
  flex-grow: 1;
  color: var(white);
  background-color: blue;
  outline-color:  dodgerblue;
}

.multi-button button:active {
  transform: translateY(0.125rem);
}
#movie-bg {
    // position: fixed;
    pointer-events: none;
    animation: movie 1s steps(4) infinite;
    animation: movie 1s steps(4) infinite;
    background-image: url(../img/movie.png);
    height: 200%;
    left: -50%;
    top: -50%;
    // width: 200%;
    opacity: .7;
    z-index: 99
}
.some-text{
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Monument Extended', sans-serif;
                                                
    font-size: medium;
    font-weight:lighter;
    margin:20px;
}
.some-text p{
  opacity:0.7;
}
.gist{
  color:grey;
  font-size:small;
  width:40%;
  margin-left:70px;
  margin-right:30px;
  margin-top:30px;
  opacity:0.9;
  font-size:10px;
}
.vone{
  display:flex;
  justify-content:to-left;
  align-items:center;
  
}
@media only screen and (max-width:500px)
{
  .container{
    font-size:5px;

  }
  .del{
    font-size:20px;
  }
  .hero__heading {
    color:white;
  font-size: 10em;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  span {
    display: flex;
    width: 100%;
  }
  .hero__name {
    font-size: 100%;
    color: white;
  }
}

.vone{
  display:flex;
  flex-direction: column-reverse;
  justify-content:center;
  align-items:center;
  
}
#text{
  font-size:10px;
}
.gist{
 display:none;

}
.wrap-info {
  display: flex;
  justify-content: flex-right;
  align-items: center;
}
.wrap-info #text{
  font-size:15px;
  font-weight:lighter;
}
.multi-button {
  display: flex;
  width: 80%;
  box-shadow: 0.125rem 4px 4px;
  margin-top:0px;
  margin-left:35px;
  margin-bottom:105px;

}
.multi-button a{
  font-size: 15px;
}


`;

const Name = () => {
  // let check = { color: "red", size:lg };
  return (
    <HeroStyles>
        
      <div className="hero">
        
        <div className="container">
          <h1 className="hero__heading">
            <span>
              Hello<em>.</em>
            </span>
            <span>I am Krishna</span>
          </h1>
          <h1 className="del">I <em>build</em> things for the <em>web.</em></h1>
        </div>
        <div className="vone">
        <div className="gist">
            <p>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.</p>
          </div>
        <div className="wrap-info">
        <img src={Arrow} style={{ width: "55px", height: "55px" }}></img>
        <h2 id="text">
          <span>Web developer</span>
          <br />
          <span>UI/UX</span>
          <br />
          <span>Noob</span>
        </h2>
      </div>
      </div>
      </div>
      
      <div class="multi-button">
        <button><a href="https://drive.google.com/file/d/1GcA9ENgv5-udzTcBgBkw2HbZ3EGA50Ri/view?usp=sharing" target="_blank">View Resume</a></button>
        <button><Button btnText="see my works" btnLink="/projects" /></button>
      </div>
    <HomeAbout/>
      
      <Sidebar/>
    </HeroStyles>
  );
};
export default Name;
