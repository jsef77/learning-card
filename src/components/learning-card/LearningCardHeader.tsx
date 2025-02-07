import { Heading, Section } from "@radix-ui/themes";

function LearningCardHeader() {
  return (
    <Section width={"90%"} size={"3"}>
      <Heading size={"9"} align={"left"}>
        This is the title of the below card, quite a long one too.
      </Heading>
    </Section>
  );
}

export default LearningCardHeader;
