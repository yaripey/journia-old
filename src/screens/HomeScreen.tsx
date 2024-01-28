import React from "react"
import StyledScreen from "../components/common/StyledScreen"
import TopBar from "../components/common/TopBar"
import BlockCard from "../components/homeScreen/BlockCard"
import { ContentBlock } from "../types"
import useBlocksStore from "../store/blocksStore"

const HomeScreen: React.FC = () => {
  const blocks: ContentBlock[] = useBlocksStore(store => store.blocks)

  return <StyledScreen>
    <TopBar />
    <ul>
      {
        blocks.map(block =>
          <li key={block.id}>
            <BlockCard block={block} />
          </li>
        )
      }
    </ul>
  </StyledScreen>
}

export default HomeScreen
