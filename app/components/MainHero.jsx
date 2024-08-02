import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { MdCastConnected } from "react-icons/md";

const MainHero = () => {
  return (
    <div className="pb-4">
      <div className="bg-gradient-to-r from-blue-700">
        <div className="w-full">
          <div className="container mx-auto py-4">
            <div className="flex items-center justify-center gap-2">
              <div className="border-[1px] border-white p-2 rounded-full">
                <SiGoogledisplayandvideo360 className="text-white/80 text-[10px]" />
              </div>
              <h2 className="text-white/80 font-medium text-[18px]">
                Your Score
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
