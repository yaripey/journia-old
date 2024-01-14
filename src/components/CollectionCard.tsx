import { ContentBlock } from "../types"
import NoteCard from "./collections/NoteCard"

interface CollectionCardProps {
  block: ContentBlock
}

const CollectionCard = ({ block }: CollectionCardProps) => {
  switch (block.type) {
    case "note": {
      return (
        <NoteCard note={block} />
      )
    }
    case "todo": {
      return (
        <div>Not done yet</div>
      )
    }
  }
}

export default CollectionCard
