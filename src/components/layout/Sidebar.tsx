import ChannelList from "./sidebar-menu/ChannelListGroup";
import MoreFromYoutube from "./sidebar-menu/MoreFromYoutubeGroup";
import VideoGroup from "./sidebar-menu/VideoGroup";
import OtherGroup from "./sidebar-menu/OtherGroup";
import GeneralGroup from "./sidebar-menu/GeneralGroup";
import { useContext } from "react";
import { SidebarContext, SidebarContextType } from "./Layout";

export default function Sidebar() {
  const { isOpen } = useContext(SidebarContext) as SidebarContextType;

  return (
    <div
      className={`w-[250px] h-full overflow-y-auto scrollbar-hide scrollbar-hover  ${
        !isOpen && "hidden"
      }`}
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
