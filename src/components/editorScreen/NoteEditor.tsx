import React, { useState } from "react"
import { NoteBlock } from "../../types"
import StyledForm from "./StyledForm"



interface NoteEditorProps {
  note: NoteBlock,
}

const NoteEditor: React.FC<NoteEditorProps> = ({ note }: NoteEditorProps) => {
  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.text)

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  return <StyledForm>
    <input type="text" placeholder="New note" value={title} onChange={handleTitleChange} />
    <textarea value={text} onChange={handleTextChange} />
  </StyledForm>
}

export default NoteEditor
