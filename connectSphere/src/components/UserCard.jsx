import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user, following, toggleFollow }) {
  const isFollowing = following.some((f) => f.id === user.id);

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>@{user.username}</p>
      <div className="card-actions">
        <Link to={/users/${user.id}} className="btn">View</Link>
        <button onClick={() => toggleFollow(user)} className="btn follow">
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}