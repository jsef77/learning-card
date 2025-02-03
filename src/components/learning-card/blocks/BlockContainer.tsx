import BlockText from "./BlockText";

interface Props {
  type: number;
}

function BlockContainer({ type }: Props) {
  switch (type) {
    case 0:
      return <BlockText />;
  }
}

export default BlockContainer;
