import { ReactNode, useState } from "react";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="fixed top-0 left-16 h-screen w-16 m-0 flex flex-col bg-gray-900 shadow-lg">
        <div
          data-hovered={count.toString()}
          className="bg-orange-900 absolute top-0 bottom-0 w-8 self-center  
          transition-all duration-300 
          data-[hovered='1']:top-16
          data-[hovered='2']:top-28 
          data-[hovered='3']:top-42
          data-[hovered='4']:top-48"
        >
          {count}
        </div>
      </div>
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon
          id={"wenis"}
          countSetter={() => setCount(1)}
          icon={<FaFire size="28" />}
        />
        <SideBarIcon
          countSetter={() => setCount(2)}
          icon={<BsPlus size="32" />}
        />
        <SideBarIcon
          countSetter={() => setCount(3)}
          icon={<BsFillLightningFill size="20" />}
        />
        <SideBarIcon
          countSetter={() => setCount(4)}
          icon={<FaPoo size="20" />}
        />
      </div>
    </div>
  );
};

type SideBarInput = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  countSetter: () => void;
  text?: string;
};

const SideBarIcon = ({
  icon,
  countSetter,
  text = "tooltip 💡",
  ...props
}: SideBarInput) => (
  <div className="sidebar-icon group" onMouseOver={countSetter} {...props}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default SideBar;
