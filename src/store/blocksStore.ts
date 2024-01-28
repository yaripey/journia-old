import { create } from 'zustand'
import { ContentBlock } from '../types'
import { makeBlockId } from '../utils'

interface BlocksStore {
  blocks: ContentBlock[]
  setBlocks: (blocks: ContentBlock[]) => void,
  createBlock: (block: ContentBlock) => void,
  updateBlock: (block: ContentBlock) => void,
}

const useBlocksStore = create<BlocksStore>((set, get) => ({
  blocks: [],
  setBlocks: (blocks: ContentBlock[]) => set(() => ({ blocks })),
  createBlock: (block: ContentBlock) => {
    const { blocks, setBlocks } = get()

    setBlocks([
      ...blocks,
      {
        ...block,
        id: makeBlockId()
      }
    ])
  },
  updateBlock: (block: ContentBlock) => {
    const { blocks, setBlocks } = get()

    setBlocks(
      blocks.map(b => b.id === block.id ? block : b)
    )
  }
}))

export default useBlocksStore
