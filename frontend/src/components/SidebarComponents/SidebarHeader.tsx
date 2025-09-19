import { MessageCirclePlus, UserRoundMinus, UserRoundPlus, type LucideIcon } from "lucide-react";
import { Button } from "../ui/button";


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

const SidebarHeader = () => {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      {Buttons.map(({ label, Icon }, ind) => {
        return (
          <Button
            key={ind}
            variant={"ghost"}
            className="w-full flex justify-start gap-2.5 text-white hover:bg-[#6B7EFC]/10 hover:text-[#6B7EFC] rounded-lg"
          >
            {/* {TODO :- CHANGE THE SIZE OF THIS ICON} */}
            <Icon /> 
            <span className="truncate poppins-regular">{label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default SidebarHeader;
