import { ContentBlockType, NoteBlock, TodoBlock } from "./types";

export const makeDateReadable = (date: number): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return dateObj.toLocaleDateString(undefined, options)
}

export const makeEmptyNote = (): NoteBlock => {
  return {
    createdAt: Date.now(),
    id: null,
    lastEditedAt: Date.now(),
    text: "",
    title: "",
    type: ContentBlockType.note
  }
}

export const makeEmptyTodo = (): TodoBlock => {
  return {
    createdAt: Date.now(),
    id: null,
    isDone: false,
    lastEditedAt: Date.now(),
    title: "",
    type: ContentBlockType.todo
  }
}
