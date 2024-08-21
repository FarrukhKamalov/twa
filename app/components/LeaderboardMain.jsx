"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Adjust the import path as needed
import { FaMedal } from "react-icons/fa";

const LeaderboardMain = () => {
  const leaderboardData = [
    {
      name: "Sardor Jo'rayev",
      avatarBg: "https://static7.tgstat.ru/channels/_0/83/83b618801f32efd8991fce6e1d1509b1.jpg",
      fallback: "BB",
      medalClass: "text-yellow-400",
      channelLink: "https://t.me/sardor_juraevv"
    },
  ];

  return (
    <div className="w-full mt-2">
      <h1 className="text-white font-bold text-[25px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[45px] text-center">
          Channels Me
        </h1>
      <div className="container p-4 mt-4 bg-white/10 rounded-[10px] w-11/12">
        <div className="flex flex-col gap-4 m-auto">
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
              <a href={item.channelLink} className="bg-amber-400 px-4 py-1 offff rounded-xl">
                  Join
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardMain;
