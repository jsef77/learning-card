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

  if (transform) {
    // Keeps things from stretching when dragging
    transform.scaleY = 1;
  }
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleDelete(blockId: number) {
    setBlocks(blocks.filter((block) => block.id !== blockId));
  }

  return (
    <>
      <Flex width={"100%"} gap={"1"} position={"relative"}>
        {editMode ? (
          <Box // Drag box
            ref={setNodeRef}
            style={{ ...style, position: "absolute", left: "-35px" }}
            {...attributes}
            {...listeners}
          >
            <IconButton variant="outline" style={{ cursor: "grab" }}>
              <LineHeightIcon />
            </IconButton>
          </Box>
        ) : null}

        <Box // Content box
          ref={setNodeRef}
          style={style}
          {...attributes}
        >
          <BlockContainer type={type} editMode={editMode} />
        </Box>

        <Box // Delete box
          ref={setNodeRef}
          style={{
            ...style,
            position: "absolute",
            top: "5px",
            right: "-25px",
          }}
          {...attributes}
        >
          {editMode ? (
            <IconButton
              variant="ghost"
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleDelete(id);
              }}
            >
              <Cross1Icon />
            </IconButton>
          ) : null}
        </Box>
      </Flex>
    </>
  );
}
