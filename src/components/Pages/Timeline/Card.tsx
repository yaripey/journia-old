import { ContentBlock } from "../../../types"
import NoteCard from "./NoteCard";
import TodoCard from "./TodoCard";

export const Card = (
  props: {
    block: ContentBlock,
  }
) => {
  switch (props.block.type) {
    case "note":
      return <li><NoteCard note={props.block} /></li>;
    case "todo":
      return <li><TodoCard todo={props.block} /></li>
  }
}
