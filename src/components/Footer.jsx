import React from "react";
import styled from "styled-components";
const Footstyle = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: antiquewhite;

  .container {
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    // height: 100vh;
    // width: 100%;
    // background-color: #002a38;
    line-height: 1.3;
    font-size: large;
    // font-family: Menlo, monospace;
  }

  ul {
    display: inline-grid;
    grid-auto-flow: row;
    grid-gap: 24px;
    justify-items: center;
    margin: auto;
  }

  @media (min-width: 500px) {
    ul {
      grid-auto-flow: column;
    }
  }

  a {
    color: black;

    text-decoration: none;
    box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
  }

  a:hover {
    box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
  }

  li:last-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  li:hover ~ li p {
    animation: wave-animation 0.3s infinite;
  }

  /* below is just for demo styling */

  @keyframes wave-animation {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-15deg);
    }
  }
  .contact{
    margin-bottom:20px;
    display: inline-block;
  position: relative;
  color: #0087ca;
  }
  .contact:after{
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  }
  .contact:hover:after{
    transform: scaleX(1);
  transform-origin: bottom left;
  }
`;
function copyToClipboard(text) {
  var inputc = document.body.appendChild(document.createElement("input"));
  inputc.value = document.querySelector(".copy").text;
  console.log(inputc.value )
  inputc.focus();
  inputc.select();
  document.execCommand('copy');
  inputc.parentNode.removeChild(inputc);
  alert("Email Copied to Clipboard");
  }
const Footer = () => {
  return (
    <Footstyle>
      <div className="container">
        <div className="contact">
        <textare>
          <a
            href="mailto:krishna.chaitanya.kanna9@gmail.com"
            title="Email me"
            rel="me"
            className="copy"
            // target="_blank"
            onClick={copyToClipboard}
          >
            krishna.chaitanya.kanna9@gmail.com
          </a>
          </textare>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://twitter.com/julesforrest">Twitter</a>
            </li>
            <li>
              <a href="https://codepen.io/julesforrest">Codepen</a>
            </li>
            <li>
              <a href="mailto:julesforrest@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://dribbble.com/julesforrest">Dribbble</a>
            </li>
            <li>
              <a href="https://github.com/julesforrest">Github</a>
            </li>
            <li>
              <p>👋</p>
            </li>
          </ul>
        </div>
      </div>
    </Footstyle>
  );
};
export default Footer;
