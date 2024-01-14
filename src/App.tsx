import "./main.css"
import testData from "./testData"

import AppContainer from "./components/AppContainer"
import Editor from "./components/sections/Editor"
import SideBar from "./components/sections/SideBar"
import TimeLine from "./components/sections/TimeLine"

import { useState } from "react"

import { ContentBlock } from "./types"

import { BlocksContext } from "./contexts/blocks"

const App = () => {
  const [blocks, setBlocks] = useState<ContentBlock[]>(testData)

  return (
    <AppContainer>
      <SideBar />
      <BlocksContext.Provider value={{ blocks, setBlocks }}>
        <TimeLine />
      </BlocksContext.Provider>
      <Editor />
    </AppContainer>
  )
}
export default App;
