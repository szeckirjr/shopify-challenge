import { Heading, VStack } from "@chakra-ui/react";

export function TitleHeader(): JSX.Element {
  return (
    <VStack align="stretch">
      <Heading>Tell me to do something or ask me a question</Heading>
      <Heading size="md">The more details the better...</Heading>
    </VStack>
  );
}
