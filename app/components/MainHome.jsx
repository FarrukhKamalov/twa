import { MdCastConnected } from "react-icons/md";
import { FaPlayCircle } from 'react-icons/fa';

import Swiper from "./Swiper"
const MainHome = () => {
  return (
    <div>
      <div className="w-full">
        <div className=" container mx-auto">
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-col items-center">
              <button className="bg-white flex gap-2 items-center rounded-sm p-2 w-[120px] mt-4 mb-4">
                <MdCastConnected className="text-[11px]" />
                <span className="text-[11px] font-medium">Connect wallet</span>
              </button>
              <div className="w-[250px] h-[]">
                <img
                  src="/assets/images/505.png"
                  className="w-32 ml-14"
                  alt="no image"
                />
              </div>
              <div>
                <p className="text-white text-center font-bold text-[20px]">
                  Blynd
                </p>
              </div>
            </div>
          </div>
        </div>
        <Swiper/>
      </div>
    </div>
  );
};

export default MainHome;
