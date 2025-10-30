import { Link } from "react-router-dom";
import "./LandupTailwind.css";
import "./Landup.css";
import Landing from "../../assets/Landing.png";
import VS from "../../assets/VibeSpace.png";

const Landup = () => {
  return (
    <>
      <div className="landupmain-container flex items-center justify-center min-h-screen min-w-screen gap-28">
        <img src={Landing} className="landing relative"></img>
        <div className="card border-4 relative flex flex-col justify-center items-center px-6">
          <img src={VS} className="vs_img relative p-6"></img>
          <div className="tagline relative">Where moods find their people.</div>
          <div className="flex flex-row gap-10">
            <Link to="/login" className="button relative text-2xl font-bold">
              Login
            </Link>
            <Link to="/signup" className="button relative text-2xl font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landup;
