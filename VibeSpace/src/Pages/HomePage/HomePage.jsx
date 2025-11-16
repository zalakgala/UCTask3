import { Link } from "react-router-dom";
import "./HomePage.css";
import users from "../../Data/users.json";
import posts from "../../Data/post.json";
import { usericons, postimg, me } from "../../assets/images";

const HomePage = () => {
  return (
    <>
      <div className="content flex flex-row">
        <div className="flex flex-col">
          <div className="stories flex flex-row">
            {users.slice(0, 6).map((user) => (
              <div key={user.id} className="flex flex-col items-center">
                <img src={usericons[user.avatar]} className="story" />
                {user.username}
              </div>
            ))}
          </div>
          {posts.map((post) => (
            <div key={post.id} className="posts flex flex-col">
            <div className="flex flex-row">
              <img
                src={usericons[users[post.user_id - 1].avatar]}
                className="useravatar"
              />
              <h3 className="username font-bold">
                {users[post.user_id - 1].username}
              </h3>
            </div>
            <div>
              <Link to={`/post${post.id}`}>
                <img src={postimg[post.image]} className="photo" />
              </Link>
            </div>
            <div className="flex flex-row">
              <button className="red">
                <svg xmlns="http://www.w3.org/2000/svg" className="heart">
                  <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="comment">
                  <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
                </svg>
              </button>
            </div>
            <div className="like relative bottom-6">
              <strong>{post.likes}</strong><br></br>{post.ccount}
            </div>
            <div className="caption relative bottom-6">
              <span className="font-bold">
                {users[post.user_id - 1].username}
              </span>{" "}
              {post.caption}
            </div>
            <div className="time relative bottom-6 text-sm text-gray-500">
              {post.time}
            </div>
          </div>
          ))}
        </div>
        <div className="profsection">
          <div className="flex flex-row items-center">
            <Link to="/profile"><img src={me} className="profphoto" /></Link>
            <div>
              <Link to="/profile"><h3 className="font-bold ">zalakgala06</h3></Link>
              <p className="text-sm text-gray-500">Zalak_Gala</p>
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
