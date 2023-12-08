import { makeDateReadable } from "../../../utils";

import { ContentBlock } from "../../../types"

export const Card = (
  props: {
    block: ContentBlock,
    onClick: (block: ContentBlock) => void,
  }
) => {
  return (
    <li
      className="p-3 cursor-pointer hover:bg-gray-400"
      onClick={() => props.onClick(props.block)}
    >
      <p className="text-sm">{makeDateReadable(props.block.createdAt)}</p>
      <p>{props.block.title}</p>
    </li>
  )
}
