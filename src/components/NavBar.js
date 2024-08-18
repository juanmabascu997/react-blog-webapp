import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { fetchLoginUser } from "../services/api";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let userStorage = localStorage.getItem("user");
    if (userStorage) {
      fetchLoginUser();
      setUser(JSON.parse(userStorage));
    }
  }, []);

  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleLoginSuccess,
    });

    const signInButton = document.getElementById("user-login");

    if (!user) {
      window.google?.accounts.id.renderButton(
        document.getElementById("google-sign-in-button"),
        { theme: "outline", size: "medium" }
      );
      window.google?.accounts.id.prompt();
      if (signInButton) {
        signInButton.style.display = "flex";
      }
    } else {
      if (signInButton) {
        signInButton.style.display = "none";
      }
    }
  }, [user]);

  const handleLoginSuccess = (response) => {
    const userObject = jwtDecode(response.credential);
    fetchLoginUser();
    setUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
  };

  const handleLogout = () => {
    setUser(null);
    window.google.accounts.id.disableAutoSelect();
    localStorage.clear("user");
    localStorage.clear("posts");
  };

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" className="reset-text">Blog App</Link></div>
      <div className="auth-buttons">
        {!user ? (
          <div id="user-login">
            <div id="google-sign-in-button"></div>
          </div>
        ) : (
          <div className="user-section">
            <img src={user.picture} alt="Profile" className="profile-pic" />
            <span className="user-name-nav">{user.name}</span>
            <button onClick={() => navigate("/users")} className="users-button">
              Users
            </button>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
