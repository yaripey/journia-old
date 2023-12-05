import { ContentBlock } from "../../../types";
import CardList from "./CardList"

const TimelinePage = (
  props: {
    blocks: Array<ContentBlock>,
    setBlocks: (blocks: Array<ContentBlock>) => void,
  }
) => {
  return (
    <div className="w-full sm:w-[30rem] m-auto h-full">
      <CardList blocks={props.blocks} />
    </div>
  )
}

export default TimelinePage;
