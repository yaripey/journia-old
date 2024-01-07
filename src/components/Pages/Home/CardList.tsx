import { ContentBlock, TodoBlock } from "../../../types";
import { Card } from "./Card";

const CardList = (
  props: {
    blocks: Array<ContentBlock>,
    openBlockInEditor: (block: ContentBlock) => void,
    updateTodo: (
      todo: TodoBlock,
      onDone: () => void,
      onError: (err: string) => void,
    ) => void,
    deleteBlock: (
      block: ContentBlock,
      onDone: () => void,
      onError: (err: string) => void,
    ) => void,
  }
) => {
  return (<ul className="w-full">
    {props.blocks.map(block =>
      <Card
        key={block.id}
        block={block}
        openBlockInEditor={props.openBlockInEditor}
        updateTodo={props.updateTodo}
        deleteBlock={props.deleteBlock}
      />)}
  </ul>)
}

export default CardList;
