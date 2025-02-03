import { Box, Popover, Flex, TextArea, Button } from "@radix-ui/themes";
import { useState } from "react";
import CalloutColourPicker from "./CalloutColourPicker";

interface Props {
  editMode: boolean;
}

function BlockText({ editMode }: Props) {
  const boxShadow = editMode
    ? { boxShadow: "var(--shadow-1)" }
    : { boxShadow: "none" };

  const [chosenColour, setChosenColour] = useState("var(--accent-2)");

  return (
    <Flex width={"100%"} justify={"end"} align={"end"}>
      <Box position={"absolute"}>
        <Popover.Root>
          <Popover.Trigger>
            <Button variant="soft" color={"amber"}>
              Edit Callout
            </Button>
          </Popover.Trigger>
          <Popover.Content width="360px">
            <CalloutColourPicker />
          </Popover.Content>
        </Popover.Root>
      </Box>
      <TextArea
        id="block-callout"
        className="block"
        style={{ ...boxShadow, backgroundColor: chosenColour }}
        placeholder="Enter text here..."
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "0px";
          target.style.height = target.scrollHeight + "px";
        }}
      ></TextArea>
    </Flex>
  );
}

export default BlockText;
