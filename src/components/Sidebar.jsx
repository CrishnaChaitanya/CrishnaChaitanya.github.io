import React from "react"
import styled from "styled-components"

const SidebarStyle = styled.div
`
.fl-fl {
  background: #000000;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 4px;
  width: 190px;
  position: fixed;
  right: -145px;
  z-index: 1000;
  font: normal normal 10px Arial;
  transition: all .25s ease;
}

.fa {
  font-size: 30px;
  color: #fff;
  padding: 10px 0;
  width: 40px;
  margin-left: 8px;
}

.fl-fl:hover {
  right: 0;
}

.fl-fl a {
  color: #fff !important;
  text-decoration: none;
  text-align: center;
  line-height: 43px!important;
  vertical-align: top!important;
}

.float-fb {
  top: 160px;
}

.float-tw {
  top: 215px;
}

.float-gp {
  top: 270px;
}

.float-rs {
  top: 325px;
}

.float-ig {
  top: 380px;
}

.float-pn {
  top: 435px;
}
`
const Sidebar = () => {
    return(
<SidebarStyle>
{/* <div className="float-sm"> */}
  <div className="fl-fl float-fb">
  <i class="fa fa-github"></i>
    <a href="https://github.com/CrishnaChaitanya" target="_blank"> GitHub</a>
  </div>
  <div className="fl-fl float-tw">
  <i class="fa fa-linkedin" aria-hidden="true"></i>

    <a href="https://www.linkedin.com/in/krishna-chaitanya-78b154199/" target="_blank">linkedin</a>
  </div>
  <div className="fl-fl float-gp">
  <i class="fa fa-envelope-o" aria-hidden="true"></i>

    <a href="/Contact" target="_blank">Mail</a>
  </div>
  <div className="fl-fl float-ig">
    <i className="fa fa-instagram"></i>
    <a href="https://www.instagram.com/xrishnachaitanya/" target="_blank">Follow us!</a>
  </div>
  
  <div className="fl-fl float-rs">
    <i className="fa fa-instagram"></i>
    <a href="https://www.instagram.com/xrishnachaitanya/" target="_blank">Follow via RSS</a>
  </div>
  
  

</SidebarStyle>

    )
}

export default Sidebar;