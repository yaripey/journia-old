import { useContext } from "react"
import { BlocksContext } from "../../../contexts/blocks"
import CollectionContainer from "./CollectionContainer"
import CollectionCard from "../../CollectionCard"

const TimeLine = () => {
  const { blocks, setBlocks } = useContext(BlocksContext)
  return (
    <CollectionContainer>
      {
        blocks.map(block => (
          <CollectionCard
            key={block.id}
            block={block}
          />
        ))
      }
    </CollectionContainer>
  )
}

export default TimeLine
