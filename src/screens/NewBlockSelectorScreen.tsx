import React from "react"
import StyledScreen from "../components/common/StyledScreen"
import BlockSelectorButton from "../components/blockSelectorScreen/BlockSelectorButton"

const NewBlockSelectorScreen: React.FC = () => {
  return (
    <StyledScreen>
      <ul>
        <li><BlockSelectorButton /></li>
        <li><BlockSelectorButton /></li>
      </ul>
    </StyledScreen>
  )
}

export default NewBlockSelectorScreen
