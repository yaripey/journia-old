import styled from "styled-components"
import TopBarButton from "./TopBarButton"
import React from "react"

const TopBarContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
`

const TopBar: React.FC = () => {
  const createNew = () => {
    console.log("Creating new note")
  }

  return (
    <TopBarContainer>
      <div></div>
      <div>
        <TopBarButton icon="plus" onClick={createNew} />
      </div>
    </TopBarContainer>
  )
}

export default TopBar
