// src/components/Logout.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      alert("Logout successful!");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
