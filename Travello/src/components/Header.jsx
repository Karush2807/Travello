import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMapMarkedAlt, FaTrophy, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <motion.header
      className="bg-white shadow-md p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Travello Logo with Typewriter Effect */}
        <motion.h1
          className="text-3xl font-extrabold text-purple-500 tracking-wide"
          whileHover={{ scale: 1.1 }}
        >
          <Typewriter
            options={{
              strings: ["Travello"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </motion.h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6 items-center">
          <Link to="/" className="text-lg font-medium text-gray-600 hover:text-purple-500 transition">
            <FaHome className="inline mr-1" /> Home
          </Link>
          <Link to="/discover" className="text-lg font-medium text-gray-600 hover:text-purple-500 transition">
            <FaMapMarkedAlt className="inline mr-1" /> Discover
          </Link>
          <Link to="/leaderboard" className="text-lg font-medium text-gray-600 hover:text-purple-500 transition">
            <FaTrophy className="inline mr-1" /> Leaderboard
          </Link>
          <Link to="/profile" className="text-lg font-medium text-gray-600 hover:text-purple-500 transition">
            <FaUserAlt className="inline mr-1" /> Profile
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
