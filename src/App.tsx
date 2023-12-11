import "./main.css";

import testData from "./testData";

import DesktopLayout from "./components/Layouts/Desktop";
import { ContentBlock, NoteBlock, PageName } from "./types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { MainState } from "./reducers/mainReducer";
import { addNoteBlockAction, addNoteBlocksAction, updateNoteBlockAction } from "./reducers/blocksReducer";
import { changePageAction } from "./reducers/pageReducer";

const App = () => {
  const [editingBlock, setEditingBlock] = useState<ContentBlock | null>(null);

  const dispatch = useDispatch();
  const blocks = useSelector((state: MainState) => state.blocks);
  const currentPage = useSelector((state: MainState) => state.currentPage);

  useEffect(() => {
    // Here should be initial data fetching
    if (blocks.length === 0) {
      dispatch(addNoteBlocksAction(testData));
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

    dispatch(addNoteBlockAction(newNoteBlock));

    onSaved(newNoteBlock);
  }

  const updateNoteBlock = (
    noteBlock: NoteBlock,
    onSaved: () => void,
    onError: (err: string) => void,
  ): void => {
    const blockToUpdate = blocks.find(block => block.id === noteBlock.id);

    if (blockToUpdate) {
      dispatch(updateNoteBlockAction(noteBlock));
      onSaved();
    } else {
      onError("ERROR: Tried saving block with invalid ID.");
    }
  }

  const setCurrentPage = (newPage: PageName): void => {
    dispatch(changePageAction(newPage));
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
