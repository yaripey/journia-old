import { useState } from "react";
import { iconNames } from "../Common/Icons";

import { ToolBarDesktop } from "../Common/ToolBar";
import { ContentBlock } from "../../types";
import BlockList from "../Pages/Timeline/CardList";

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
      <BlockList blocks={props.blocks} />
    </div>
  )
}

export default DesktopLayout;
