import { PageName } from "../../types";
import { Icon, IconName } from "./Icons";

interface NavButton {
  name: string,
  iconName: IconName,
  onClick: () => void,
}

export const ToolBarDesktop = (
  props: {
    setCurrentPage: React.Dispatch<PageName>,
  }
) => {
  const openEditorWithNewBlock = () => {
    props.setCurrentPage("editor");
  }

  const openHomePage = () => {
    props.setCurrentPage("home");
  }

  const defaultButtonStyles = [
    "w-12",
    "h-12",
    "hover:bg-gray-300",
  ];

  const defaultIconStyles = [
    "hover:stroke-black",
    "p-3",
    "stroke-white",
  ];

  const navButtons: Array<NavButton> = [
    {
      name: "home",
      iconName: "home",
      onClick: openHomePage,
    }
  ];

  return <div className="flex justify-between flex-col w-12 h-full bg-black">
    <ul>
      {
        navButtons
          .map((navButton, i) => (
            <ToolBarButton
              buttonStyles={defaultButtonStyles.join(" ")}
              iconStyles={defaultIconStyles.join(" ")}
              iconName={navButton.iconName}
              onClick={navButton.onClick}
              key={i}
            />
          ))
      }
    </ul>

    <ul>
      <ToolBarButton
        buttonStyles={defaultButtonStyles.join(" ")}
        iconStyles={defaultIconStyles.join(" ")}
        iconName="new"
        onClick={openEditorWithNewBlock}
      />
    </ul>
  </div>
}

const ToolBarButton = (
  props: {
    iconName: IconName,
    iconStyles: string,
    buttonStyles: string,
    onClick: () => void,
  }
) => {
  return (
    <li className="w-12 h-12">
      <button className={props.buttonStyles} onClick={props.onClick}>
        <Icon
          iconName={props.iconName}
          styles={props.iconStyles}
        />
      </button>
    </li>
  )
}
