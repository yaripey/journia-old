import { NoteBlock } from "../../types"
import StyledForm from "./StyledForm"
import EditorTopBar from "./EditorTopBar"
import useEditorStore from "../../store/editorStore"

const NoteEditor: React.FC = () => {
  const note: NoteBlock = useEditorStore(store => store.editingBlock) as NoteBlock
  const setNote = useEditorStore(store => store.setEditingBlock)

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote({
      ...note,
      title: event.target.value
    })
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote({
      ...note,
      text: event.target.value
    })
  }

  return <StyledForm>
    <EditorTopBar />
    <input type="text" placeholder="New note" value={note.title} onChange={handleTitleChange} />
    <textarea value={note.text} onChange={handleTextChange} />
  </StyledForm>
}

export default NoteEditor
