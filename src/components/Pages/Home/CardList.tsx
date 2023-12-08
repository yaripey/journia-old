import { ContentBlock } from "../../../types";
import { Card } from "./Card";

const CardList = (
  props: {
    blocks: Array<ContentBlock>,
    cardOnClick: (block: ContentBlock) => void,
  }
) => {
  return (<ul className="w-full">
    {props.blocks.map(block => <Card block={block} onClick={props.cardOnClick} />)}
  </ul>)
}

export default CardList;
