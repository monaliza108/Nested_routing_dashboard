import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./screens/dashboard";
import Home from "./screens/home";
import SignUp from "./screens/signup";
import Profile from "./screens/profile";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile/:id" element={<Profile />} />

          <Route
          path="*"
          element={<> <h1>404 Page Not Found</h1> </>}/>

        </Routes>
      </div>
    </Router>
  );
}