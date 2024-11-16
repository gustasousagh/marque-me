import { Navbar } from "@/features/layout/navbar/navbar";
import { Sidebar } from "@/features/layout/components/sidebar";
import type React from "react";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  
  return (
    <div className="h-full">
      <header className="h-[60px] md:pl-80 fixed inset-y-0 w-full z-50">
        <Navbar/>
      </header>
      <aside className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <Sidebar/>
      </aside>
      <main className="md:pl-80 pt-[60px] h-full lg:m-3 m-2">
        {children}
      </main>
    </div>
  )
}
export default DashboardLayout;