import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import "./HomePage.css";
import posts from "../../Data/post.json";
import { usericons, postimg } from "../../assets/images";

const HomePage = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [me, setMe] = useState(null);
  const [users, setUsers] = useState([]);

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

        const usersWithAvatars = data.users.map((user, idx) => {
          const avatarFilename = `user${idx + 1}.png`;
          return {
            ...user,
            avatar: avatarFilename,
          };
        });
        setUsers(usersWithAvatars);

        const loggedUser = usersWithAvatars.find(
          (user) => user.email === email
        );
        setMe(loggedUser);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }
    getUsers();
  }, []);

  const toggleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  if (!me || users.length === 0) {
    return null;
  }

  const otherUsers = users.filter((u) => u._id !== me._id);

  return (
    <>
      <div className="content flex flex-row">
        <div className="flex flex-col">
          <div className="stories flex flex-row">
            {users
              .filter((user) => user._id !== me._id)
              .slice(0, 6)
              .map((user) => (
                <div key={user._id} className="flex flex-col items-center">
                  <img src={usericons[user.avatar]} className="story" />
                  {user.name}
                </div>
              ))}
          </div>

          {posts.map((post, idx) => {
            const postUser = otherUsers[idx];

            return (
              <div key={post.id} className="posts flex flex-col">
                <div className="flex flex-row">
                  <img
                    src={usericons[postUser.avatar]}
                    className="useravatar"
                  />
                  <h3 className="username font-bold">{postUser.name}</h3>
                </div>
                <div>
                  <Link to={`/post${post.id}`}>
                    <img src={postimg[post.image]} className="photo" />
                  </Link>
                </div>
                <div className="flex flex-row">
                  <button
                    className="heartbtn"
                    onClick={() => toggleLike(post.id)}
                  >
                    {likedPosts[post.id] ? (
                      <AiFillHeart className="hearticon text-red-500" />
                    ) : (
                      <AiOutlineHeart className="hearticon" />
                    )}
                  </button>
                  <button className="commentbtn">
                    <FaRegComment className="commenticon" />
                  </button>
                </div>
                <div className="like relative">
                  <strong>{post.likes}</strong>
                  <br></br>
                  {post.ccount}
                </div>
                <div className="caption relative bottom-6">
                  <span className="font-bold">{postUser.name}</span>{" "}
                  {post.caption}
                </div>
                <div className="time relative bottom-6 text-sm text-gray-500">
                  {post.time}
                </div>
              </div>
            );
          })}
        </div>
        <div className="profsection relative">
          <div className="flex flex-row items-center">
            <Link to="/profile">
              <img src={usericons[me.avatar]} className="profphoto" />
            </Link>
            <div>
              <Link to="/profile">
                <h3 className="font-bold">{me.name}</h3>
              </Link>
            </div>
            <div className="viewprof">
              <Link to="/profile">View Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
