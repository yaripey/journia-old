import { Dispatch, createContext } from "react"
import { ContentBlock } from "../types"

export const BlocksContext = createContext<{ blocks: ContentBlock[], setBlocks: Dispatch<ContentBlock[]> }>({ blocks: [], setBlocks: () => { } })
