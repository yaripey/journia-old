import "./main.css";

import testData from "./testData";

import { ContentBlock, NoteBlock, PageName, TodoBlock } from "./types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToolBar } from "./components/Common/ToolBar";
import HomePage from "./components/Pages/Home/HomePage";
import EditorPage from "./components/Pages/Editor/EditorPage";

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
      setBlocks(blocks.map(b => b.id === noteBlock.id ? noteBlock : b));
      onSaved();
    } else {
      onError("ERROR: Tried saving block with invalid ID.");
    }
  }

  const createTodoBlock = (
    title: string,
    isDone: boolean,
    onSaved: (newTodoBlock: TodoBlock) => void,
  ): void => {
    const newTodoBlock: TodoBlock = {
      id: uuidv4(),
      createdAt: Date.now(),
      lastEditedAt: Date.now(),
      title,
      isDone,
      type: "todo",
    }

    setBlocks([...blocks, newTodoBlock]);
    onSaved(newTodoBlock);
  }

  const saveTodoBlock = (
    todoBlock: TodoBlock,
    onSaved: () => void,
    onError: (err: string) => void,
  ): void => {
    const blockToUpdate = blocks.find(block => block.id === todoBlock.id);

    if (blockToUpdate) {
      setBlocks(blocks.map(b => b.id === todoBlock.id ? todoBlock : b));
      onSaved();
    } else {
      onError("ERROR: Tried saving block with invalid ID.");
    }
  }

  const resetEditingBlock = () => setEditingBlock(null);

  switch (currentPage) {
    case "home":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBar
            setCurrentPage={setCurrentPage}
            resetEditingBlock={resetEditingBlock}
          />
          <HomePage
            blocks={blocks}
            setCurrentPage={setCurrentPage}
            setEditingBlock={setEditingBlock}
            updateTodo={saveTodoBlock}
          />
        </div>
      )

    case "editor":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBar
            setCurrentPage={setCurrentPage}
            resetEditingBlock={resetEditingBlock}
          />
          <EditorPage
            editingBlock={editingBlock}
            resetEditingBlock={resetEditingBlock}
            setEditingBlock={setEditingBlock}

            createNoteBlock={createNoteBlock}
            saveNoteBlock={saveNoteBlock}

            createTodoBlock={createTodoBlock}
            saveTodoBlock={saveTodoBlock}

            setCurrentPage={setCurrentPage}
          />
        </div>
      )

    case "search":
      return (
        <div className="h-full w-full flex flex-row overflow-hidden">
          <ToolBar
            setCurrentPage={setCurrentPage}
            resetEditingBlock={resetEditingBlock}
          />
          <div>Hey its a search</div>
        </div>
      )
  }
}

export default App;
