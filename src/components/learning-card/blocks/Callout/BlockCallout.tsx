import { Box, Popover, IconButton } from "@radix-ui/themes";
import { useState } from "react";
import CalloutColourPicker from "./CalloutColourPicker";
import { BlendingModeIcon } from "@radix-ui/react-icons";

interface Props {
  editMode: boolean;
}

import colourmap from "./colourmap";
import BlockText from "../Text/BlockText";

function BlockCallout({ editMode }: Props) {
  const [chosenColour, setChosenColour] = useState("");
  const themedColour = colourmap[chosenColour];

  return (
    <>
      <BlockText
        style={{ backgroundColor: themedColour }}
        editMode={editMode}
        id="block-callout"
      ></BlockText>
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
    </>
  );
}

export default BlockCallout;
