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
    deleteBlock: (
      block: ContentBlock,
      onDone: () => void,
      onError: (err: string) => void,
    ) => void,
  }
) => {
  const openBlockInEditor = (block: ContentBlock): void => {
    props.setEditingBlock(block);
    props.setCurrentPage("editor");
  }

  return (
    <div className="w-full sm:w-[30rem] m-auto h-full overflow-auto">
      <CardList
        blocks={props.blocks}
        openBlockInEditor={openBlockInEditor}
        updateTodo={props.updateTodo}
        deleteBlock={props.deleteBlock}
      />
    </div>
  )
}

export default HomePage;
