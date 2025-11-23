import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import VS from "../assets/VibeSpace.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-col items-center justify-center gap-10 h-fit">
        <Link to="/home">
          <img src={VS} className="vs_logo w-3xs" />
        </Link>
        <ul className="navbarul flex flex-col font-medium">
          <Link to="/home">
            <li className="flex flex-row nav">Home</li>
          </Link>
          <li className="flex flex-row nav">Search</li>
          <Link to="/discover">
            <li className="flex flex-row nav">Discover</li>
          </Link>
          <li className="flex flex-row nav">Reels</li>
          <li className="flex flex-row nav">Messages</li>
          <li className="flex flex-row nav"> Notifications</li>
          <li className="flex flex-row nav">Create</li>
          <Link to="/profile">
            <li className="flex flex-row nav"> Profile</li>
          </Link>
          <li className="flex flex-row nav">More</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
