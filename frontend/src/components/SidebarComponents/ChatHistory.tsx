import { MessageCircleX } from "lucide-react";
import { motion } from "motion/react";

interface ChatHistoryProps {
  isExpanded: boolean;
}

const ChatHistory = ({ isExpanded }: ChatHistoryProps) => {
  return (
    <div className={`flex-1 h-full overflow-y-auto ${!isExpanded && "md:hidden"}`}>
      <div className="flex flex-col gap-1 scroll-smooth">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.button
            key={i}
            className="group w-full min-w-0 flex justify-between text-gray-200 rounded-lg truncate poppins-regular px-3 gap-2 p-2 hover:cursor-pointer hover:text-white"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            variants={{
              hover: {
                backgroundColor: "#34394F",
              },
            }}
            onClick={() => console.log("on button click")}
          >
            {/* Chat title */}
            <span className="truncate text-left poppins-light text-sm tracking-wider">
              Chat {i + 1} with a really really long
            </span>

            {/* Delete button (icon only) */}
            <motion.span
              initial={{ scale: 0 }}
              variants={{
                hover: { scale: 1 }, // move + rotate icon
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              <MessageCircleX
                size={19}
                className=" text-gray-400 group-hover:opacity-100 hover:text-red-400 hover:cursor-pointer rotate-360"
                onClick={(e) => {
                  e.stopPropagation(); // prevents triggering parent button click
                  console.log(`Delete Chat ${i + 1}`);
                }}
              />
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
