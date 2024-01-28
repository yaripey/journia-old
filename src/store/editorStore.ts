import { create } from 'zustand'
import { ContentBlock } from '../types'
import useBlocksStore from './blocksStore'

interface EditorStore {
  editingBlock: ContentBlock | null,
  setEditingBlock: (block: ContentBlock) => void,
  clearEditingBlock: () => void,
  saveEditingBlock: () => void,
}

const useEditorStore = create<EditorStore>((set, get) => ({
  editingBlock: null,
  setEditingBlock: (block: ContentBlock) => set(() => ({ editingBlock: block })),
  clearEditingBlock: () => set(() => ({ editingBlock: null })),
  saveEditingBlock: () => {
    const editingBlock = get().editingBlock
    const createBlock = useBlocksStore(store => store.createBlock)
    const updateBlock = useBlocksStore(store => store.updateBlock)

    if (editingBlock) {
      if (editingBlock.id === null) {
        createBlock(editingBlock)
      } else {
        updateBlock(editingBlock)
      }
    }
  }
}))

export default useEditorStore
