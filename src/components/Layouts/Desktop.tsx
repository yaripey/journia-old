import { useState } from "react";
import { iconNames } from "../Common/Icons";

import { ToolBarDesktop } from "../Common/ToolBar";

const DesktopLayout = () => {
  const [selectedNavButton, setSelectedNavButton] = useState(iconNames.home);

  const handleNavButtonClick = (buttonName: string): void => {
    setSelectedNavButton(buttonName);
  }

  return (
    <div className="h-full w-full flex">
      <ToolBarDesktop
        selectedIcon={selectedNavButton}
        buttonOnClick={handleNavButtonClick}
      />
      <div>Hello world</div>
    </div>
  )
}

export default DesktopLayout;
