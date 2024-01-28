import React from "react"
import { TodoBlock } from "../../types"
import { makeDateReadable } from "../../utils"
import StyledBasicCard from "./BasicCard"

interface TodoCardProps {
  todo: TodoBlock
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }: TodoCardProps) => {
  const handleCheckClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked)
  }

  return <StyledBasicCard>
    <div>{makeDateReadable(todo.createdAt)}</div>
    <div>{todo.title}</div>
    <input type="checkbox" checked={todo.isDone} onChange={handleCheckClick} />
  </StyledBasicCard>
}

export default TodoCard
