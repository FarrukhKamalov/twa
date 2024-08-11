"use client";

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import { MdCastConnected } from "react-icons/md";
import Swiper from "./Swiper";

const MainHome = () => {

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
          <ul className="flex g-32 items-center justify-center">
            <li className="text-white font-bold text-center">
              {userData.username || userData.first_name}
            </li>
            <button className="bg-white flex gap-2 items-center rounded-sm p-2 w-[150px]">
                <MdCastConnected className="text-[15px]" />
                <span className="text-[15px] font-medium">
                  Connect wallet
                </span>
            </button>
          </ul>
          <div>
            <div className="w-full">
              <div className=" container mx-auto">
                <div className="flex flex-col gap-5 items-center justify-center">
                  <div className="flex flex-col items-center">

                    <div className="w-[250px] h-[]">
                      <img
                        src="/assets/images/505.png"
                        className="w-full"
                        alt="no image"
                      />
                    </div>
                    <div>
                      <h2 className="text-white text-center font-bold text-[37px]">
                        Blynd
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <Swiper />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )} 
    </main>
  );
};

export default MainHome;
