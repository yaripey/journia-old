import { ContentBlock, PageName } from "../../../types";
import CardList from "./CardList"

const HomePage = (
  props: {
    blocks: Array<ContentBlock>,
    setCurrentPage: (page: PageName) => void,
    setEditingBlock: React.Dispatch<ContentBlock>,
  }
) => {
  const handleCardClick = (block: ContentBlock): void => {
    props.setEditingBlock(block);
    props.setCurrentPage("editor");
  }

  return (
    <div className="w-full sm:w-[30rem] m-auto h-full overflow-auto">
      <CardList blocks={props.blocks} cardOnClick={handleCardClick} />
    </div>
  )
}

export default HomePage;
