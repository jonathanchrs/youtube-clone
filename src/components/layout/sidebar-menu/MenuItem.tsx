import type { ReactNode } from "react";

export default function MenuItem({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flex gap-6 px-8 py-4 text-sm items-center hover:bg-custom-gray text-gray-600 hover:text-gray-950 group hover:cursor-pointer">
      {icon}
      {text}
    </div>
  );
}
