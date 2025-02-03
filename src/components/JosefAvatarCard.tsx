import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

function JosefAvatarCard() {
  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/vector-1738324167707-8544b2ff5112?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.25&fp-y=0.7&fp-z=2.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              @Josef Weikert
            </Text>
            <Text as="div" size="2" color="gray">
              February 12, 2025
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

export default JosefAvatarCard;
