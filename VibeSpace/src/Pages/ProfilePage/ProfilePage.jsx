import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import Cookies from "js-cookie";
import userimg from "../../Data/users.json";
import { usericons, me as meImg } from "../../assets/images";

const ProfilePage = () => {
  const [me, setMe] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");

    if (!token || !email) {
      navigate("/login");
      return;
    }
    async function getUsers() {
      if (!email) {
        console.log("No email found, redirect to login");
        return;
      }

      try {
        const res = await fetch("https://task4-authdb.onrender.com/auth/all");

        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.users) {
          throw new Error("Users array not found in response");
        }

        setUsers(data.users);

        const loggedUser = data.users.find((user) => user.email === email);

        if (!loggedUser) {
          console.log("User not found, redirect to login if needed");
          return;
        }

        setMe(loggedUser);

        console.log("Logged-in user data:", loggedUser);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }
    getUsers();
  }, [navigate]);

  if (!me || users.length === 0) {
    return null;
  }

  return (
    <>
      <div className="content">
        <div className="profile flex flex-row justify-center relative top-4 left-10 gap-20">
          <div>
            <img src={meImg} className="userimg relative" />
          </div>
          <div className="flex flex-col relative">
            <div className="text-2xl font-bold">{me.name}</div>
            <div className="flex flex-row gap-10">
              <div className="userinfo relative top-4">
                <span className="font-bold">8</span>
                <span className="text-gray-500"> Posts</span>
              </div>
              <div className="userinfo relative top-4">
                <span className="font-bold">186</span>
                <span className="text-gray-500"> Followers</span>
              </div>
              <div className="userinfo relative top-4">
                <span className="font-bold">192</span>
                <span className="text-gray-500"> Following</span>
              </div>
            </div>
            <div className="name relative">
              <strong>Name: </strong>
              {me.name}
            </div>
            <div className="bio relative">
              <strong>City: </strong>
              {me.city}
            </div>
            <div className="bio relative">
              <strong>Gender: </strong>
              {me.gender}
            </div>
            <div className="bio relative">
              <strong>DOB: </strong>
              {new Date(me.dob).toLocaleDateString("en-GB")}
            </div>
            <div className="bio relative">{me.bio}</div>
            <div className="flex justify-center">
              <button className="editbutton relative w-72 font-bold">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-2xl py-4 underline">Posts</div>
        <div className="postgrid">
          {userimg.map((user) => (
            <img
              key={user.id}
              src={usericons[user.avatar]}
              className="gridposts"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
