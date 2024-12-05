import GamingIcon from "../../icons/GamingIcon";
import LiveIcon from "../../icons/LiveIcon";
import YtPremiumIcon from "../../icons/YtPremiumIcon";
import MenuItem from "./MenuItem";

export default function MoreFromYoutube() {
  return (
    <div>
      <h2 className="text-gray-500 font-medium px-6 py-4 text-sm">
        MORE FROM YOUTUBE
      </h2>
      <MenuItem
        icon={<GamingIcon className="group-hover:fill-red-600" size="22px" />}
        text="Gaming"
      />
      <MenuItem
        icon={
          <YtPremiumIcon className="group-hover:fill-red-600" size="22px" />
        }
        text="YouTube Premium"
      />
      <MenuItem
        icon={<LiveIcon className="group-hover:fill-red-600" size="22px" />}
        text="Live"
      />
    </div>
  );
}
