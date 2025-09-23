import { SidebarExpandedContext } from "@/Context.tsx";
import type { LucideIcon } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { useContext, useState } from "react";
import type { DialogProps } from "../Forms/AddPersonaForm.tsx";

interface MajorButtonProps {
  key: number;
  label: string;
  Icon: LucideIcon;
  DialogBox: React.FunctionComponent<DialogProps> | null;
}

const MajorButton = ({ key, label, Icon, DialogBox }: MajorButtonProps) => {
  const isExpanded = useContext(SidebarExpandedContext);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  }

  return (
    <>
      <motion.button
        key={key}
        className={`w-full flex items-center justify-start gap-3 text-white rounded-lg px-3 py-2 cursor-pointer group ${
          !isExpanded && "md:justify-center"
        }`}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        variants={{
          hover: {
            backgroundColor: "#34394F",
            color: "#FFFFFF",
          },
        }}
        onClick={handleOpenDialog}
      >
        <motion.span
          variants={{
            hover: { scale: 1.2 }, // move + rotate icon
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Icon size={isExpanded ? 18 : 20} />
        </motion.span>
        <motion.span
          className={`truncate poppins-regular ${
            isExpanded ? "md:inline" : "md:hidden"
          }`}
          variants={{
            hover: { x: 4 }, // shift text a bit on hover
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {label}
        </motion.span>
        {!isExpanded && (
          <AnimatePresence>
            <motion.span
              initial={{ scale: 0 }}
              variants={{
                hover: { scale: 1 }, // shift text a bit on hover
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hidden text-sm text-nowrap px-2 py-2 absolute translate-x-2 md:group-hover:block left-full text-[#1C1F2E] bg-white rounded-sm z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              {label}
            </motion.span>
          </AnimatePresence>
        )}
      </motion.button>
      {DialogBox && <DialogBox isOpen={isOpenDialog} onOpenChange={handleCloseDialog}/>}
    </>
  );
};

export default MajorButton;
