import useEditorStore from "../../store/editorStore"
import { ContentBlockType } from "../../types"
import NoteEditor from "./NoteEditor"
import TodoEditor from "./TodoEditor"

const Editor: React.FC = () => {
  const editingBlock = useEditorStore(store => store.editingBlock)

  if (editingBlock === null) return <div>There is no block to edit.</div>

  switch (editingBlock.type) {
    case ContentBlockType.note:
      return <NoteEditor note={editingBlock} />
    case ContentBlockType.todo:
      return <TodoEditor todo={editingBlock} />
    default:
      return <div>This type of block isn't implemented yet.</div>
  }
}

export default Editor
