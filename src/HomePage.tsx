import SideBar from "./SideBar";

function HomePage() {
  return (
    <div className="flex">
      <div className="flex-none">
        <SideBar />
      </div>

      <div className="flex-auto">
        <h1 className="text-3xl font-bold text-green-400 text-center">
          Hello (Shash)!
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
