import {
  LetterCaseCapitalizeIcon,
  PlusIcon,
  QuoteIcon,
} from "@radix-ui/react-icons";
import { Flex, IconButton, Popover, Section } from "@radix-ui/themes";
import { Dispatch, useState } from "react";

interface Props {
  blocks: Array<{ id: number; type: number }>;
  setBlocks: Dispatch<React.SetStateAction<{ id: number; type: number }[]>>;
}

function AddBlockButton({ blocks, setBlocks }: Props) {
  const [blockIDTicker, setBlockIDTicker] = useState(1); // Ticks up every time a block is added to avoid duplicate IDs

  function handleOnClick(blockType: number) {
    const newBlock = { id: blockIDTicker, type: blockType };
    setBlockIDTicker(blockIDTicker + 1);
    setBlocks([...blocks, newBlock]);
  }

  return (
    <Section style={{ padding: "10px" }}>
      <Popover.Root>
        <Popover.Trigger>
          <IconButton variant="outline" style={{ cursor: "pointer" }}>
            <PlusIcon />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content align="center">
          <Popover.Close>
            <Flex // Flex container for options
              direction="row"
              align="center"
              gap={"4"}
            >
              <IconButton // ----------Text block
                variant="ghost"
                style={{ cursor: "pointer" }}
                onClick={() => handleOnClick(0)}
              >
                <LetterCaseCapitalizeIcon />
              </IconButton>

              <IconButton // -----------Callout block
                variant="ghost"
                style={{ cursor: "pointer" }}
                onClick={() => handleOnClick(1)}
              >
                <QuoteIcon />
              </IconButton>
            </Flex>
          </Popover.Close>
        </Popover.Content>
      </Popover.Root>
    </Section>
  );
}

export default AddBlockButton;
