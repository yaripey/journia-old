import React, { useEffect } from "react"
import "./main.css"
import useBlocksStore from "./store/blocksStore"
import testData from "./testData"
import HomeScreen from "./screens/HomeScreen"
import useScreenStore from "./store/screenStore"
import NewBlockSelectorScreen from "./screens/NewBlockSelectorScreen"

const App: React.FC = () => {
  const currentScreen = useScreenStore(store => store.currentScreen)

  const setBlocks = useBlocksStore(store => store.setBlocks)

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
