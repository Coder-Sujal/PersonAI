import SidebarHeader from "./SidebarComponents/SidebarHeader";
import ChatHistory from "./SidebarComponents/ChatHistory";
import SidebarFooter from "./SidebarComponents/SidebarFooter";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}) => {
  return (
    <div
      className={`h-screen max-w-[50%] ${
        isSidebarOpen ? "left-0" : "-left-[100%]"
      } bg-[#1C1F2E] fixed top-0 rounded-tr-md rounded-br-md shadow-[4px_0px_25px_0px_rgba(0,0,0,0.25)] z-10 px-2 py-7 transition-all ease-in-out duration-200 flex flex-col`}
    >
      {/* Sidebar Top Section */}
      <div className="flex flex-col gap-2">
        <img
          alt="close icon"
          src="./close.svg"
          className="cursor-pointer mb-5 hover:scale-50 transition-all duration-300 translate-x-4"
          height={20}
          width={20}
          onClick={() => setIsSidebarOpen(false)}
        />
        <SidebarHeader />
      </div>
      <p className="text-xs text-gray-400 px-3 uppercase mb-2  mt-3">Chats</p>
      <ChatHistory />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
