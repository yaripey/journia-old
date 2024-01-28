import styled from "styled-components"
import { NoteBlockIcon, TodoBlockIcon } from "../icons"
import { ContentBlockType } from "../../types"

const StyledButton = styled.button`
  width: 100%;
  height: 200px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`

interface BlockSelectorButtonProps {
  icon: ContentBlockType,
  onClick: () => void,
}

const BlockSelectorButton: React.FC<BlockSelectorButtonProps> = ({ icon, onClick }: BlockSelectorButtonProps) => {
  switch (icon) {
    case ContentBlockType.note:
      return <StyledButton onClick={onClick}>
        <NoteBlockIcon width={40} height={40} fillColor={"white"} />
      </StyledButton>
    case ContentBlockType.todo:
      return <StyledButton onClick={onClick}>
        <TodoBlockIcon width={40} height={40} fillColor={"white"} />
      </StyledButton>
  }
}

export default BlockSelectorButton
