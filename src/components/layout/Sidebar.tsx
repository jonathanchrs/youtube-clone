"use client";

import ChannelList from "./sidebar-menu/ChannelListGroup";
import MoreFromYoutube from "./sidebar-menu/MoreFromYoutubeGroup";
import VideoGroup from "./sidebar-menu/VideoGroup";
import OtherGroup from "./sidebar-menu/OtherGroup";
import GeneralGroup from "./sidebar-menu/GeneralGroup";
import { useContext, useEffect } from "react";
import { SidebarContext, SidebarContextType } from "./Layout";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { isOpen, setIsOpen } = useContext(
    SidebarContext
  ) as SidebarContextType;
  const pathname = usePathname();
  const isHome = pathname == "/";

  useEffect(() => {
    if (!isHome) setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className={`min-w-[250px] h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide scrollbar-hover bg-white ${
        !isOpen && "hidden"
      } ${!isHome && "absolute"}`}
    >
      <GeneralGroup />
      <hr />
      <VideoGroup />
      <hr />
      <ChannelList />
      <hr />
      <MoreFromYoutube />
      <hr />
      <OtherGroup />
      <hr />
      <h2 className="text-gray-400 font-light px-6 py-4 text-sm">
        2024 Google LLC
      </h2>
    </div>
  );
}
