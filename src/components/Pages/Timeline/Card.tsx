import { makeDateReadable } from "../../../utils";

import { ContentBlock } from "../../../types"

export const Card = (
  props: {
    block: ContentBlock,
  }
) => {
  return <li className="p-3">
    <p className="text-sm">{makeDateReadable(props.block.createdAt)}</p>
    <p>{props.block.title}</p>
  </li>
}
