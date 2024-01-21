interface Block {
  id: string | null,
  createdAt: number,
  lastEditedAt: number,
}

export interface NoteBlock extends Block {
  type: "note",
  text: string,
  title: string,
}

export interface TodoBlock extends Block {
  type: "todo",
  title: string,
  isDone: boolean,
}

export type PageName = "home" | "search" | "editor"

export type ContentBlock = NoteBlock | TodoBlock
