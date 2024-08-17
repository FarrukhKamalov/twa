"use client";

import React, { useState, useEffect } from "react";
import LeaderboardMain from "../components/LeaderboardMain";
import LeadingbordHome from "../components/LeadingbordHome";

const page = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data.about);
  //     })
  // }, []);

  // <div className="gdi">
  //   {posts.map((user, id) => (
  //     <div className="" key={id}>
  //       <img src={user.img} className="grid-image" />
  //       <p className="">{user.name}</p>
  //       <p className="">{user.des}</p>
  //     </div>
  //   ))}
  // </div>;

  return (
    <div>
      {/* <LeadingbordHome /> */}
      <LeaderboardMain />
    </div>
  );
};

export default page;
