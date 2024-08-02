import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBeta } from "react-icons/tb";
import { PiBoneFill } from "react-icons/pi";

const tasks = [
  {
    id: 1,
    icon: <FaCheck />,
    name: "Make a TON Transaction",
    title: "+3,000 DOGS",
    button: "Start",
  },
  {
    id: 2,
    icon: <FaTelegramPlane />,
    name: "Subscribe to DOGS channel",
    title: "+100 DOGS",
    button: "Start",
  },
  {
    id: 3,
    icon: <RiTwitterXLine />,
    name: "Follow on Twitter",
    title: "+1,000 DOGS",
    button: "Start",
  },
  {
    id: 4,
    icon: <TbBeta />,
    name: "Join Beta Program",
    title: "+500 DOGS",
    button: "Start",
  },
  {
    id: 5,
    icon: <PiBoneFill />,
    name: "Complete Profile",
    title: "+200 DOGS",
    button: "Check",
  }
];

const Tasks = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto py-12">
        <div>
          <h1 className="text-white text-[25px] font-medium text-start mb-8">
            Tasks
          </h1>
        </div>

        <div>
          <div className="flex flex-col justify-between gap-5">
            {tasks.map((item) => (
              <div key={item.id} className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-white text-2xl bg-white/20 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div className="text-white">
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-sm text-white/50 font-medium">{item.title}</p>
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
