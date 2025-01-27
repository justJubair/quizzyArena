import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:52px_52px]">
          <div className="absolute inset-0 animate-grid-shift bg-[radial-gradient(#ffffff50_1px,transparent_1px)] bg-[size:52px_52px] opacity-50"></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default App;
