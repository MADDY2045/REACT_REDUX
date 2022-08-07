import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NoPage from "./pages/NotFound";
import Protected from "./pages/Protected";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn((prevState) => !prevState);

  return (
    <BrowserRouter>
      <div>
        {!isLoggedIn ? (
          <button className="btn btn-primary" onClick={login}>
            LOG IN
          </button>
        ) : (
          <button className="btn btn-outline-secondary" onClick={login}>
            LOG OUT
          </button>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="profile"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Profile />
              </Protected>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
