import StyledScreen from "../components/common/StyledScreen"
import TopBar from "../components/common/TopBar"
import BlockCard from "../components/homeScreen/BlockCard"
import { ContentBlock } from "../types"

interface HomeScreenProps {
  blocks: ContentBlock[]
}

const HomeScreen = ({ blocks }: HomeScreenProps) => {
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
