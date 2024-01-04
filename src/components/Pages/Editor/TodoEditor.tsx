import { ChangeEvent, useState } from "react"
import { TodoBlock } from "../../../types"
import { StyledForm } from "./common";

const TodoEditor = (
  props: {
    editingTodo: TodoBlock,
    createTodoBlock: (
      title: string,
      isDone: boolean,
      onSaved: (newTodo: TodoBlock) => void,
    ) => void,

    saveTodoBlock: (
      todoBlock: TodoBlock,
      onSaved: () => void,
      onError: (err: string) => void,
    ) => void,

    closeEditor: () => void,
  }
) => {
  const [title, setTitle] = useState<string>(props.editingTodo.title);
  const [isDone, setIsDone] = useState<boolean>(props.editingTodo.isDone);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleIsDoneChange = (event: ChangeEvent<HTMLInputElement>) =>
    setIsDone(event.target.checked);

  const handleSave = () => {
    if (props.editingTodo.id === null) {
      props.createTodoBlock(
        title,
        isDone,
        () => console.log("Note created"),
      );
    } else {
      props.saveTodoBlock(
        { ...props.editingTodo, title, isDone },
        () => console.log("Block updated"),
        (err) => console.log(err)
      );
    }

    props.closeEditor();
  }

  return (
    <StyledForm>
      <button type="button" onClick={handleSave}>Save</button>
      <input type="checkbox" checked={isDone} onChange={handleIsDoneChange} />
      <input type="text" value={title} onChange={handleTitleChange} />
    </StyledForm>
  )
}

export default TodoEditor;
