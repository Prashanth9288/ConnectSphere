import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail({ following, toggleFollow }) {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then(setUser);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then(setPosts);
  }, [id]);

  if (!user) return <p>Loading...</p>;

  const isFollowing = following.some((f) => f.id === user.id);

  return (
    <div className="container">
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>
      <p>
        Address: {user.address?.suite}, {user.address?.street}, {user.address?.city}
      </p>
      <button onClick={() => toggleFollow(user)} className="btn follow">
        {isFollowing ? "Unfollow" : "Follow"}
      </button>

      <h3>Posts</h3>
      {posts.map((p) => (
        <div key={p.id} className="post">
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}