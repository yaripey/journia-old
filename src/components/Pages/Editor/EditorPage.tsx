import { ChangeEvent, useEffect, useState } from "react";
import { ContentBlock, NoteBlock } from "../../../types";

const EditorPage = (
  props: {
    editingBlock: ContentBlock | null,
    setEditingBlock: (block: ContentBlock) => void,
    createNoteBlock: (
      title: string,
      text: string,
      onSaved: (newNoteBlock: NoteBlock) => void,
      // onError: (erro: string) => void,
    ) => void,

    saveNoteBlock: (
      noteBlock: NoteBlock,
      onSaved: () => void,
      onError: (err: string) => void,
    ) => void,
  }
) => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(
    props.editingBlock ? props.editingBlock.title : ""
  );
  const [text, setText] = useState<string>("This one is not connected yet");

  useEffect(() => {
    let saveTimer: number;

    if (!isSaving) {
      saveTimer = setTimeout(() => {
        setIsSaving(true);
        saveInput();
      }, 3000);
    }

    return () => {
      clearTimeout(saveTimer);
    }
  }, [title, text, isSaving]);

  const saveInput = () => {
    if (props.editingBlock) {
      if (props.editingBlock.type === "note") {
        props.saveNoteBlock(
          { ...props.editingBlock, title, text },
          () => { setIsSaving(false) },
          (err: string) => { console.log(err); setIsSaving(false) }
        )
      }
    } else {
      props.createNoteBlock(
        title,
        text,
        (newBlock) => { console.log(newBlock); setIsSaving(false) },
        // (err) => {console.log(err); setIsSaving(false)}
      )
    }
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setIsSaving(false);
  }

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setIsSaving(false);
  }

  return (
    <div className="w-full sm:w-[30rem] m-auto h-full">
      <form className="flex flex-col w-full h-full">
        <input
          type="title"
          className="placeholder:test focus:outline-none text-lg"
          placeholder="Note title..."
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="border-none resize-none h-full focus:outline-none"
          placeholder="Note text..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </form>
    </div>
  )
}

export default EditorPage;
