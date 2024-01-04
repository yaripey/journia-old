import { ContentBlock, NoteBlock, PageName } from "../../../types"
import styled from "styled-components";
import BlockTypeSelector from "./BlockTypeSelector";
import NoteEditor from "./NoteEditor";

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
    setEditingBlock: (block: ContentBlock) => void,
    setCurrentPage: (pageName: PageName) => void,
  }
) => {
  if (props.editingBlock === null) return (
    <BlockTypeSelector setEditingBlock={props.setEditingBlock} />
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
