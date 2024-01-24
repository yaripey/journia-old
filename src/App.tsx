import React, { useEffect } from "react"
import "./main.css"
import useBlocksStore from "./store/blocksStore"
import testData from "./testData"
import HomeScreen from "./screens/HomeScreen"
import useScreenStore from "./store/screenStore"
import NewBlockSelectorScreen from "./screens/NewBlockSelectorScreen"

const App: React.FC = () => {
  const currentScreen = useScreenStore(state => state.currentScreen)

  const setBlocks = useBlocksStore(state => state.setBlocks)

  useEffect(() => {
    setBlocks(testData)
  }, [])

  switch (currentScreen) {
    case "home":
      return <HomeScreen />

    case "blockSelector":
      return <NewBlockSelectorScreen />
  }
}
export default App
