import { NoteBlock } from "../../../types";

const NoteCard = (
  props: {
    note: NoteBlock,
  }
) => {
  return <div>{props.note.title}</div>
}

export default NoteCard;
