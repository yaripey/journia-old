import { makeDateReadable } from "../../../utils";

import { ContentBlock, NoteBlock, TodoBlock } from "../../../types";
import { ChangeEvent } from "react";

const NoteCard = (
  props: {
    note: NoteBlock,
  },
) => {
  return (
    <div>
      <p>{props.note.title}</p>
      <p>{props.note.text}</p>
    </div>
  )
}

const TodoCard = (
  props: {
    todo: TodoBlock,
    updateTodo: (
      todo: TodoBlock,
      onDone: () => void,
      onError: (err: string) => void,
    ) => void,
  },
) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Tick event procced")
    event.stopPropagation();

    props.updateTodo(
      { ...props.todo, isDone: !props.todo.isDone },
      () => console.log("Todo updated"),
      (err) => console.log(err)
    );
  }
  const randomOnClick = () => {
    console.log("random onclick procced");
  }

  return (
    <div>
      <p>
        <input
          type="checkbox"
          checked={props.todo.isDone}
          onChangeCapture={handleChange}
          onClick={randomOnClick}
        />
        {props.todo.title}
      </p>
    </div>
  )
}

export const Card = (
  props: {
    block: ContentBlock,
    onClick: (block: ContentBlock) => void,
    updateTodo: (
      todo: TodoBlock,
      onDone: () => void,
      onError: (err: string) => void,
    ) => void,
  }
) => {
  return (
    <li
      className="p-3 cursor-pointer hover:bg-gray-400"
      onClick={() => { console.log("li onclick"); props.onClick(props.block) }}
    >
      <p className="text-sm">{makeDateReadable(props.block.createdAt)}</p>
      {
        props.block.type === "note"
          ? <NoteCard note={props.block} />
          : <TodoCard todo={props.block} updateTodo={props.updateTodo} />
      }
    </li>
  )
}
