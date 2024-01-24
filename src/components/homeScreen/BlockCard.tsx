import { ContentBlock } from "../../types"
import NoteCard from "./NoteCard"

interface BlockCardProps {
  block: ContentBlock
}

const BlockCard = ({ block }: BlockCardProps) => {
  switch (block.type) {
    case "note":
      return <NoteCard note={block} />

    default:
      return null
  }
}

export default BlockCard
