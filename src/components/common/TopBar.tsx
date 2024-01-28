import styled from "styled-components"
import TopBarButton from "./TopBarButton"
import React from "react"
import useEditorStore from "../../store/editorStore"
import useScreenStore from "../../store/screenStore"
import { ScreenName } from "../../types"
import { IconType } from "../icons/iconTypes"
import useBlocksStore from "../../store/blocksStore"

const TopBarContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
`

const TopBar: React.FC = () => {
  const clearEditingBlock = useEditorStore(store => store.clearEditingBlock)

  const currentScreen = useScreenStore(store => store.currentScreen)
  const setCurrentScreen = useScreenStore(store => store.setCurrentScreen)

  const editingBlock = useEditorStore(store => store.editingBlock)

  const createBlock = useBlocksStore(store => store.createBlock)
  const updateBlock = useBlocksStore(store => store.updateBlock)

  const createNewBlock = () => {
    clearEditingBlock()
    setCurrentScreen(ScreenName.blockSelector)
  }

  const onSaveEditingBlockClick = () => {
    if (editingBlock !== null) {
      if (editingBlock.id === null) createBlock(editingBlock)
      else updateBlock(editingBlock)
    }

    clearEditingBlock()
    setCurrentScreen(ScreenName.home)
  }

  return (
    <TopBarContainer>
      <div></div>
      {
        currentScreen === ScreenName.home
          ? <div>
            <TopBarButton icon={IconType.plus} onClick={createNewBlock} />
          </div>
          : null
      }
      {
        currentScreen === ScreenName.editor
          ? <div>
            <TopBarButton icon={IconType.save} onClick={onSaveEditingBlockClick} />
          </div>
          : null
      }
    </TopBarContainer>
  )
}

export default TopBar
