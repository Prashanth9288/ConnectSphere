import React from "react";
import UserCard from "../components/UserCard";

export default function Following({ following, toggleFollow }) {
  return (
    <div className="container">
      <h2>Following</h2>
      {following.length === 0 ? (
        <p>No users followed yet.</p>
      ) : (
        <div className="grid">
          {following.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              following={following}
              toggleFollow={toggleFollow}
            />
          ))}
        </div>
      )}
    </div>
  );
}