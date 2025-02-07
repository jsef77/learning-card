import BlockText from "./Text/BlockText";
import BlockCallout from "./Callout/BlockCallout";
import { Flex } from "@radix-ui/themes";

interface Props {
  type: number;
  editMode: boolean;
}

function BlockContainer({ type, editMode }: Props) {
  switch (type) {
    case 0:
      return (
        <Flex width={"100%"} justify={"end"} align={"end"}>
          <BlockText editMode={editMode} />
        </Flex>
      );
    case 1:
      return (
        <Flex width={"100%"} justify={"end"} align={"end"}>
          <BlockCallout editMode={editMode} />
        </Flex>
      );
  }
}

export default BlockContainer;
