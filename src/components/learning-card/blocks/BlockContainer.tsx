import BlockText from "./Text/BlockText";
import BlockCallout from "./Callout/BlockCallout";

interface Props {
  type: number;
  editMode: boolean;
}

function BlockContainer({ type, editMode }: Props) {
  switch (type) {
    case 0:
      return <BlockText editMode={editMode} />;
    case 1:
      return <BlockCallout editMode={editMode} />;
  }
}

export default BlockContainer;
