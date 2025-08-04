import CaseIcon from "./Icons/CategorySidebar/Case.icon";
import CPUIcon from "./Icons/CategorySidebar/CPU.icon";
import DriveIcon from "./Icons/CategorySidebar/Drive.icon";
import FanIcon from "./Icons/CategorySidebar/Fan.icon";
import GraphicCardIcon from "./Icons/CategorySidebar/GraphicCard.icon";
import KMHIcon from "./Icons/CategorySidebar/KMH.icon";
import MotherboardIcon from "./Icons/CategorySidebar/Mainboard.icon";
import PSUIcon from "./Icons/CategorySidebar/PSU.icon";
import RamIcon from "./Icons/CategorySidebar/Ram.icon";

type Props = {
  icon: string;
  title: string;
};
export const CategoryMenu = ({ icon, title }: Props) => {
  return (
    <div
      className={`flex items-center px-2 py-1 hover:bg-red-500 hover:text-white transition-colors cursor-pointer${
      icon !== "old" ? " border-b border-gray-100" : ""
      }`}
    >
      <div className="w-6 flex items-center justify-center">
      {icon === "graphic-card" && <GraphicCardIcon className="w-6 h-6" />}
      {icon === "cpu" && <CPUIcon className="w-5 h-5" />}
      {icon === "motherboard" && <MotherboardIcon className="w-5 h-5" />}
      {icon === "ram" && <RamIcon className="w-5 h-5" />}
      {icon === "drive" && <DriveIcon className="w-5 h-5" />}
      {icon === "psu" && <PSUIcon className="w-5 h-5" />}
      {icon === "fan" && <FanIcon className="w-5 h-5" />}
      {icon === "case" && <CaseIcon className="w-5 h-5" />}
      </div>
      <span className="ml-2">{title}</span>
    </div>
  );
};
