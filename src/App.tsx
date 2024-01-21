import { useEffect } from "react"
import "./main.css"
import useBlocksStore from "./store/blocksStore"
import testData from "./testData"
import HomeScreen from "./screens/HomeScreen"

const App = () => {
  const blocks = useBlocksStore(state => state.blocks)
  const setBlocks = useBlocksStore(state => state.setBlocks)

  useEffect(() => {
    setBlocks(testData)
  }, [])

  return (
    <HomeScreen blocks={blocks} />
  )
}
export default App
