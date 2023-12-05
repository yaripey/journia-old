import { ToolBarDesktop } from "../Common/ToolBar";
import { ContentBlock } from "../../types";
import TimelinePage from "../Pages/Timeline/TimelinePage";

const DesktopLayout = (
  props: {
    blocks: Array<ContentBlock>,
    setBlocks: (blocks: Array<ContentBlock>) => void,
  }
) => {
  return (
    <div className="h-full w-full flex flex-row">
      <ToolBarDesktop />
      <TimelinePage blocks={props.blocks} setBlocks={props.setBlocks} />
    </div>
  )
}

export default DesktopLayout;
