export default function ChannelItem({
  thumbnail,
  channelName,
}: {
  thumbnail: string;
  channelName: string;
}) {
  return (
    <div className="flex gap-6 px-6 py-3 text-sm items-center hover:bg-custom-gray text-gray-600 hover:text-gray-950 hover:cursor-pointer">
      <img
        src={thumbnail}
        height="30px"
        width="30px"
        alt="channel"
        className="rounded-full"
      />
      {channelName}
    </div>
  );
}
