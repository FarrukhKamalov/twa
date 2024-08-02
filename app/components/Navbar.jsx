"use client";

import { RiHomeLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="pb-4">
      <div className="w-full fixed bottom-0 bg-black py-4">
        <div className="container mx-auto">
          <ul className="flex justify-between items-center text-white relative z-50">
            <li className="">
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "flex flex-col items-center text-white"
                    : "flex flex-col items-center text-white/70"
                }
              >
                <RiHomeLine className="text-[25px]" />
                <h1 className="text-[15px]">Home</h1>
              </Link>
            </li>
            <li className="">
              <Link
                href="/leaderboard"
                className={
                  pathname === "/"
                    ? "flex flex-col items-center text-white"
                    : "flex flex-col items-center text-white/70"
                }
              >
                <SiSimpleanalytics className="text-[25px] text-white/70" />
                <h1 className="text-[15px]">Leaderboard</h1>
              </Link>
            </li>
            <li className="">
              <Link
                href="/friends"
                className={
                  pathname === "/"
                    ? "flex flex-col items-center text-white"
                    : "flex flex-col items-center text-white/70"
                }
              >
                <FaUserFriends className="text-[25px] text-white/70" />
                <h1 className="text-[15px]">Friends</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
