"use client";

import type { ReactNode } from "react";

export default function NavbarItem({
  icon,
  handleClick,
}: {
  icon: ReactNode;
  handleClick: () => void;
}) {
  return (
    <div
      className="hover:bg-custom-gray hover:rounded-full p-2 hover:cursor-pointer"
      onClick={handleClick}
    >
      {icon}
    </div>
  );
}
