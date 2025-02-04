import { Box, Popover, Flex, TextArea, IconButton } from "@radix-ui/themes";
import { useState, useRef, useEffect } from "react";
import CalloutColourPicker from "./CalloutColourPicker";
import { BlendingModeIcon } from "@radix-ui/react-icons";

interface Props {
  editMode: boolean;
}

function BlockCallout({ editMode }: Props) {
  const boxShadow = editMode
    ? { boxShadow: "var(--shadow-1)" }
    : { boxShadow: "none" };

  const [chosenColour, setChosenColour] = useState("var(--accent-2)");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // init height to 1 line
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <Flex width={"100%"} justify={"end"} align={"end"}>
      <Box position={"absolute"}>
        <Popover.Root>
          {editMode ? (
            <Popover.Trigger>
              <IconButton
                variant="soft"
                style={{ height: "40px", width: "40px", cursor: "pointer" }}
              >
                <BlendingModeIcon />
              </IconButton>
            </Popover.Trigger>
          ) : null}
          <Popover.Content width="360px">
            <CalloutColourPicker setChosenColour={setChosenColour} />
          </Popover.Content>
        </Popover.Root>
      </Box>
      <TextArea
        id="block-callout"
        ref={textAreaRef}
        className="block"
        style={{
          ...boxShadow,
          backgroundColor: chosenColour,
        }}
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

export default BlockCallout;
