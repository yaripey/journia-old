import { IconProps } from "./iconTypes"

export const TodoBlockIcon = ({ width, height, fillColor }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={"none"}>
      <path d="M15 4H18C18.5523 4 19 4.44772 19 5V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V5C5 4.44772 5.44772 4 6 4H9M9 7H15M9 14L11 16L15 12M10 3V7H14V3H10Z" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
