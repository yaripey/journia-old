import styled from "styled-components"
import { PageName } from "../../types";

interface ToolBarButton {
  name: string,
  onClick: () => void,
  iconFileName: string,
}

export const ToolBar = (
  props: {
    setCurrentPage: (name: PageName) => void,
  }
) => {
  const buttons: ToolBarButton[] = [
    {
      name: "home",
      onClick: () => props.setCurrentPage("home"),
      iconFileName: "src/assets/icons/home.png"
    },
    {
      name: "create",
      onClick: () => props.setCurrentPage("editor"),
      iconFileName: "src/assets/icons/create.png"
    },
  ];

  const ToolBarContainer = styled.div`
    display: flex;
    justify-content: between;
    flex-direction: column;

    width: 50px;
    height: 100%;

    color: white;
  `;

  return (
    <ToolBarContainer>
      {buttons.map(({ iconFileName, name, onClick }) =>
        <ToolBarButton
          iconFileName={iconFileName}
          key={name}
          onClick={onClick}
        />
      )}
    </ToolBarContainer>
  )
}

const ToolBarButton = (
  props: {
    iconFileName: string,
    onClick: () => void,
  }
) => {
  const NavBarButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    background-color: white;

    &:hover {
      background-color: grey;
    }
  `;

  const ButtonImg = styled.img`
    width: 25px;
    height: 25px;
  `;

  return (
    <NavBarButton onClick={props.onClick}>
      <ButtonImg src={props.iconFileName} />
    </NavBarButton>
  )
}
