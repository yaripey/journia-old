import { ToolBarDesktop } from "../Common/ToolBar";
import { ContentBlock, PageName } from "../../types";
import TimelinePage from "../Pages/Timeline/TimelinePage";
import EditorPage from "../Pages/Editor/EditorPage";

const DesktopLayout = (
  props: {
    blocks: Array<ContentBlock>,
    setBlocks: (blocks: Array<ContentBlock>) => void,
    currentPage: PageName,
    setCurrentPage: React.Dispatch<PageName>,
  }
) => {
  switch (props.currentPage) {
    case "timeline":
      return (
        <div className="h-full w-full flex flex-row">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <TimelinePage blocks={props.blocks} setBlocks={props.setBlocks} />
        </div>
      )

    case "editor":
      return (
        <div className="h-full w-full flex flex-row">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <EditorPage />
        </div>
      )

    case "search":
      return (
        <div className="h-full w-full flex flex-row">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <div>Hey its a search</div>
        </div>
      )
  }
}

export default DesktopLayout;
