export enum ContentBlockType {
  note = "note",
  todo = "todo"
}

interface Block {
  id: string | null,
  createdAt: number,
  lastEditedAt: number,
}

export interface NoteBlock extends Block {
  type: ContentBlockType.note,
  text: string,
  title: string,
}

export interface TodoBlock extends Block {
  type: ContentBlockType.todo,
  title: string,
  isDone: boolean,
}

export enum ScreenName {
  home = "home",
  blockSelector = "blockSelector",
  editor = "editor"
}

export type ContentBlock = NoteBlock | TodoBlock
