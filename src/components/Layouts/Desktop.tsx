import { ToolBarDesktop } from "../Common/ToolBar";
import { ContentBlock, NoteBlock, PageName } from "../../types";
import HomePage from "../Pages/Home/HomePage";
import EditorPage from "../Pages/Editor/EditorPage";

const DesktopLayout = (
  props: {
    blocks: Array<ContentBlock>,

    createNoteBlock: (
      title: string,
      text: string,
      onSaved: (newNoteBlock: NoteBlock) => void,
      // onError: (erro: string) => void,
    ) => void,

    saveNoteBlock: (
      noteBlock: NoteBlock,
      onSaved: () => void,
      onError: (err: string) => void,
    ) => void,

    currentPage: PageName,
    setCurrentPage: React.Dispatch<PageName>,

    editingBlock: ContentBlock | null,
    setEditingBlock: React.Dispatch<ContentBlock>,
  }
) => {
  switch (props.currentPage) {
    case "home":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <HomePage
            blocks={props.blocks}
            setCurrentPage={props.setCurrentPage}
            setEditingBlock={props.setEditingBlock}
          />
        </div>
      )

    case "editor":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBarDesktop setCurrentPage={props.setCurrentPage} />
          <EditorPage
            editingBlock={props.editingBlock}
            setEditingBlock={props.setEditingBlock}
            createNoteBlock={props.createNoteBlock}
            saveNoteBlock={props.saveNoteBlock}
          />
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
