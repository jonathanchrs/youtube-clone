"use client";

import { useSearchParams } from "next/navigation";

const Watch = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <main className="w-full h-full p-4">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=true`}
        className="lg:w-3/4 sm:w-full aspect-video rounded-2xl"
      ></iframe>
    </main>
  );
};

export default Watch;
