import {  SwitcheHeader } from "./logo";
import { DashboardItems } from "./sidebar-item";
export const Sidebar = () => {
  return (
    <div className="h-full">
      <SwitcheHeader/>
      
      <DashboardItems/>
    </div>
  );
};
