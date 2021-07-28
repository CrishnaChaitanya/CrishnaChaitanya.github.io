import React from "react";
import styled from "styled-components";
import Arrow from "../images/arrow.svg";
import Backgroung from "../images/movie.png"
import Me from "../images/me.png"
import Sidebar from "./Sidebar"
const HeroStyles = styled.div`
  .hero {
    height: 75vh;
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
      font-family: "Montserrat SemiBold";
      font-size: 100%;
      color: white;
    }
  }
  .wrap-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:25px;
    margin-left:230px;
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
  margin-top:110px;
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
  background-color: #4d90fe;
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

`;

const Name = () => {
  return (
    <HeroStyles>
        
      <div className="hero">
        
        <div className="container">
          <h1 className="hero__heading">
            <span>
              Hello<em>.</em>
            </span>{" "}
            <span>I am Krishna</span>
          </h1>
        </div>
        <div className="wrap-info">
        <img src={Arrow} style={{ width: "53px", height: "53px" }}></img>
        <h2 id="text">
          <span>Web developer</span>
          <br />
          <span>UI/UX</span>
          <br />
          <span>Noob</span>
        </h2>
      </div>
      </div>
      
      <div class="multi-button">
        <button>Download CV</button>
        <button>Contact</button>
      </div>

      <div className="some-text">
          <p>I fell in love with programming and have at least learnt something, I think.. 🤷‍♂️

I am fluent in classics like C, C++, Javascript and Python.

My field of Interest's are building new  Web Technologies and Products, I'm into Deep Learning and Natural Launguage Processing as well

Whenever possible, I also learn to develop using Modern Javascript Frameworks  like Node.js and React.js</p>
          <img src={Me}></img>
      </div>
      
      <Sidebar/>
    </HeroStyles>
  );
};
export default Name;
