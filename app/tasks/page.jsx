import { FaCheck } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBeta } from "react-icons/tb";
import { PiBoneFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";

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
    name: "Make a TON Transaction",
    title: "+3,000 DOGS",
    button: "Start",
  },

  {
    id: 3,
    icon: <RiTwitterXLine />,
    name: "Make a TON Transaction",
    title: "+3,000 DOGS",
    button: "Start",
  },

  {
    id: 4,
    icon: <TbBeta />,
    name: "Make a TON Transaction",
    title: "+3,000 DOGS",
    button: "Start",
  },

  {
    id: 5,
    icon: <FaCheck />,
    name: "Make a TON Transaction",
    title: "+3,000 DOGS",
    button: "Chek",
  },

  {
    id: 6,
    icon: <PiBoneFill />,
    name: "Make a TON Transaction",
    title: "+3,000 DOGS",
    button: "Check",
  }
];

// const rewards = [
//   {
//     id: 1,
//     src: <BsStars />,
//     desc: "Account age",
//     price: "+2000 DOGS",
//   },

//   {
//     id: 2,
//     src: <GoStarFill />,
//     desc: "Telegram Premium",
//     price: "+2000 DOGS",
//   },
// ];

const Tasks = () => {
  return (
    <div className="w-full">
      <div className=" container mx-auto py-12">
        <div>
          <h1 className="text-white text-[25px] font-medium text-start mb-8">
            Tasks
          </h1>
        </div>

        <div>
          <div className="flex flex-col justify-between gap-5">
            {tasks.map((items, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-2 justify-between items-center">
                    <div className="text-white text-[18px] bg-white/20 p-2 rounded-full">
                      {items.icon}
                    </div>
                    <div className="text-white">
                      <p className="text-white text-[18px] font-medium">
                        {items.name}
                      </p>
                      <p className="text-[15px] text-white/50 font-medium">
                        {items.title}
                      </p>
                    </div>

                    <div className="bg-white/30 hover:bg-white/40 transition-all duration-300 flex items-center justify-center p-2 rounded-[12px] w-[120px]">
                      <button className="text-white text-[18px] font-medium">
                        {items.button}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="pb-10">
           
          </div> */}
        </div>
      </div>
    </div>
  );
};




 {/* <div className="mt-8">
              <h1 className="text-white text-[25px] font-medium text-start mb-8">
                Your Rewards
              </h1>
            </div> */}

            {/* <div className="flex flex-col justify-between gap-5">
              {rewards.map((items, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-2 justify-between items-center">
                      <div className="text-white text-[18px] bg-white/20 p-2 rounded-full">
                        {items.src}
                      </div>
                      <div className="text-white flex items-center">
                        <p className="text-white text-[18px] font-medium">
                          {items.desc}
                        </p>
                     
                      </div>

                      <div className="">
                        <button className="text-white text-[18px] font-medium">
                          {items.price}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
export default Tasks;
