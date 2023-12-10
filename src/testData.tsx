import { ContentBlock } from "./types";

const testData: Array<ContentBlock> = [
  {
    id: "1",
    title: "Test title",
    text: "Test note",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: "note",
  },
  {
    id: "2",
    title: "Test title",
    text: "Another Test Note",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: "note",
  },
  {
    id: "3",
    type: "todo",
    title: "This is a super todo",
    subTodos: [
      {
        text: "First subtodo",
        isDone: false,
      },
      {
        text: "Another subtodo",
        isDone: true,
      },
    ],
    isDone: false,
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
  },
  {
    id: "4",
    title: "Test title",
    text: "The bestest note out there",
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    type: "note",
  },
];

export default testData;
