import { ToolBarDesktop } from "../Common/ToolBar";
import { ContentBlock, PageName } from "../../types";
import HomePage from "../Pages/Home/HomePage";
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
    case "home":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <HomePage blocks={props.blocks} setBlocks={props.setBlocks} />
        </div>
      )

    case "editor":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <EditorPage />
        </div>
      )

    case "search":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <div>Hey its a search</div>
        </div>
      )
  }
}

export default DesktopLayout;
