import React from "react"
import { IconType } from "../icons/iconTypes"
import styled from "styled-components"
import { HomeIcon, PlusIcon, SearchIcon } from "../icons"

const StyledButton = styled.button`
  width: 40px;
  height: 35px;

  background: green;
  border: 0px;
  border-bottom: 5px solid black;
  border-radius: 10px;

  transition: 0.1s ease;

  &:hover {
    background-color: lightgreen;
  }

  &:active {
    height: 33px;
    border-bottom: 3px solid black;
    transform: translate(0px, 2px);
  }
`

interface TopBarButtonProps {
  icon: IconType
  onClick: () => void,
}

interface IconProps {
  icon: IconType
}

const Icon: React.FC<IconProps> = ({ icon }: IconProps) => {
  const iconWidth = 30
  const iconHeight = 30
  const iconColor = "white"

  switch (icon) {
    case "home":
      return <HomeIcon width={iconWidth} height={iconHeight} fillColor={iconColor} />
    case "plus":
      return <PlusIcon width={iconWidth} height={iconHeight} fillColor={iconColor} />
    case "search":
      return <SearchIcon width={iconWidth} height={iconHeight} fillColor={iconColor} />
    default:
      return <div>Wrong icon</div>
  }
}

const TopBarButton: React.FC<TopBarButtonProps> = ({ icon, onClick }: TopBarButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <Icon icon={icon} />
    </StyledButton>
  )
}

export default TopBarButton
