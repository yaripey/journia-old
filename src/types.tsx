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

export interface SubTodo {
  text: string,
  isDone: boolean,
}

export interface TodoBlock extends Block {
  type: "todo",
  title: string,
  isDone: boolean,
  subTodos: Array<SubTodo>,
}

export type PageName = "timeline" | "search" | "editor";

export type ContentBlock = NoteBlock | TodoBlock;
