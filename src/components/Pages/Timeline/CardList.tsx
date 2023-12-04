import { ContentBlock } from "../../../types";
import { Card } from "./Card";

const CardList = (
  props: {
    blocks: Array<ContentBlock>,
  }
) => {
  return (<ul>
    {props.blocks.map(block => <Card block={block} />)}
  </ul>)
}

export default CardList;
