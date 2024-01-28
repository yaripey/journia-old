import styled from "styled-components"
import TopBarButton from "./TopBarButton"
import React from "react"
import useEditorStore from "../../store/editorStore"
import useScreenStore from "../../store/screenStore"
import { ScreenName } from "../../types"

const TopBarContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
`

const TopBar: React.FC = () => {
  const clearEditingBlock = useEditorStore(store => store.clearEditingBlock)
  const setCurrentScreen = useScreenStore(store => store.setCurrentScreen)

  const createNewBlock = () => {
    clearEditingBlock()
    setCurrentScreen(ScreenName.blockSelector)
  }

  return (
    <TopBarContainer>
      <div></div>
      <div>
        <TopBarButton icon="plus" onClick={createNewBlock} />
      </div>
    </TopBarContainer>
  )
}

export default TopBar
