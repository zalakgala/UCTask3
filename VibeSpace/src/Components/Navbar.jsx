import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import VS from "../assets/VibeSpace.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-col items-center justify-center gap-10 h-fit">
        <img src={VS} className="vs_logo w-3xs" />
        <ul className="navbarul flex flex-col font-medium">
          <Link to="/home">
            <li className="flex flex-row">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon">
                <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
              </svg> */}
              Home
            </li>
          </Link>
          <li className="flex flex-row">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon">
              <path d="M22 20L20 22 14 16 14 14 16 14z"></path>
              <path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"></path>
              <path
                d="M13.7 12.5H14.7V16H13.7z"
                transform="rotate(-44.992 14.25 14.25)"
              ></path>
            </svg> */}
            Search
          </li>
          <Link to="/discover">
            <li className="flex flex-row">Discover</li>
          </Link>
          <li className="flex flex-row">Reels</li>
          <li className="flex flex-row">Messages</li>
          <li className="flex flex-row"> Notifications</li>
          <li className="flex flex-row">Create</li>
          <Link to="/profile">
            <li className="flex flex-row"> Profile</li>
          </Link>
          <li className="flex flex-row">More</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
