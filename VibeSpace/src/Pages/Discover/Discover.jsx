import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Discover.css";
import { usericons } from "../../assets/images";

const Discover = () => {
  const [users, setUsers] = useState([]);
  const [me, setMe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");

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

        const loggedUser = data.users.find((user) => user.email === email);

        setMe(loggedUser);

        const usersWithAvatars = data.users.map((user, idx) => {
          const avatarFilename = `user${idx + 1}.png`;
          return {
            ...user,
            avatar: avatarFilename,
          };
        });

        setUsers(usersWithAvatars);

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
        <h3 className="text-2xl py-4 text-center underline font-bold">
          Suggested for you
        </h3>
        <div className="suggested items-center">
          {users
            .filter((user) => user._id !== me._id)
            .map((user) => (
              <div
                key={user._id}
                className="usercard flex flex-col items-center"
              >
                <img src={usericons[user.avatar]} className="story" />
                <div>
                  {" "}
                  <strong>Name:</strong> {user.name}
                </div>
                <div>
                  <strong>Bio:</strong> {user.bio}
                </div>
                <button className="followbutton mt-4">Follow</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
