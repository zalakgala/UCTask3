import { Link } from "react-router-dom";
import "./Post.css";
import users from "../../Data/users.json";
import posts from "../../Data/post.json";
import { usericons, postimg, me } from "../../assets/images";

const Post1 = () => {
  return (
    <>
      <div className="content flex justify-center items-center">
        <div className="post flex flex-row">
          <div className="post1 flex flex-col">
            <button className="backbtn">
              <Link to="/home">X</Link>
            </button>
            <img src={postimg[posts[0].image]} className="imgpost1" />
          </div>

          <div className="postcontent">
            <div className="useracc flex flex-row">
              <img
                src={usericons[users[posts[0].user_id - 1].avatar]}
                className="useravatar"
              />
              <h3 className="username font-bold">
                {users[posts[0].user_id - 1].username}
              </h3>
              <span className="follow relative">Follow</span>
            </div>
            <div className="postcap flex flex-col">
              <div className="flex flex-row">
                <img
                  src={usericons[users[posts[0].user_id - 1].avatar]}
                  className="useravatarsmall"
                />
                <h3 className="username postusername font-bold relative">
                  {users[posts[0].user_id - 1].username}:
                </h3>
              </div>
              <p className="caption postcaption relative">{posts[0].caption}</p>
            </div>

            <div className="commentsection relative">
              {posts[0].comments.map((c, i) => (
                <div
                  key={i}
                  className="comments flex flex-row items-center"
                >
                  <img
                    src={usericons[users.find((u) => u.username === c.user)?.avatar]}
                    className="useravatarsmall relative"
                  />
                  <h3 className="usercomment relative font-bold">{c.user}:</h3>
                  <p className="postcomments relative">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="addcomment flex flex-row items-center">
              <input
                type="text"
                placeholder="Add Comment..."
                className="focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post1;
