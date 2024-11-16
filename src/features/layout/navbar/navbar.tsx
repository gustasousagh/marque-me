import { MobileSidebar } from "../components/mobile-sidebar"
import { ThemeToggle } from "../../../components/theme-toggle"
import { UserButton } from "./user-button"

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center md:justify-end justify-between bg-muted/40 shadow-sm">
      <MobileSidebar/>
      <div className="flex flex-row items-center gap-x-2">
      <UserButton/>
      <ThemeToggle/>
      </div>
      
    </div>
  )
}