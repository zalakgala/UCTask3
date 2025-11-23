import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    city: "",
    gender: "",
    dob: "",
    bio: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    const userRegex = /^[a-zA-Z ]+$/;
    if (!userRegex.test(formData.name))
      newErrors.name = "Name must be letters only";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid Email Format";

    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passRegex.test(formData.password))
      newErrors.password =
        "Password must be atleast: 8+ characters, 1 uppercase, 1 number and 1 special character";

    if (formData.password !== formData.confirmpassword)
      newErrors.confirmpassword = "Passwords do not match";

    if (!formData.city.trim()) newErrors.city = "City is required";

    if (!formData.gender) newErrors.gender = "Please select a gender";

    if (!formData.dob) newErrors.dob = "Please choose your date of birth";

    if (formData.bio.trim().length < 10)
      newErrors.bio = "Bio should be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const info = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      city: formData.city,
      gender: formData.gender,
      dob: formData.dob,
      bio: formData.bio,
    };

    try {
      const res = await fetch(
        "https://task4-authdb.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(info),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      alert("Error connecting to server");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-36">
        <div className="regcard card border-4 flex flex-col p-8 items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="form space-y-4 relative flex flex-col justify-center items-center p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <div className="flex">
              <div className="space-y-4 relative flex flex-col justify-center items-center p-6 rounded-lg">
                {" "}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm w-xs">{errors.name}</p>
                )}{" "}
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm w-xs">{errors.email}</p>
                )}
                <div className="passcont flex items-center relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                  />
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="showbtn text-gray-500 relative"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500 relative text-sm w-xs">
                    {errors.password}
                  </p>
                )}
                <div className="passcont flex items-center relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                  />
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="showbtn text-gray-500 relative"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                {errors.confirmpassword && (
                  <p className="text-red-500 relative text-sm w-xs">
                    {errors.confirmpassword}
                  </p>
                )}
              </div>

              <div className="space-y-4 relative flex flex-col justify-center items-center p-6 rounded-lg">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm w-xs">{errors.city}</p>
                )}

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm w-xs">{errors.gender}</p>
                )}

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm w-xs">{errors.dob}</p>
                )}
                <input
                  type="text"
                  name="bio"
                  placeholder="Write something about yourself..."
                  value={formData.bio}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg border-gray-400 w-xs"
                />
                {errors.bio && (
                  <p className="text-red-500 text-sm w-xs">{errors.bio}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="signupbutton bg-amber-400 relative px-4 py-2 rounded-lg text-xl justify-center items-center w-xs"
            >
              Register
            </button>
          </form>

          <div className="signup form rounded-lg">
            Have an account?{" "}
            <Link to="/login" className="underline bluelink">
              Login
            </Link>
          </div>

          {loading && (
            <div className="loadingbg flex justify-center items-center">
              <div className="loading"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
