import { ReactNode, useState } from "react";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  const [count, setCount] = useState(0);
  const [hovering, setHovering] = useState(false);
  const updateHoverEnter = (num: number) => {
    setCount(num);
    setHovering(true);
  };

  const updateHoverLeave = () => {
    setHovering(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-16 h-screen w-16 m-0 flex flex-col bg-gray-900 shadow-lg">
        <div
          data-hovered={count.toString()}
          className="absolute bottom-0 w-8 self-center  
          transition-all duration-300
          data-[hovered='0']:h-24
          data-[hovered='1']:h-[calc(100vh-64px+048px)]
          data-[hovered='2']:h-[calc(100vh-128px+48px)]
          data-[hovered='3']:h-[calc(100vh-192px+48px)]
          data-[hovered='4']:h-[calc(100vh-256px+48px)]"
        >
          <div className="w-8 h-8 top-0 bg-orange-900 rounded-t-xl">
            <span
              data-hovering={hovering.toString()}
              className="sidebar-tooltip scale-0 data-[hovering='true']:scale-100"
            >
              {`tooltip ${count}💡`}
            </span>
          </div>
          <div className="w-8 h-full flex flex-row">
            <div className="basis-1/3 bg-orange-900"></div>
            <div className="basis-1/3"></div>
            <div className="basis-1/3 bg-orange-900"></div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon
          id={"icon_1"}
          onMouseEnter={() => updateHoverEnter(1)}
          onMouseLeave={() => updateHoverLeave()}
          icon={<FaFire size="28" />}
        />
        <SideBarIcon
          id={"icon_2"}
          onMouseEnter={() => updateHoverEnter(2)}
          onMouseLeave={() => updateHoverLeave()}
          icon={<BsPlus size="32" />}
        />
        <SideBarIcon
          id={"icon_3"}
          onMouseEnter={() => updateHoverEnter(3)}
          onMouseLeave={() => updateHoverLeave()}
          icon={<BsFillLightningFill size="20" />}
        />
        <SideBarIcon
          id={"icon_4"}
          onMouseEnter={() => updateHoverEnter(4)}
          onMouseLeave={() => updateHoverLeave()}
          icon={<FaPoo size="20" />}
        />
      </div>
    </div>
  );
};

type SideBarInput = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
};

const SideBarIcon = ({ icon, ...props }: SideBarInput) => (
  <div className="sidebar-icon group" onMouseLeave={() => {}} {...props}>
    {icon}
  </div>
);
export default SideBar;
