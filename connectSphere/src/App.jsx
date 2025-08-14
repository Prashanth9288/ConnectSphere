import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Following from "./pages/Following";
import UserDetail from "./pages/UserDetail";

export default function App() {
  const [following, setFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem("following")) || [];
  });

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(following));
  }, [following]);

  const toggleFollow = (user) => {
    setFollowing((prev) => {
      const exists = prev.find((u) => u.id === user.id);
      if (exists) {
        return prev.filter((u) => u.id !== user.id);
      } else {
        return [...prev, user];
      }
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home following={following} toggleFollow={toggleFollow} />} />
        <Route path="/following" element={<Following following={following} toggleFollow={toggleFollow} />} />
        <Route path="/users/:id" element={<UserDetail following={following} toggleFollow={toggleFollow} />} />
      </Routes>
    </>
  );
}