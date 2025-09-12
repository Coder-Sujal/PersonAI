import { Plus, Trash2, UserPlus } from "lucide-react";
import { Button } from "../ui/button";

const SidebarHeader = () => {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      {/* New Chat (Primary CTA) */}
      <Button
        variant="ghost"
        className="w-full justify-start gap-2 text-white hover:bg-[#6B7EFC]/10 hover:text-[#6B7EFC] rounded-lg"
      >
        <Plus className="h-4 w-4" />
        <span className="truncate">New Chat</span>
      </Button>

      {/* Add Persona (Positive) */}
      <Button
        variant="ghost"
        className="w-full justify-start gap-2 text-white hover:bg-emerald-500/10 hover:text-emerald-400 rounded-lg"
      >
        <UserPlus className="h-4 w-4" />
        <span className="truncate">Add Persona</span>
      </Button>

      {/* Delete Persona (Destructive) */}
      <Button
        variant="ghost"
        className="w-full justify-start gap-2 text-white hover:bg-rose-500/10 hover:text-rose-400 rounded-lg"
      >
        <Trash2 className="h-4 w-4" />
        <span className="truncate">Delete Persona</span>
      </Button>
    </div>
  );
};

export default SidebarHeader;
