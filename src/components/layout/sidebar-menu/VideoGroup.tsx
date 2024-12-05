import HistoryIcon from "../../icons/HistoryIcon";
import LibraryIcon from "../../icons/LibraryIcon";
import LikeIcon from "../../icons/LikeIcon";
import WatchLaterIcon from "../../icons/WatchLaterIcon";
import YourVideosIcon from "../../icons/YourVideosIcon";
import MenuItem from "./MenuItem";

export default function VideoGroup() {
  return (
    <div>
      <MenuItem
        icon={<LibraryIcon className="group-hover:fill-red-600" size="22px" />}
        text="Library"
      />
      <MenuItem
        icon={<HistoryIcon className="group-hover:fill-red-600" size="22px" />}
        text="History"
      />
      <MenuItem
        icon={
          <YourVideosIcon className="group-hover:fill-red-600" size="22px" />
        }
        text="Your videos"
      />
      <MenuItem
        icon={
          <WatchLaterIcon className="group-hover:fill-red-600" size="22px" />
        }
        text="Watch later"
      />
      <MenuItem
        icon={<LikeIcon className="group-hover:fill-red-600" size="22px" />}
        text="Liked videos"
      />
    </div>
  );
}
