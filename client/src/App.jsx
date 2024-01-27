import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import FootComp from "./components/FootComp";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      {/* Present in all routes */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route element={<PrivateRoute />}>
          {/* Private Routes authentic entry only else redirect */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>

      {/* Present in all routes */}
      <FootComp />
    </BrowserRouter>
  );
};

export default App;
