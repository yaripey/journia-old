import { ChangeEvent, useState } from "react";
import { NoteBlock } from "../../../types";
import styled from "styled-components";
import { StyledForm, StyledTitleInput } from "./common";

const StyledTextArea = styled.textarea`
  height: 100%;

  resize: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

const NoteEditor = (
  props: {
    editingNote: NoteBlock,
    createNoteBlock: (
      title: string,
      text: string,
      onSaved: (newNoteBlock: NoteBlock) => void,
    ) => void,

    saveNoteBlock: (
      noteBlock: NoteBlock,
      onSaved: () => void,
      onError: (err: string) => void,
    ) => void,

    closeEditor: () => void,
  }
) => {
  const [title, setTitle] = useState<string>(props.editingNote.title);
  const [text, setText] = useState<string>(props.editingNote.text);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value);

  const handleSave = () => {
    if (props.editingNote.id === null) {
      props.createNoteBlock(
        title,
        text,
        () => console.log("Note created"),
      );
    } else {
      props.saveNoteBlock(
        { ...props.editingNote, title, text },
        () => console.log("Block updated"),
        (err) => console.log(err)
      );
    }
    props.closeEditor();
  };

  return (
    <StyledForm>
      <button type="button" onClick={handleSave}>Save</button>
      <StyledTitleInput
        type="title"
        placeholder="Note title..."
        value={title}
        onChange={handleTitleChange}
      />
      <StyledTextArea
        placeholder="Note text..."
        value={text}
        onChange={handleTextChange}
      />
    </StyledForm>
  );
}

export default NoteEditor;
