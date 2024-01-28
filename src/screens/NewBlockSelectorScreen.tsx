import React from "react"
import StyledScreen from "../components/common/StyledScreen"
import BlockSelectorButton from "../components/blockSelectorScreen/BlockSelectorButton"
import { ContentBlockType, ScreenName } from "../types"
import useScreenStore from "../store/screenStore"
import { makeEmptyNote, makeEmptyTodo } from "../utils"
import useEditorStore from "../store/editorStore"

const NewBlockSelectorScreen: React.FC = () => {
  const setCurrentScreen = useScreenStore(store => store.setCurrentScreen)
  const setEditingBlock = useEditorStore(store => store.setEditingBlock)

  const openNoteEditor = () => {
    const newNote = makeEmptyNote()
    setEditingBlock(newNote)

    setCurrentScreen(ScreenName.editor)
  }

  const openTodoEditor = () => {
    const newTodo = makeEmptyTodo()
    setEditingBlock(newTodo)

    setCurrentScreen(ScreenName.editor)
  }

  return (
    <StyledScreen>
      <ul>
        <li><BlockSelectorButton icon={ContentBlockType.note} onClick={openNoteEditor} /></li>
        <li><BlockSelectorButton icon={ContentBlockType.todo} onClick={openTodoEditor} /></li>
      </ul>
    </StyledScreen>
  )
}

export default NewBlockSelectorScreen
