import React from "react";
import Me from "../../assets/Me.jpg";
import "./ProfilePage.css";
import users from "../../Data/users.json";
import posts from "../../Data/post.json";
import { usericons, postimg, me } from "../../assets/images";

const ProfilePage = () => {
  return (
    <>
      <div className="content">
        <div className="profile flex flex-row justify-center relative top-4 left-10 gap-20">
          <div>
            <img src={Me} className="userimg relative" />
          </div>
          <div className="flex flex-col relative">
            <div className="text-2xl">@{users[7].username}</div>
            <div className="flex flex-row gap-10">
              <div className="userinfo relative top-4">
                <span className="font-bold">7</span>
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
            <div className="name relative">{users[7].name}</div>
            <div className="bio relative">{users[7].bio}</div>
            <div className="flex justify-center">
              <button className="editbutton relative w-72 font-bold">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-2xl py-4 underline">Posts</div>
        <div className="postgrid">
          {users.map((user) => (
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
