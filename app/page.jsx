'use client'


import { useEffect, useState } from "react"
import React from "react";
import MainHome from "./components/MainHome";
import WebApp from '@twa-dev/sdk';
const Page = () => {
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
      <MainHome/>
    </div>
  );
};

export default Page;
