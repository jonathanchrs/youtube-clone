"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export type SidebarContextType = {
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export const SidebarContext = createContext<SidebarContextType | null>(null);

const Layout = ({ children }: { children: ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
    setIsAnimating(false);
  };
  return (
    <SidebarContext.Provider
      value={{ isAnimating, setIsAnimating, isOpen, setIsOpen, toggleSidebar }}
    >
      <main>
        <Navbar />
        <div className="flex h-[calc(100vh-4rem)] scrollbar-hide scrollbar-hover">
          <Sidebar />
          {children}
        </div>
      </main>
    </SidebarContext.Provider>
  );
};

export default Layout;
