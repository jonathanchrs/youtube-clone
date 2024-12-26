"use client";

import { useContext } from "react";
import BellIcon from "../icons/BellIcon";
import ListIcon from "../icons/ListIcon";
import MenuIcon from "../icons/MenuIcon";
import VideoIcon from "../icons/VideoIcon";
import YoutubeLogo from "../icons/YoutubeIcon";
import NavbarItem from "./NavbarItem";
import { SidebarContext, SidebarContextType } from "./Layout";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { toggleSidebar } = useContext(SidebarContext) as SidebarContextType;
  const { data: session, status } = useSession();

  return (
    <nav className="px-6 py-4 flex justify-between item sticky top-0 bg-white h-16">
      <div className="flex gap-4 items-center">
        <NavbarItem handleClick={toggleSidebar} icon={<MenuIcon />} />
        <Link href={"/"}>
          <YoutubeLogo />
        </Link>
      </div>
      <div className="flex justify-between gap-6 items-center">
        <div className="flex gap-5">
          <NavbarItem handleClick={() => {}} icon={<VideoIcon />} />
          <NavbarItem handleClick={() => {}} icon={<ListIcon />} />
          <NavbarItem handleClick={() => signOut()} icon={<BellIcon />} />
        </div>
        <img
          src={session?.user?.image ?? "/images/avatar.png"}
          alt="channel thumbnail"
          className="w-7 h-7 rounded-full"
          onClick={() => signIn("google")}
        />
      </div>
    </nav>
  );
}
