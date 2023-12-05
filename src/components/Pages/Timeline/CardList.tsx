import { ContentBlock } from "../../../types";
import { Card } from "./Card";

const CardList = (
  props: {
    blocks: Array<ContentBlock>,
  }
) => {
  return (<ul className="bg-yellow-200 w-2/3">
    {props.blocks.map(block => <Card block={block} />)}
  </ul>)
}

export default CardList;
