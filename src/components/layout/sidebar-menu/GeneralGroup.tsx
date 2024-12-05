import FireIcon from "../../icons/FireIcon";
import HomeIcon from "../../icons/HomeIcon";
import SubscriptionIcon from "../../icons/SubscriptionIcon";
import MenuItem from "./MenuItem";

export default function GeneralGroup() {
  return (
    <div>
      <MenuItem
        icon={<HomeIcon className="group-hover:fill-red-600" size="22px" />}
        text="Home"
      />
      <MenuItem
        icon={<FireIcon className="group-hover:fill-red-600" size="22px" />}
        text="Trending"
      />
      <MenuItem
        icon={
          <SubscriptionIcon className="group-hover:fill-red-600" size="22px" />
        }
        text="Subscription"
      />
    </div>
  );
}
