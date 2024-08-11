import { MdCastConnected } from "react-icons/md";

const MainHome = () => {
  return (
    <div>
      <div className="w-full">
        <div className=" container mx-auto py-12">
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-col items-center">
              <button className="bg-white flex gap-2 items-center rounded-sm p-2 w-[150px]">
                <MdCastConnected className="text-[15px]" />
                <span className="text-[15px] font-medium">Connect wallet</span>
              </button>

              <div className="w-[250px] h-[]">
                <img
                  src="/assets/images/dogs.png"
                  className="w-full"
                  alt="no image"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-[37px]">2500</h2>
                <p className="text-white/60 font-medium text-[34px]">DOGS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
