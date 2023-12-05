import { useState } from "react";
import { iconNames } from "../Common/Icons";

import { ToolBarDesktop } from "../Common/ToolBar";
import { ContentBlock } from "../../types";
import TimelinePage from "../Pages/Timeline/TimelinePage";

const DesktopLayout = (
  props: {
    blocks: Array<ContentBlock>,
    setBlocks: (blocks: Array<ContentBlock>) => void,
  }
) => {
  const [selectedNavButton, setSelectedNavButton] = useState(iconNames.home);

  const handleNavButtonClick = (buttonName: string): void => {
    setSelectedNavButton(buttonName);
  }

  return (
    <div className="h-full w-full flex flex-row">
      <ToolBarDesktop
        selectedIcon={selectedNavButton}
        buttonOnClick={handleNavButtonClick}
      />
      <TimelinePage blocks={props.blocks} setBlocks={props.setBlocks} />
    </div>
  )
}

export default DesktopLayout;
