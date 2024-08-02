import React from "react";
import MainHero from "./components/MainHero";
import MainHome from "./components/MainHome";
import Tasks from "./components/Tasks";

const page = () => {
  return (
    <div>
      <MainHero />
      <MainHome />
      <Tasks />
    </div>
  );
};

export default page;
