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
          <ul className='mb-4'>
            <li className='text-white font-bold text-center'>{userData.username || userData.first_name || userData.last_name}</li>
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
