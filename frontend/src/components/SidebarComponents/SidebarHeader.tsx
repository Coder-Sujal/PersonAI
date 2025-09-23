import {
  MessageCirclePlus,
  UserRoundMinus,
  UserRoundPlus,
  type LucideIcon,
} from "lucide-react";

import MajorButton from "../Buttons/MajorButton.tsx";
import AddPersonaForm, { type DialogProps } from "../Forms/AddPersonaForm.tsx";

interface ButtonProps {
  label: string;
  Icon: LucideIcon;
  DialogBox: React.FunctionComponent<DialogProps> | null;
}

const Buttons: ButtonProps[] = [
  {
    label: "New Chat",
    Icon: MessageCirclePlus,
    DialogBox: null,
  },
  {
    label: "Add Persona",
    Icon: UserRoundPlus,
    DialogBox: AddPersonaForm,
  },
  {
    label: "Remove Persona",
    Icon: UserRoundMinus,
    DialogBox: AddPersonaForm,
  },
];
// hover:bg-[#6B7EFC]/10 hover:text-[#6B7EFC]
const SidebarHeader = () => {
  return (
    <div className="w-full flex flex-col items-start my-2">
      {Buttons.map(({ label, Icon, DialogBox }, ind) => {
        return (
          <MajorButton
            key={ind}
            label={label}
            Icon={Icon}
            DialogBox={DialogBox}
          />
        );
      })}
    </div>
  );
};

export default SidebarHeader;
