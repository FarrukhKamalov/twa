"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Adjust the import path as needed
import { FaMedal } from "react-icons/fa";

const LeaderboardMain = () => {
  const leaderboardData = [
    {
      name: "Bla Bla Chanel",
      avatarBg: "bg-blue-700",
      fallback: "BB",
      medalClass: "text-yellow-400",
    },
  ];

  return (
    <div className="w-full">
      <div className="container p-4 mt-4 bg-white/10 rounded-[10px] w-[350px]">
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
                </div>
              </div>
              <button className="px-4 py-1 offff rounded-xl">
                  Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardMain;
