import { IconProps } from "./iconTypes"

export const NoteBlockIcon = ({ width, height, fillColor }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9 2.22117V7H4.22117C4.31517 6.81709 4.43766 6.64812 4.58579 6.5L8.5 2.58579C8.64812 2.43766 8.81709 2.31517 9 2.22117ZM11 2V7C11 8.10457 10.1046 9 9 9H4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H11Z" fill={fillColor} />
    </svg>
  )
}
