import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Flex, Box, IconButton } from "@radix-ui/themes";
import { Cross1Icon, LineHeightIcon } from "@radix-ui/react-icons";
import BlockContainer from "../learning-card/blocks/BlockContainer";

interface Props {
  id: number;
  type: number;
  editMode: boolean;
  blocks: Array<{ id: number; type: number }>;
  setBlocks: (value: Array<{ id: number; type: number }>) => void;
  overlay?: boolean;
}
export function SortableBlock({
  id,
  type,
  editMode,
  blocks,
  setBlocks,
}: Props) {
  const { listeners, attributes, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      transition: {
        duration: 450, // milliseconds
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleDelete(blockId: number) {
    const newBlocks = blocks.filter((block) => block.id !== blockId);
    setBlocks(newBlocks);
  }

  return (
    <>
      <Flex width={"100%"} gap={"1"} position={"relative"}>
        {editMode ? (
          <IconButton // Draggable button
            type="button"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            variant="outline"
            style={{
              ...style,
              position: "absolute",
              left: "-35px",
              cursor: "grab",
            }}
          >
            <LineHeightIcon />
          </IconButton>
        ) : null}

        <Box // Content box
          ref={setNodeRef}
          style={style}
          {...attributes}
        >
          <BlockContainer type={type} editMode={editMode} />
        </Box>

        {editMode ? (
          <IconButton // Delete button
            ref={setNodeRef}
            variant="ghost"
            color="red"
            style={{
              ...style,
              position: "absolute",
              top: "5px",
              right: "-25px",
              cursor: "pointer",
            }}
            {...attributes}
            onClick={() => {
              handleDelete(id);
            }}
          >
            <Cross1Icon />
          </IconButton>
        ) : null}
      </Flex>
    </>
  );
}
