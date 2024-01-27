import { TodoBlock } from "../../types"
import { makeDateReadable } from "../../utils"
import StyledBasicCard from "./BasicCard"

interface TodoCardProps {
  todo: TodoBlock
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }: TodoCardProps) => {
  return <StyledBasicCard>
    <div>{makeDateReadable(todo.createdAt)}</div>
    <div>{todo.title}</div>
    <input type="checkbox" checked={todo.isDone} />
  </StyledBasicCard>
}

export default TodoCard
