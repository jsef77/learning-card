import { Flex, TextArea } from "@radix-ui/themes";
import { useRef, useEffect } from "react";

interface Props {
  editMode: boolean;
}

function BlockText({ editMode }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // init height to 1 line
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <Flex width={"100%"}>
      <TextArea
        id="block-text"
        ref={textAreaRef}
        className="block"
        style={
          editMode ? { boxShadow: "var(--shadow-1)" } : { boxShadow: "none" }
        }
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
