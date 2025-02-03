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
      width={"100%"}
      align={"center"}
      justify={"center"}
      style={{ backgroundColor: "var(--gray-2)" }}
    >
      <Flex
        direction={"column"}
        align={"center"}
        width="60%"
        minWidth={"800px"}
        style={{ backgroundColor: "background" }}
      >
        <LearningCardHeader />
        <DraggableBlocks
          editMode={editMode}
          blocks={blocks}
          setBlocks={setBlocks}
        />
        <AddBlockButton blocks={blocks} setBlocks={setBlocks} />
      </Flex>
    </Flex>
  );
}

export default LearningCard;
