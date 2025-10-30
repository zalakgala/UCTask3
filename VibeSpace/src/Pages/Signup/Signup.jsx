import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SignupTailwind.css";
import "./Signup.css";
import VS from "../../assets/VibeSpace.png";
import Influencer from "../../assets/Influencer.png";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [showconfirmpassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    const userRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!userRegex.test(username))
      newErrors.username =
        "Username must be 3-15 chars (letters, numbers, underscore only)";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Invalid Email Format";

    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passRegex.test(password))
      newErrors.password =
        "Password must be atleast: 8+ characters, 1 uppercase, 1 number and 1 special character";

    if (password !== confirmpassword)
      newErrors.confirmpassword = "Passwords do not match";

    setErrors(newErrors);
    if (newErrors.email) setEmail("");
    if (newErrors.password) setPassword("");
    if (newErrors.confirmpassword) setConfirmPassword("");

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Sign Up Successful!!");
      navigate("/login");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <div className="main-container flex justify-center items-center min-h-screen gap-36">
        <div className="signupcard card border-4 flex flex-row gap-20 p-8 items-center justify-center">
          <div className="images flex flex-col justify-center items-center">
            <img src={VS} className="w-72"></img>
            <img src={Influencer} className="h-80 rounded-3xl"></img>
          </div>
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="form space-y-4 relative flex flex-col justify-center items-center p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-center">Sign Up</h2>

              <div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm w-xs">{errors.username}</p>
                )}
              </div>

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

              <div className="relative bottom-6">
                <input
                  type={showconfirmpassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                <div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showconfirmpassword)}
                    className="text-gray-500 relative left-68 bottom-8"
                  >
                    {showconfirmpassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.confirmpassword && (
                  <p className="text-red-500 relative text-sm w-xs bottom-6">
                    {errors.confirmpassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="signupbutton bg-amber-400 relative px-4 py-2 rounded-lg text-xl justify-center items-center w-xs bottom-6"
              >
                Sign Up
              </button>
            </form>
            <div className="signup form rounded-lg">
              Have an account?{" "}
              <Link to="/login" className="underline bluelink">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
