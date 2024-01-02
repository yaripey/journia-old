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
  const [title, setTitle] = useState<string>(
    props.editingBlock ? props.editingBlock.title : ""
  );
  const [text, setText] = useState<string>("This one is not connected yet");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  const handleSave = () => {
    if (props.editingBlock === null) {
      props.createNoteBlock(title, text, () => console.log("Block created"));
    } else {
      if (props.editingBlock.type === "note") {
        props.saveNoteBlock(
          { ...props.editingBlock, title, text },
          () => console.log("Block updated"),
          (err) => console.log(err)
        );
      }
    }
  }

  return (
    <div className="w-full sm:w-[30rem] m-auto h-full">
      <form className="flex flex-col w-full h-full">
        <button onClick={handleSave} type="button">Save</button>
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
