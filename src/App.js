import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import RecipeSearch from './components/RecipeSearch';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <Logout setIsAuthenticated={setIsAuthenticated} />
                </li>
                <li>
                  <Link to="/search">Recipe Search</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/search" element={isAuthenticated ? <RecipeSearch /> : <Navigate to="/login" />} />
          <Route path="/" element={<h1>Recipe App</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
