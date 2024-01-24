import { NoteBlock } from "../../types"

interface NoteCardProps {
  note: NoteBlock,
}

const NoteCard = ({ note }: NoteCardProps) => {
  return <div>{note.id}</div>
}

export default NoteCard
