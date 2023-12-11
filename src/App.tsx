import "./main.css";

import testData from "./testData";

import DesktopLayout from "./components/Layouts/Desktop";
import { ContentBlock, NoteBlock, PageName } from "./types";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { MainState } from "./reducers/mainReducer";
import { addNoteBlock, addNoteBlocks, updateNoteBlock } from "./reducers/blocksReducer";
import { changePage } from "./reducers/pageReducer";
import { selectEditingBlock } from "./reducers/editorReducer";

const App = () => {
  const dispatch = useDispatch();
  const blocks = useSelector((state: MainState) => state.blocks);
  const currentPage = useSelector((state: MainState) => state.currentPage);
  const editingBlock = useSelector((state: MainState) => state.editingBlock);

  useEffect(() => {
    // Here should be initial data fetching
    if (blocks.length === 0) {
      dispatch(addNoteBlocks(testData));
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

    dispatch(addNoteBlock(newNoteBlock));

    onSaved(newNoteBlock);
  }

  const saveNoteBlock = (
    noteBlock: NoteBlock,
    onSaved: () => void,
    onError: (err: string) => void,
  ): void => {
    const blockToUpdate = blocks.find(block => block.id === noteBlock.id);

    if (blockToUpdate) {
      dispatch(updateNoteBlock(noteBlock));
      onSaved();
    } else {
      onError("ERROR: Tried saving block with invalid ID.");
    }
  }

  const setCurrentPage = (newPage: PageName): void => {
    dispatch(changePage(newPage));
  }

  const setEditingBlock = (selectedBlock: ContentBlock): void => {
    dispatch(selectEditingBlock(selectedBlock));
  }

  return (
    <DesktopLayout
      blocks={blocks}

      currentPage={currentPage}
      setCurrentPage={setCurrentPage}

      editingBlock={editingBlock}
      setEditingBlock={setEditingBlock}

      createNoteBlock={createNoteBlock}
      saveNoteBlock={saveNoteBlock}
    />
  )
}

export default App;
