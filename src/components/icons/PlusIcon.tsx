import { IconProps } from "./iconTypes"

export const PlusIcon = ({ width, height, fillColor }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path d="M5 12H19" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L12 5" stroke={fillColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
