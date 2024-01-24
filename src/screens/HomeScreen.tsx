import StyledScreen from "../components/common/StyledScreen"
import BlockCard from "../components/homeScreen/BlockCard"
import { ContentBlock } from "../types"

interface HomeScreenProps {
  blocks: ContentBlock[]
}

const HomeScreen = ({ blocks }: HomeScreenProps) => {
  return <StyledScreen>
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
