import FeedbackIcon from "../../icons/FeedbackIcon";
import FlagIcon from "../../icons/FlagIcon";
import HelpIcon from "../../icons/HelpIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import MenuItem from "./MenuItem";

export default function OtherGroup() {
  return (
    <div>
      <MenuItem
        icon={<SettingsIcon className="group-hover:fill-red-600" size="22px" />}
        text="Settings"
      />
      <MenuItem
        icon={<FlagIcon className="group-hover:fill-red-600" size="22px" />}
        text="Report history"
      />
      <MenuItem
        icon={<HelpIcon className="group-hover:fill-red-600" size="22px" />}
        text="Help"
      />
      <MenuItem
        icon={<FeedbackIcon className="group-hover:fill-red-600" size="22px" />}
        text="Send feedback"
      />
    </div>
  );
}
