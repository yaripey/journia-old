import styled from "styled-components"
import { NoteBlockIcon } from "../icons"

const StyledButton = styled.button`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const BlockSelectorButton: React.FC = () => {
  return (
    <StyledButton>
      <NoteBlockIcon width={40} height={40} fillColor={"white"} />
    </StyledButton>
  )
}

export default BlockSelectorButton
