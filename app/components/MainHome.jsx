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
              <button className="bro bg-white flex gap-2 items-center rounded-sm p-1 w-[200px] mt-2 mb-2">
                <MdCastConnected className="text-[25px]" />
                <span className="text-[17px] font-medium">Connect wallet</span>
              </button>
              <div className="w-[185px] h-[]">
                <img
                  src="/assets/images/505.png"
                  className="w-50 flex justify-center items-center m-auto"
                  alt="no image"
                />
              </div>
              <div>
                <p className="text-white text-center font-bold text-[20px] mb-1">
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
