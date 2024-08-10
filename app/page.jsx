import React from "react";
import MainHero from "./components/MainHero";
import MainHome from "./components/MainHome";
import Tasks from "./components/Tasks";
import WebApp from '@twa-dev/sdk';
import { useState, useEffect} from "react";

const page = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    WebApp.ready();
    setUserData({
      username: WebApp.initDataUnsafe.user.username,
      firstname: WebApp.initDataUnsafe.user.first_name,
      lastname: WebApp.initDataUnsafe.user.last_name,
      id: WebApp.initDataUnsafe.user.id,
      language_code: WebApp.initDataUnsafe.user.language_code
    });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <MainHero />
      <MainHome />
      <Tasks />
    </div>
  );
};

export default page;