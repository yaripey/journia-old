import { ContentBlock, PageName, TodoBlock } from "../../../types";
import CardList from "./CardList"

const HomePage = (
  props: {
    blocks: Array<ContentBlock>,
    setCurrentPage: (page: PageName) => void,
    setEditingBlock: (block: ContentBlock) => void,
    updateTodo: (
      todo: TodoBlock,
      onDone: () => void,
      onError: (err: string) => void,
    ) => void,
  }
) => {
  const handleCardClick = (block: ContentBlock): void => {
    props.setEditingBlock(block);
    props.setCurrentPage("editor");
  }

  return (
    <div className="w-full sm:w-[30rem] m-auto h-full overflow-auto">
      <CardList
        blocks={props.blocks}
        cardOnClick={handleCardClick}
        updateTodo={props.updateTodo}
      />
    </div>
  )
}

export default HomePage;
