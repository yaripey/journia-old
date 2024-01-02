import "./main.css";

import testData from "./testData";

import DesktopLayout from "./components/Layouts/Desktop";
import { ContentBlock, NoteBlock, PageName } from "./types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [currentPage, setCurrentPage] = useState<PageName>("home");
  const [editingBlock, setEditingBlock] = useState<ContentBlock | null>(null);

  useEffect(() => {
    // Here should be initial data fetching
    if (blocks.length === 0) {
      setBlocks(testData);
    }
  }, [blocks]);

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

    setBlocks([...blocks, newNoteBlock]);
    onSaved(newNoteBlock);
  }

  const saveNoteBlock = (
    noteBlock: NoteBlock,
    onSaved: () => void,
    onError: (err: string) => void,
  ): void => {
    const blockToUpdate = blocks.find(block => block.id === noteBlock.id);

    if (blockToUpdate) {
      setBlocks(blocks.map(b => b.id === blockToUpdate.id ? blockToUpdate : b));
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
      saveNoteBlock={saveNoteBlock}
    />
  )
}

export default App;
