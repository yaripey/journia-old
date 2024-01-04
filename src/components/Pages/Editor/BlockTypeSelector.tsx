import { ContentBlock } from "../../../types";

const BlockTypeSelector = (
  props: {
    setEditingBlock: (block: ContentBlock) => void,
  },
) => {

  const createNote = () => props.setEditingBlock({
    type: "note",
    id: null,
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    text: "",
    title: "",
  });

  const createTodo = () => props.setEditingBlock({
    type: "todo",
    id: null,
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    isDone: false,
    subTodos: [],
    title: "",
  });

  return (
    <ul>
      <li><button onClick={createNote}>Note</button></li>
      <li><button onClick={createTodo}>Todo</button></li>
    </ul>
  )
}

export default BlockTypeSelector;
