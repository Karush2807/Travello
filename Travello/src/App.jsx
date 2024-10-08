import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import About from "./components/Aboutus";
import FeatureCarousel from "./components/Carousel";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          
          <Routes>
            {/* Landing page route */}
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};


const Landing = () => {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <About />
      
      </div>
);
};

export default App;
