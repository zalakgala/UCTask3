import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer flex flex-col">
        <ul className="flex flex-row justify-center text-sm gap-10 text-gray-500 pt-4">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Blogs</li>
          <li className="hover:underline">Help</li>
          <li className="hover:underline">Privacy</li>
          <li className="hover:underline">Terms & Conditions</li>
          {/* <li className="hover:underline">Locations</li> */}
          <li className="hover:underline">Contact</li>
        </ul>
        <div className="flex justify-center text-sm text-gray-500 pt-4">
          &copy; 2025 VibeSpace from Meta
        </div>
      </div>
    </>
  );
};

export default Footer;
