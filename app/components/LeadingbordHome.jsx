import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LeadingbordHome = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div>
          <div className="flex items-center justify-center">
            <h1 className="text-white font-bold text-[25px] sm:text-[25px] md:text-[35px] lg:text-[40px] xl:text-[45px]">
              Telegram Wall of Fame
            </h1>
          </div>

          <div className="flex items-center justify-center mt-10 mb-10">
            <div className="flex bg-white/10 items-center justify-center p-4 rounded-[10px] w-[350px]">
              <div className="flex gap-3 items-center">
                <Avatar className="bg-lime-500">
                  <AvatarFallback className="text-black font-medium">
                    FK
                  </AvatarFallback>
                </Avatar>
                <div className="text-white flex justify-between items-center gap-6">
                  <div>
                    <p className="text-[15px] font-medium">kamalov_farrukh</p>
                    <p className="text-[15px] font-medium text-white/60">
                      2000 DOGS
                    </p>
                  </div>
                  <div>
                    <span className="text-[15px] font-medium">#24540659</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingbordHome;
