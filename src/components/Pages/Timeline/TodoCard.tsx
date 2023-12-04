import { TodoBlock } from "../../../types"

const TodoCard = (
  props: {
    todo: TodoBlock,
  }
) => {
  return <div>{props.todo.title}</div>
}

export default TodoCard;
