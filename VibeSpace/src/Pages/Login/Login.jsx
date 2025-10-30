import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./LoginTailwind.css";
import "./Login.css";
import VS from "../../assets/VibeSpace.png";
import Influencer from "../../assets/Influencer.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Invalid Email Format";

    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passRegex.test(password))
      newErrors.password =
        "Password must be atleast: 8+ characters, 1 uppercase, 1 number and 1 special character";

    setErrors(newErrors);
    if (newErrors.email) setEmail("");
    if (newErrors.password) setPassword("");

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/home");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="main-container flex justify-center items-center min-h-screen min-w-screen gap-36">
        <div className="logincard border-4 flex flex-row gap-20 p-8 items-center justify-center">
          <div className="images flex flex-col justify-center items-center">
            <img src={VS} className="w-72"></img>
            <img
              src={Influencer}
              className="h-80 rounded-3xl"
            ></img>
          </div>
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="form space-y-4 relative flex flex-col justify-center items-center p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-center">Login</h2>

              <div>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm w-xs">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type={showpassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                <div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showpassword)}
                    className="text-gray-500 relative left-68 bottom-8"
                  >
                    {showpassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 relative text-sm w-xs bottom-6">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="loginbutton bg-amber-400 relative px-4 py-2 rounded-lg text-xl justify-center items-center w-xs"
              >
                Login
              </button>
              <div className="relative text-sm top-4">
                Forgot Password?{" "}
                <a
                  href="https://media.tenor.com/6dY2C6K862IAAAAM/tom-and-jerry-laughing-at-you.gif"
                  className="underline bluelink"
                >
                  Click Here
                </a>
              </div>
            </form>
            <div className="signup form rounded-lg">Don't have an account? {" "} <Link to="/signup" className="underline bluelink">Sign Up</Link></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
