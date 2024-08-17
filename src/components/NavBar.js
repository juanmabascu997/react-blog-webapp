import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

import'./Navbar.css';

function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
       let userStorage = localStorage.getItem('user');
       if (userStorage) {
            setUser(JSON.parse(userStorage))
       }
    }, [])

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleLoginSuccess,
        });
        
        const signInButton = document.getElementById('user-login');
        
        if (!user) {
            window.google.accounts.id.renderButton(
                document.getElementById('google-sign-in-button'),
                { theme: 'outline', size: 'medium' }
            );
            window.google.accounts.id.prompt();
            if (signInButton) {
                signInButton.style.display = 'flex';
            }
        } else {
            if (signInButton) {
                signInButton.style.display = 'none';
            }
        }

    }, [user]);

    const handleLoginSuccess = (response) => {
        const userObject = jwtDecode(response.credential);
        setUser(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
    };

    const handleLogout = () => {
        setUser(null);
        window.google.accounts.id.disableAutoSelect();
        localStorage.clear('user');
    };

    return (
        <nav className="navbar"><div className="logo">Blog App</div><div className="auth-buttons">
        {!user ? (
            <div id="user-login">
                <div id="google-sign-in-button"></div>
            </div>
        ) : (
          <div className="user-section"><img src={user.picture} alt="Profile" className="profile-pic" /><span className="user-name">{user.name}</span><button onClick={handleLogout} className="logout-button">
              Logout
            </button></div>
        )}
      </div></nav>
  );
}

export default Navbar;
