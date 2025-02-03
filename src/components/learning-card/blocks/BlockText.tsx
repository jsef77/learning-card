import { Flex, TextArea } from "@radix-ui/themes";

function BlockText() {
  return (
    <Flex width={"100%"}>
      <TextArea
        style={{ width: "800px", height: "200px" }}
        placeholder="Enter text here..."
        variant="soft"
      ></TextArea>
    </Flex>
  );
}

export default BlockText;
