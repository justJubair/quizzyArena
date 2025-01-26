import { Button } from "@/components/ui/button";
import bannerImg from "../../assets/images/banner.jpg";
const HomePage = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:52px_52px]">
          <div className="absolute inset-0 animate-grid-shift bg-[radial-gradient(#ffffff50_1px,transparent_1px)] bg-[size:52px_52px] opacity-50"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30">
        <h1 className=" monage-font text-6xl text-white">
          Quiz. Compete. Conquer.
        </h1>
        <p className="text-center text-xl text-[#ffffffa2]">
          Multiplayer quizzes that keep you on your toes. Play now and show off
          your smarts
        </p>
        <div className="flex items-center gap-4 mt-10">
          <Button className="rounded-xl bg-[#ffffffe0] text-[#000000dd] hover:text-[#000] hover:bg-white">
            Join now
          </Button>
          <Button className="rounded-xl text-[#ffffffa2] hover:text-[#fff]">
            Create a lobby
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
