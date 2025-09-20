import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface SidebarFooterProps{
  isExpanded : boolean,
}

const SidebarFooter = ({isExpanded} : SidebarFooterProps) => {
  return (
    <div className="p-3 pt-4 border-t border-gray-800 flex items-center gap-3">
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
    <div className={`flex flex-col ${!isExpanded && "md:hidden transition-all"}`}>
      <span className="text-sm font-medium text-white">John Doe</span>
      <span className="text-xs text-gray-400">john@example.com</span>
    </div>
  </div>
  )
}

export default SidebarFooter