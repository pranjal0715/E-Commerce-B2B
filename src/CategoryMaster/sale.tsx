import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";
const sale = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <Ghost className="w-24 h-24 text-gray-400 animate-bounce" />
      <h1 className="text-6xl font-bold mt-4">404</h1>
      <p className="text-xl mt-2">Oops! Looks like you're lost in space.</p>
      <p className="text-gray-400 mt-1">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg text-lg font-semibold transition-all">
        Take Me Home
      </Link>
    </motion.div>
  </div>
  )
}

export default sale