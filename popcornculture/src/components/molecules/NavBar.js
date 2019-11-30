import React from "react";
import TextLink from "../atoms/TextLink";
import Button from "../atoms/Button";
import Menu from "../molecules/Menu";
import Icon from "../atoms/Icon";
import { Link } from 'react-router-dom';
import "./NavBar.css"
const NavBar = ({ onTextLinkClick, onIconClick, ...props }) => {
  return (
    <div className = "NavBar">
      <div className = "NavLogo">
        <img className = "Logo" src="" alt="" />
        <TextLink linkType="Popcornculture" onButtonClick={onTextLinkClick}>
          PopcornCulture
        </TextLink>
      </div>
      
      <Menu onIconClick={onIconClick} />
      <Button>Log in</Button>

      <div className="NavMenu">
        <div className="dropdown">
          <Icon className="dropbtn" onButtonClick={onTextLinkClick} />
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Watchlist</a>
            <a href="#">Logout</a>
          </div>
        </div> 
        <Link to="/Login">Log in</Link>
      </div>


    </div>
  );
};

export default NavBar;
