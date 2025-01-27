import { Button } from "@/components/ui/button";
import { Link } from "react-router";
const HomePage = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30">
        <h1 className=" monage-font text-white text-6xl text-center w-[1000px]">
          Quiz. Compete. Conquer.
        </h1>
        <p className="text-center text-[#ffffffa2] text-lg">
          Multiplayer quizzes that keep you on your toes. Play now and show off
          your smarts
        </p>
        <div className="flex items-center gap-4 mt-7">
          <Link to="/game">
            <Button className="rounded-xl bg-[#ffffffe0] text-[#000000dd] hover:text-[#000] hover:bg-white">
              Play now
            </Button>
          </Link>
          <Link to="/lobby">
            <Button className="rounded-xl text-[#ffffffa2] hover:text-[#fff]">
              Create a lobby
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
