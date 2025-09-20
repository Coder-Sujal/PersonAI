import SidebarHeader from "./SidebarComponents/SidebarHeader";
import ChatHistory from "./SidebarComponents/ChatHistory";
import SidebarFooter from "./SidebarComponents/SidebarFooter";

import { PanelLeftClose, PanelRightClose, X } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: 80 }}
        animate={{ width: isExpanded || isSidebarOpen ? 250 : 80 }}
        transition={{ type: "spring", duration:0}}
        className={`h-screen max-w-[250px] 
        ${isSidebarOpen ? "left-0 opacity-100" : "-left-100 opacity-0"}
        bg-[#1C1F2E] fixed top-0 rounded-tr-md rounded-br-md shadow-[4px_0px_25px_0px_rgba(0,0,0,0.25)] z-10 px-2 py-7 transition-all ease-in-out duration-200 flex flex-col 
        md:left-0 md:opacity-100 md:z-0 md:relative
        justify-between`}
      >
        {/* Sidebar Top Section */}
        <div className="flex flex-col gap-3 transition-all">
          <div className="flex items-center justify-between pl-2 pr-9 md:pr-3">
            <motion.img
              src="./logo.svg"
              width={35}
              whileHover={{
                scale: 1.2,
              }}
              className={`cursor-pointer ${
                isExpanded ? "md:inline" : "md:hidden"
              }`}
            />
            <motion.div
              className="rounded-md px-1 py-1 translate-x-4 group md:hidden"
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
            {isExpanded ? (
              <motion.div
                className={`rounded-md px-1 py-1 group hidden md:inline`}
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
                <PanelLeftClose
                  className="cursor-pointer duration-300 text-white group-hover:text-[#1C1F2E]"
                  height={25}
                  width={25}
                  onClick={() => setIsExpanded(false)}
                />
              </motion.div>
            ) : (
              <motion.div
                className={`rounded-md translate-x-1 p-1 group hidden md:inline`}
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
                <PanelRightClose
                  className="cursor-pointer duration-300 text-white group-hover:text-[#1C1F2E]"
                  height={25}
                  width={25}
                  onClick={() => setIsExpanded(true)}
                />
              </motion.div>
            )}
          </div>
          <SidebarHeader isExpanded={isExpanded} />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`text-sm text-gray-400 px-3 mb-2 mt-3 ${
            !isExpanded && "md:hidden"
          }`}
        >
          Chats
        </motion.p>
        <ChatHistory isExpanded={isExpanded} />
        <SidebarFooter isExpanded={isExpanded} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
