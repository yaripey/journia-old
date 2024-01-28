import React from "react"
import StyledScreen from "../components/common/StyledScreen"
import TopBar from "../components/common/TopBar"
import Editor from "../components/editorScreen/Editor"
const EditorScreen: React.FC = () => {
  return <StyledScreen>
    <TopBar />
    <Editor />

  </StyledScreen>
}

export default EditorScreen
