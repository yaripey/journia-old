import { IconProps } from "./iconTypes"

export const HomeIcon = ({ width, height, fillColor }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M4 12L12 4L20 12M6 10.5V19C6 19.5523 6.44772 20 7 20H10V17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V20H17C17.5523 20 18 19.5523 18 19V10.5" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
