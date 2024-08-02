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
    {
      name: "glebtma",
      score: "16,727,058 DOGS",
      avatarBg: "bg-rose-600",
      fallback: "Gl",
      medalClass: "text-white/60",
    },
    {
      name: "imGet",
      score: "13,628,208 DOGS",
      avatarBg: "bg-yellow-400",
      fallback: "IM",
      medalClass: "text-yellow-700",
    },
    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },
    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },
    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },
    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },
    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },
    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },
    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
    },

    {
      name: "Esalat",
      score: "13,380,208 DOGS",
      avatarBg: "bg-blue-600",
      fallback: "ES",
      medalClass: "text-white",
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
              <div className="text-[25px]">
                {item.rank ? (
                  item.rank
                ) : (
                  <FaMedal className={item.medalClass} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardMain;
