import { useContext } from "react";
import BellIcon from "../icons/BellIcon";
import ListIcon from "../icons/ListIcon";
import MenuIcon from "../icons/MenuIcon";
import VideoIcon from "../icons/VideoIcon";
import YoutubeLogo from "../icons/YoutubeIcon";
import NavbarItem from "./NavbarItem";
import { SidebarContext, SidebarContextType } from "./Layout";
import Link from "next/link";

export default function Navbar() {
  const { toggleSidebar } = useContext(SidebarContext) as SidebarContextType;
  return (
    <nav className="px-6 py-4 flex justify-between item sticky top-0 bg-white h-16">
      <Link href={"/"}>
        <div className="flex gap-4 items-center">
          <NavbarItem handleClick={toggleSidebar} icon={<MenuIcon />} />
          <YoutubeLogo />
        </div>
      </Link>
      <div className="flex justify-between gap-6 items-center">
        <div className="flex gap-5">
          <NavbarItem handleClick={() => {}} icon={<VideoIcon />} />
          <NavbarItem handleClick={() => {}} icon={<ListIcon />} />
          <NavbarItem handleClick={() => {}} icon={<BellIcon />} />
        </div>
        <img
          src="https://yt3.ggpht.com/ytc/AIdro_n1Ribd7LwdP_qKtqWL3ZDfIgv9M1d6g78VwpHGXVR2Ir4=s88-c-k-c0x00ffffff-no-rj"
          alt="channel thumbnail"
          className="w-7 h-7 rounded-full"
        />
      </div>
    </nav>
  );
}
