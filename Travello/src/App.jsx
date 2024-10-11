import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import About from "./components/Aboutus";
import FeatureCarousel from "./components/Carousel";
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoutes.jsx';
import { AuthProvider } from './context/authContext.jsx';
import { Toaster } from 'react-hot-toast';
import Profile from "./components/Profile.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </main>
        </div>
      </Router>
      <Toaster />
    </AuthProvider>
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
