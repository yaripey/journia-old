import { makeDateReadable } from "../../../utils";

import { ContentBlock, NoteBlock, TodoBlock } from "../../../types"

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
  },
) => {
  return (
    <div>
      <p><input type="checkbox" checked={props.todo.isDone} /> {props.todo.title}</p>
    </div>
  )
}

export const Card = (
  props: {
    block: ContentBlock,
    onClick: (block: ContentBlock) => void,
  }
) => {
  return (
    <li
      className="p-3 cursor-pointer hover:bg-gray-400"
      onClick={() => props.onClick(props.block)}
    >
      <p className="text-sm">{makeDateReadable(props.block.createdAt)}</p>
      {
        props.block.type === "note"
          ? <NoteCard note={props.block} />
          : <TodoCard todo={props.block} />
      }
    </li>
  )
}
