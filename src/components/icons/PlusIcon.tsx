import { IconProps } from "./iconTypes"

export const PlusIcon = ({ width, height, fillColor }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path d="M5 12H19" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 19L12 5" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
