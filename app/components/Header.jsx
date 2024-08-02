import Link from "next/link";
import { PiBoneFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { IoReloadOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RiTerminalWindowLine } from "react-icons/ri";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="w-full">
        <div className="container py-4">
          <ul className="flex justify-between items-center">
            <li className="flex items-center gap-2 text-white text-[18px]">
              <Link href="/">Dogs</Link>
              <PiBoneFill />
            </li>
            <li className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger>
                  <CiMenuKebab className="text-white/60 text-[25px]" />
                </PopoverTrigger>
                <PopoverContent className="flex w-[100%]">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <IoReloadOutline />
                      <p>Reload Page</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <RiTerminalWindowLine />
                      <p>Terms of Use</p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <div className="text-white/65 text-[25px]">
                <IoMdClose />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
