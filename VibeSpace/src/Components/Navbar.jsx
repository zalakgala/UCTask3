import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineComment,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FiVideo, FiUser, FiBell } from "react-icons/fi";
import Cookies from "js-cookie";
import { BsThreeDots } from "react-icons/bs";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import VS from "../assets/VibeSpace.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    Cookies.remove("token");
    Cookies.remove("email");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="navbar flex flex-col items-center justify-center gap-10 h-fit">
        <Link to="/home">
          <img src={VS} className="vs_logo w-3xs" />
        </Link>
        <ul className="navbarul flex flex-col font-medium">
          <Link to="/home">
            <li className="flex flex-row nav">
              <AiOutlineHome className="icon" /> Home
            </li>
          </Link>
          <li className="flex flex-row nav">
            {" "}
            <AiOutlineSearch className="icon" /> Search
          </li>
          <Link to="/discover">
            <li className="flex flex-row nav">
              {" "}
              <AiOutlineCompass className="icon" />
              Discover
            </li>
          </Link>
          <li className="flex flex-row nav">
            <FiVideo className="icon" />
            Reels
          </li>
          <li className="flex flex-row nav">
            <AiOutlineComment className="icon" />
            Messages
          </li>
          <li className="flex flex-row nav">
            {" "}
            <FiBell className="icon" /> Notifications
          </li>
          <Link to="/create">
            <li className="flex flex-row nav">
              {" "}
              <AiOutlinePlusCircle className="icon" />
              Create
            </li>
          </Link>
          <Link to="/profile">
            <li className="flex flex-row nav">
              <FiUser className="icon" /> Profile
            </li>
          </Link>
          <li
            className="flex flex-row nav"
            onClick={() => setShowMenu(!showMenu)}
          >
            <BsThreeDots className="icon" />
            More
          </li>
        </ul>
      </div>

      {showMenu && (
        <div ref={menuRef} className="menu flex flex-col">
          <ul className="flex flex-col">
            <li className="nav" onClick={handleLogout}>
              Logout
            </li>
            <li className="nav">Settings</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
