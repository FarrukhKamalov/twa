"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Adjust the import path as needed
import { FaMedal } from "react-icons/fa";

const LeaderboardMain = () => {
  const leaderboardData = [
    {
      name: "elkanadi",
      score: "19,522,606 DOGS",
      avatarBg: "bg-blue-700",
      fallback: "El",
      medalClass: "text-yellow-400",
    },
  ];

  return (
    <div className="w-full">
      <div className="container py-12">
        <div className="flex flex-col gap-4">
          {leaderboardData.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex gap-10 items-center">
                <Avatar className={item.avatarBg}>
                  <AvatarFallback className="text-white font-medium">
                    {item.fallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white text-[18px] font-medium">
                    {item.name}
                  </p>
                  <p className="text-white/60 text-[18px] font-medium">
                    {item.score}
                  </p>
                </div>
              </div>
              <button className="text-[25px]">
                {item.rank ? (
                  item.rank
                ) : (
                  <FaMedal className={item.medalClass} />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-14 justify-center items-center">
                <Avatar>
                  <AvatarFallback className="offt text-white font-medium">
                      BB
                  </AvatarFallback>
                </Avatar>
        <p className="text-white font-medium">Bla Bla Channel</p>
        <button className="px-4 py-1 rounded-xl bg-blue-500 text-white">
          Join
        </button>
      </div>
    </div>
  );
};

export default LeaderboardMain;
