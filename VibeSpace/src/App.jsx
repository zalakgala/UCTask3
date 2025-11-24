import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./AppTailwind.css";
import { useState, useEffect } from "react";
import ProtectedRoute from "./Routing/ProtectedRoute";
import Landup from "./Pages/Landup/Landup";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import Signup from "./Pages/Signup/Signup";
import HomePage from "./Pages/HomePage/HomePage";
import Post1 from "./Pages/Post/Post1";
import Post2 from "./Pages/Post/Post2";
import Post3 from "./Pages/Post/Post3";
import Discover from "./Pages/Discover/Discover";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PagesWithNavbar from "./Components/PagesWithNavbar";
import Create from "./Pages/Create/Create";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light"
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((th) => (th === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Router>
        <div className="themediv">
          <button onClick={toggleTheme} className="theme">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Landup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route element={<PagesWithNavbar />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/post1" element={<Post1 />} />
              <Route path="/post2" element={<Post2 />} />
              <Route path="/post3" element={<Post3 />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/create" element={<Create />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
