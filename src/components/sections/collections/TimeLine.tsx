import { useContext } from "react"
import { BlocksContext } from "../../../contexts/blocks"
import CollectionContainer from "./CollectionContainer"

const TimeLine = () => {
  const { blocks, setBlocks } = useContext(BlocksContext)
  return (
    <CollectionContainer>
      {
        blocks.map(block => (
          <div>{block.id}</div>
        ))
      }
    </CollectionContainer>
  )
}

export default TimeLine
