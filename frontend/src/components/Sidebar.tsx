import SidebarHeader from "./SidebarComponents/SidebarHeader";
import ChatHistory from "./SidebarComponents/ChatHistory";
import SidebarFooter from "./SidebarComponents/SidebarFooter";
import { X } from "lucide-react";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}) => {
  return (
    <div
      className={`h-screen max-w-[300px] ${
        isSidebarOpen ? "left-0" : "-left-[100%]"
      } bg-[#1C1F2E] fixed top-0 rounded-tr-md rounded-br-md shadow-[4px_0px_25px_0px_rgba(0,0,0,0.25)] z-10 px-2 py-7 transition-all ease-in-out duration-200 flex flex-col `}
    >
      {/* Sidebar Top Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between pl-2 pr-9">
          <img
            src="./ai.png"
            width={30} 
          />
          <X
            className="cursor-pointer duration-300 translate-x-4 text-white"
            height={25}
            width={25}
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <SidebarHeader />
      </div>
      <p className="text-sm text-gray-400 px-3 mb-2  mt-3">Chats</p>
      <ChatHistory />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
