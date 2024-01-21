import { useEffect } from "react"
import "./main.css"
import useBlocksStore from "./store/blocksStore"
import testData from "./testData"

const App = () => {
  const blocks = useBlocksStore(state => state.blocks)
  const setBlocks = useBlocksStore(state => state.setBlocks)

  useEffect(() => {
    setBlocks(testData)
  }, [])

  return (
    <div>
      {blocks.map(block => <p>{block.id}</p>)}
    </div>
  )
}
export default App;
