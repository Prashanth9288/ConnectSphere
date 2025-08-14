import React,{useState,useEffect} from "react";

import UserCard from "../components/UserCard";

export default function Home({following,togglefollow}){
  const [users,setUsers]=useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then(setUsers);
  },[]);

  const filtered=users.filter((u)=>u.name.toLowerCase().includes(search.toLowerCase()));
  return(
    <div className="container">
      <input type="text"
      className="search"
      placeholder="Search users..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)} />
      <div className="grid">
        {filtered.map((user)=>(
        <UserCard
            key={user.id}
            user={user}
            following={following}
            toggleFollow={togglefollow}/>
      ))}
    </div>
    </div>
    
  );
}