'use client';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import MainHome from './components/MainHome';

function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    WebApp.ready();
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-white text-center">User Data</h1>
          <ul>
            <li className='text-white font-bold text-center'>{userData.first_name}</li>
            <li className='text-white font-bold text-center'>{userData.id}</li>
            <li className='text-white font-bold text-center'>{userData.username || 'N/A'}</li>
            <li className='text-white font-bold text-center'>{userData.is_premium ? 'Yes' : 'No'}</li>
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
