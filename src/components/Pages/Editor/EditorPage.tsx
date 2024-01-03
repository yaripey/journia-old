import { ChangeEvent, useState } from "react";
import { ContentBlock, NoteBlock, PageName } from "../../../types"
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const StyledTitleInput = styled.input`
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

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
    props.saveNoteBlock(
      { ...props.editingNote, title, text },
      () => console.log("Block updated"),
      (err) => console.log(err)
    );
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

const EditorPageContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: auto;
`;

const EditorPage = (
  props: {
    editingBlock: ContentBlock | null,
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

    resetEditingBlock: () => void,
    setCurrentPage: (pageName: PageName) => void,
  }
) => {
  if (props.editingBlock === null) return (
    <div>Error, no block chosen.</div>
  );

  const closeEditor = () => {
    props.resetEditingBlock();
    props.setCurrentPage("home");
  }

  switch (props.editingBlock.type) {
    case "note":
      return (
        <EditorPageContainer>
          <NoteEditor
            editingNote={props.editingBlock}
            saveNoteBlock={props.saveNoteBlock}
            createNoteBlock={props.createNoteBlock}
            closeEditor={closeEditor}
          />
        </EditorPageContainer>
      )

    case "todo":
      return <div>No todo editor for now</div>
  }
}

export default EditorPage;
