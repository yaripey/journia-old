import React from "react"
import { ContentBlock, ContentBlockType } from "../../types"
import NoteCard from "./NoteCard"
import TodoCard from "./TodoCard"

interface BlockCardProps {
  block: ContentBlock
}

const BlockCard: React.FC<BlockCardProps> = ({ block }: BlockCardProps) => {
  switch (block.type) {
    case ContentBlockType.note:
      return <NoteCard note={block} />

    case ContentBlockType.todo:
      return <TodoCard todo={block} />

    default:
      return <div>This block type is not yet supported.</div>
  }
}

export default BlockCard
