import {
  MessageCirclePlus,
  UserRoundMinus,
  UserRoundPlus,
  type LucideIcon,
} from "lucide-react";

import { motion } from "motion/react";

interface ButtonProps {
  label: string;
  Icon: LucideIcon;
}

const Buttons: ButtonProps[] = [
  {
    label: "New Chat",
    Icon: MessageCirclePlus,
  },
  {
    label: "Add Persona",
    Icon: UserRoundPlus,
  },
  {
    label: "Remove Persona",
    Icon: UserRoundMinus,
  },
];
// hover:bg-[#6B7EFC]/10 hover:text-[#6B7EFC]
const SidebarHeader = () => {
  return (
    <div className="w-full flex flex-col items-start my-2">
      {Buttons.map(({ label, Icon }, ind) => {
        return (
          <motion.button
            key={ind}
            className="w-full flex items-center justify-start gap-3 text-white rounded-lg px-3 py-2 cursor-pointer"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            variants={{
              hover: {
                backgroundColor: "#34394F",
                color: "#FFFFFF",
              },
            }}
          >
            {/* {TODO :- CHANGE THE SIZE OF THIS ICON} */}
            <motion.span
              variants={{
                hover: { scale: 1.2 }, // move + rotate icon
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Icon size={18} />
            </motion.span>
            <motion.span
              className="truncate poppins-regular"
              variants={{
                hover: { x: 4 }, // shift text a bit on hover
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {label}
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default SidebarHeader;
