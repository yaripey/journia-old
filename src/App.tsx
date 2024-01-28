import React, { useEffect } from "react"
import "./main.css"
import useBlocksStore from "./store/blocksStore"
import testData from "./testData"
import HomeScreen from "./screens/HomeScreen"
import useScreenStore from "./store/screenStore"
import NewBlockSelectorScreen from "./screens/NewBlockSelectorScreen"
import { ScreenName } from "./types"
import EditorScreen from "./screens/EditorScreen"

const App: React.FC = () => {
  const currentScreen = useScreenStore(store => store.currentScreen)

  const setBlocks = useBlocksStore(store => store.setBlocks)

  useEffect(() => {
    setBlocks(testData)
  }, [])

  switch (currentScreen) {
    case ScreenName.home:
      return <HomeScreen />

    case ScreenName.blockSelector:
      return <NewBlockSelectorScreen />

    case ScreenName.editor:
      return <EditorScreen />
  }
}
export default App
