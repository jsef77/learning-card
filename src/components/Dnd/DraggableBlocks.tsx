import { Dispatch } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  closestCorners,
} from "@dnd-kit/core";
import {
  arrayMove,
  verticalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import { Box } from "@radix-ui/themes";
import { SortableBlock } from "./SortableBlock";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface Props {
  blocks: Array<{ id: number; type: number }>;
  setBlocks: Dispatch<React.SetStateAction<{ id: number; type: number }[]>>;
  editMode: boolean;
}

function DraggableBlocks({ blocks, setBlocks, editMode }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <Box>
        <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
          {blocks.map((block) => (
            <SortableBlock
              editMode={editMode}
              blocks={blocks}
              setBlocks={setBlocks}
              key={block.id}
              id={block.id}
              type={block.type}
            />
          ))}
        </SortableContext>
      </Box>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setBlocks((blocks) => {
        const oldIndex = blocks.findIndex(
          (block) => block.id === Number(active.id)
        );
        const newIndex = blocks.findIndex(
          (block) => block.id === Number(over.id)
        );

        return arrayMove(blocks, oldIndex, newIndex);
      });
    }
  }
}
export default DraggableBlocks;
