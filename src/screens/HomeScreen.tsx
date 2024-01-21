import StyledScreen from "../components/common/screen"
import { ContentBlock } from "../types"

interface HomeScreenProps {
  blocks: ContentBlock[]
}

const HomeScreen = ({ blocks }: HomeScreenProps) => {
  return <StyledScreen>
    <ul>
      {blocks.map(block => <li key={block.id}>{block.id}</li>)}
    </ul>
  </StyledScreen>
}

export default HomeScreen
