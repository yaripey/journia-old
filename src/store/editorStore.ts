import { create } from 'zustand'
import { ContentBlock } from '../types'

interface EditorStore {
  editingBlock: ContentBlock | null,
  setEditingBlock: (block: ContentBlock) => void,
  clearEditingBlock: () => void,
}

const useEditorStore = create<EditorStore>((set) => ({
  editingBlock: null,
  setEditingBlock: (block: ContentBlock) => set(() => ({ editingBlock: block })),
  clearEditingBlock: () => set(() => ({ editingBlock: null }))
}))

export default useEditorStore
