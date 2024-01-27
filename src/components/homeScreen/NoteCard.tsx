import React from "react"
import { NoteBlock } from "../../types"
import { makeDateReadable } from "../../utils"
import StyledBasicCard from "./BasicCard"

interface NoteCardProps {
  note: NoteBlock,
}

const NoteCard: React.FC<NoteCardProps> = ({ note }: NoteCardProps) => {
  return <StyledBasicCard>
    <div>{makeDateReadable(note.createdAt)}</div>
    <div>{note.title}</div>
    <div>{note.text}</div>
  </StyledBasicCard>
}

export default NoteCard
