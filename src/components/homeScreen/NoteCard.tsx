import React from "react"
import { NoteBlock } from "../../types"

interface NoteCardProps {
  note: NoteBlock,
}

const NoteCard: React.FC<NoteCardProps> = ({ note }: NoteCardProps) => {
  return <div>{note.id}</div>
}

export default NoteCard
