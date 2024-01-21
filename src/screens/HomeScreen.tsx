import { ContentBlock } from "../types"

interface HomeScreenProps {
  blocks: ContentBlock[]
}

const HomeScreen = ({ blocks }: HomeScreenProps) => {
  return <ul>
    {blocks.map(block => <p>{block.id}</p>)}
  </ul>
}

export default HomeScreen
