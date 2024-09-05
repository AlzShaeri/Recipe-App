import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Logout from './Logout';

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <header>
      <h1>Recipe App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          {currentUser ? (
            <>
              <li><span>{currentUser.email}</span></li>
              <li><Logout /></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
