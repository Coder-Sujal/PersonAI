import SidebarHeader from "./SidebarComponents/SidebarHeader";
import ChatHistory from "./SidebarComponents/ChatHistory";
import SidebarFooter from "./SidebarComponents/SidebarFooter";

import { X } from "lucide-react";

import { motion } from "motion/react";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}) => {
  return (
    <nav
      className={`h-screen max-w-[300px] 
        ${isSidebarOpen ? "left-0 opacity-100" : "-left-100 opacity-0"}
          bg-[#1C1F2E] fixed top-0 rounded-tr-md rounded-br-md shadow-[4px_0px_25px_0px_rgba(0,0,0,0.25)] z-10 px-2 py-7 transition-all ease-in-out duration-200 flex flex-col `}
    >
      {/* Sidebar Top Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between pl-2 pr-9">
          <motion.img src="./logo.svg" width={35} whileHover={{
            scale:1.2
          }}
          className="cursor-pointer"
          />
          <motion.div
            className="rounded-md px-1 py-1 translate-x-4 group"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.08,
              rotate: 1,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#FFFFFF",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <X
              className="cursor-pointer duration-300 text-white group-hover:text-[#1C1F2E]"
              height={25}
              width={25}
              onClick={() => setIsSidebarOpen(false)}
            />
          </motion.div>
        </div>
        <SidebarHeader />
      </div>
      <p className="text-sm text-gray-400 px-3 mb-2  mt-3">Chats</p>
      <ChatHistory />
      <SidebarFooter />
    </nav>
  );
};

export default Sidebar;
