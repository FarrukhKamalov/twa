'use client';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import MainHome from './components/MainHome';

// Define the interface for user data
function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    WebApp.ready(); // Ensure the WebApp is fully ready
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name || 'N/A'}</li>
            <li>Username: {userData.username || 'N/A'}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
          <div>
            <MainHome />
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

export default Home;
