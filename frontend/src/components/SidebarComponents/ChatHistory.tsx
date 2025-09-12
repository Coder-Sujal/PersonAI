import { Button } from "../ui/button";
import { X } from "lucide-react";

const ChatHistory = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto">
      <div className="flex flex-col gap-1 scroll-smooth">
        {Array.from({ length: 30 }).map((_, i) => (
          <Button
            key={i}
            variant="ghost"
            className="w-full min-w-0 justify-between text-gray-200 hover:text-[#6B7EFC] hover:bg-[#6B7EFC]/10 rounded-lg truncate group poppins-light"
          >
            {/* Chat title */}
            <span className="truncate text-left .poppins-light text-xs">
              Chat {i + 1} with a really really long
            </span>

            {/* Delete button (icon only) */}
            <X
              className="h-4 w-4 text-gray-400 hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation(); // prevents triggering parent button click
                console.log(`Delete Chat ${i + 1}`);
              }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
