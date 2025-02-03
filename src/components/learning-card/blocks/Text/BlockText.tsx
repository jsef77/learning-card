import { Flex, TextArea } from "@radix-ui/themes";

interface Props {
  editMode: boolean;
}

function BlockText({ editMode }: Props) {
  return (
    <Flex width={"100%"}>
      <TextArea
        id="block-text"
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
