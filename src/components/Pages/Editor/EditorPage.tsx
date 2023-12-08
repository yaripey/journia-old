import { ChangeEvent, useState } from "react";

const EditorPage = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
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
