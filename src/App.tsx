import "./main.css";

import testData from "./testData";

import DesktopLayout from "./components/Layouts/Desktop";
import { ContentBlock, NoteBlock, PageName } from "./types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State, addNoteBlockAction, addNoteBlocksAction, updateNoteBlockAction } from "./reducers/mainReducer";

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageName>("home");
  const [editingBlock, setEditingBlock] = useState<ContentBlock | null>(null);

  const dispatch = useDispatch();
  const blocks = useSelector((state: State) => state.blocks);

  useEffect(() => {
    // Here should be initial data fetching
    if (blocks.length === 0) {
      dispatch(addNoteBlocksAction({ blocks: testData }));
    }
  }, [dispatch, blocks]);

  const createNoteBlock = (
    title: string,
    text: string,
    onSaved: (newNoteBlock: NoteBlock) => void,
    // onError: (erro: string) => void,
  ): void => {
    const newNoteBlock: NoteBlock = {
      id: uuidv4(),
      createdAt: Date.now(),
      lastEditedAt: Date.now(),
      title,
      text,
      type: "note",
    }

    dispatch(addNoteBlockAction({ block: newNoteBlock }));

    onSaved(newNoteBlock);
  }

  const updateNoteBlock = (
    noteBlock: NoteBlock,
    onSaved: () => void,
    onError: (err: string) => void,
  ): void => {
    const blockToUpdate = blocks.find(block => block.id === noteBlock.id);

    if (blockToUpdate) {
      dispatch(updateNoteBlockAction({ block: noteBlock }));
      onSaved();
    } else {
      onError("ERROR: Tried saving block with invalid ID.");
    }
  }

  return (
    <DesktopLayout
      blocks={blocks}

      currentPage={currentPage}
      setCurrentPage={setCurrentPage}

      editingBlock={editingBlock}
      setEditingBlock={setEditingBlock}

      createNoteBlock={createNoteBlock}
      updateNoteBlock={updateNoteBlock}
    />
  )
}

export default App;
