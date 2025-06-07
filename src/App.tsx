import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <div className="text-center mt-10 text-lg text-blue-600">Welcome to INFINIA AI Browser</div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-blue-500 underline">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}