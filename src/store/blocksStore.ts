import { create } from 'zustand'
import { ContentBlock } from '../types'

interface BlocksStore {
  blocks: ContentBlock[]
  setBlocks: (blocks: ContentBlock[]) => void
}

const useBlocksStore = create<BlocksStore>((set) => ({
  blocks: [],
  setBlocks: (blocks: ContentBlock[]) => set(() => ({ blocks }))
}))

export default useBlocksStore
