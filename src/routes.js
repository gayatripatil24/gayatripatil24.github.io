import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import {Navbar} from "./components/navbar";
import {Home} from "./pages/home";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import SignUp from "./pages/signup";


function AppRoutes() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/annual"
                    element={<AnnualReport />}
                />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>

  );
}

export default AppRoutes;

