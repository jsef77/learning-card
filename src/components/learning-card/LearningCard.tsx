import { Flex } from "@radix-ui/themes";
import LearningCardHeader from "./LearningCardHeader";
import DraggableBlocks from "../Dnd/DraggableBlocks";
import { useState } from "react";
import AddBlockButton from "./AddBlockButton";

function LearningCard({ editMode }: { editMode: boolean }) {
  const [blocks, setBlocks] = useState([{ id: 0, type: 0 }]);
  // const [blockIDTicker, setBlockIDTicker] = useState(1);
  return (
    <Flex
      direction={"column"}
      align={"center"}
      width={"50%"}
      style={{
        backgroundColor: "background",
        minWidth: "var(--learning-card-min-width)",
        marginTop: "8em",
      }}
    >
      <LearningCardHeader />
      <DraggableBlocks
        editMode={editMode}
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <AddBlockButton blocks={blocks} setBlocks={setBlocks} />
    </Flex>
  );
}

export default LearningCard;
