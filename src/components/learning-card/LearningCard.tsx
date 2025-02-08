import { Flex } from "@radix-ui/themes";
import LearningCardHeader from "./LearningCardHeader";
import DraggableBlocks from "../drag-and-drop/DraggableBlocks";
import { useState } from "react";
import AddBlockButton from "./AddBlockButton";

function LearningCard({ editMode }: { editMode: boolean }) {
  const [blocks, setBlocks] = useState([{ id: 0, type: 0 }]);
  return (
    <Flex
      direction={"column"}
      align={"center"}
      width={"50%"}
      style={{
        backgroundColor: "var(--gray-1)",
        minWidth: "var(--learning-card-min-width)",
        marginTop: "6em",
        paddingTop: "1em",
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
