import { Icon, iconNames } from "./Icons";

export const ToolBarDesktop = (
  props: {
    selectedIcon: string,
    buttonOnClick: (name: string) => void,
  },
) => {
  const toolbarIconNames: Array<string> = [
    iconNames.home,
    iconNames.search,
  ];

  return (
    <ul className="w-12 h-full bg-black">
      {toolbarIconNames.map((iconName, i) => (
        <ToolBarButton
          iconName={iconName}
          isSelected={props.selectedIcon === iconName}
          onClick={props.buttonOnClick}
          key={i}
        />
      ))}
    </ul>
  )
}

const ToolBarButton = (
  props: {
    iconName: string,
    isSelected: boolean,
    onClick: (name: string) => void,
  }
) => {
  const iconStyles = [
    "w-12",
    "h-12",
    "p-3",
    props.isSelected ? "stroke-black" : "stroke-white",
    "hover:stroke-black",
  ];

  return (
    <nav>
      <li className="w-12 h-12">
        <button
          className={`hover:bg-gray-300 ${props.isSelected ? "bg-white" : ""}`}
          onClick={() => props.onClick(props.iconName)}
        >
          <Icon
            iconName={props.iconName}
            styles={iconStyles.join(" ")}
          />
        </button>
      </li>
    </nav>
  )
}
