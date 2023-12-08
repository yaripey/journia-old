import "./main.css";

import DesktopLayout from "./components/Layouts/Desktop";
import { ContentBlock, NoteBlock, PageName } from "./types";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const testData: Array<ContentBlock> = [
    {
      id: "1",
      title: "Test title",
      text: "Test note",
      createdAt: Date.now(),
      lastEditedAt: Date.now(),
      type: "note",
    },
    {
      id: "2",
      title: "Test title",
      text: "Another Test Note",
      createdAt: Date.now(),
      lastEditedAt: Date.now(),
      type: "note",
    },
    {
      id: "3",
      type: "todo",
      title: "This is a super todo",
      subTodos: [
        {
          text: "First subtodo",
          isDone: false,
        },
        {
          text: "Another subtodo",
          isDone: true,
        },
      ],
      isDone: false,
      createdAt: Date.now(),
      lastEditedAt: Date.now(),
    },
    {
      id: "4",
      title: "Test title",
      text: "The bestest note out there",
      createdAt: Date.now(),
      lastEditedAt: Date.now(),
      type: "note",
    },
  ];

  const [blocks, setBlocks] = useState(testData);
  const [currentPage, setCurrentPage] = useState<PageName>("home");
  const [editingBlock, setEditingBlock] = useState<ContentBlock | null>(null);

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

  const updateNoteBlock = (
    noteBlock: NoteBlock,
    onSaved: () => void,
    onError: (err: string) => void,
  ): void => {
    const blockToUpdate = blocks.find(block => block.id === noteBlock.id);

    if (blockToUpdate) {
      setBlocks(
        blocks.map(block => block.id === noteBlock.id ? noteBlock : block)
      );
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
