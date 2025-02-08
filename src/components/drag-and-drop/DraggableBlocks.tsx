import { Dispatch, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import { Flex } from "@radix-ui/themes";
import { SortableBlock } from "./SortableBlock";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { useAppDispatch } from "../../app/hooks";
import { dragFalse, dragTrue } from "../../features/dragging/draggingSlice";

interface Props {
  blocks: Array<{ id: number; type: number }>;
  setBlocks: Dispatch<React.SetStateAction<{ id: number; type: number }[]>>;
  editMode: boolean;
}

function DraggableBlocks({ blocks, setBlocks, editMode }: Props) {
  const dispatch = useAppDispatch();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [activeId, setActiveId] = useState<null | UniqueIdentifier>(null);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <Flex direction={"column"} gap={"2"}>
        <SortableContext items={blocks} strategy={() => null}>
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
        <DragOverlay>
          {/* {activeId ? (
            <SortableBlock
              id={activeId as number}
              editMode={editMode}
              type={0}
              blocks={blocks}
              setBlocks={setBlocks}
            />
          ) : null} */}
        </DragOverlay>
      </Flex>
    </DndContext>
  );

  function handleDragStart(event: DragStartEvent) {
    dispatch(dragTrue());
    setActiveId(event.active.id);
    console.log(activeId, "|", event.active.id);
  }

  function handleDragEnd() {
    dispatch(dragFalse());
    setActiveId(null);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setBlocks((blocks) => {
        const oldIndex = blocks.map((b) => b.id).indexOf(active.id as number);
        const newIndex = blocks.map((b) => b.id).indexOf(over.id as number);
        return arrayMove(blocks, oldIndex, newIndex);
      });
    }
  }
}

export default DraggableBlocks;
