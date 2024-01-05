import styled from "styled-components";
import { ContentBlock } from "../../../types";

const BlockTypeButtonList = styled.ul`
  width: 100%;
`;

const BlockTypeButton = styled.button`
  width: 100%;
  height: 40px;

  background-color: black;
  color: white;
`;

const BlockTypeSelector = (
  props: {
    setEditingBlock: (block: ContentBlock) => void,
  },
) => {
  const createNote = () => props.setEditingBlock({
    type: "note",
    id: null,
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    text: "",
    title: "",
  });

  const createTodo = () => props.setEditingBlock({
    type: "todo",
    id: null,
    createdAt: Date.now(),
    lastEditedAt: Date.now(),
    isDone: false,
    title: "",
  });

  return (
    <BlockTypeButtonList>
      <li><BlockTypeButton onClick={createNote}>Note</BlockTypeButton></li>
      <li><BlockTypeButton onClick={createTodo}>Todo</BlockTypeButton></li>
    </BlockTypeButtonList>
  )
}

export default BlockTypeSelector;
