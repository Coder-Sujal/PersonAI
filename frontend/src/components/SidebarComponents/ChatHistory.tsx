import { MessageCircleX } from "lucide-react";

const ChatHistory = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto">
      <div className="flex flex-col gap-1 scroll-smooth">
        {Array.from({ length: 30 }).map((_, i) => (
          <button
            key={i}
            className="group w-full min-w-0 flex justify-between text-gray-200 rounded-lg truncate poppins-regular px-3 gap-2 hover:bg-white hover:text-black p-2 hover:cursor-pointer"
            onClick={() => console.log("on button click")}
          >
            {/* Chat title */}
            <span className="truncate text-left poppins-light text-sm tracking-wider">
              Chat {i + 1} with a really really long
            </span>

            {/* Delete button (icon only) */}
            <MessageCircleX
              size={19}
              className="opacity-0 text-gray-400 group-hover:opacity-100 hover:text-red-400 hover:cursor-pointer rotate-360"
              onClick={(e) => {
                e.stopPropagation(); // prevents triggering parent button click
                console.log(`Delete Chat ${i + 1}`);
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
