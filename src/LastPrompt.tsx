import {
  Center,
  Heading,
  useColorModeValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import { PastPrompt } from "./App";

export default function LastPrompt({
  isMobile,
  data,
}: {
  isMobile: boolean;
  data: PastPrompt[];
}): JSX.Element {
  return (
    <Center>
      <VStack
        w={!isMobile ? "80%" : "50%"}
        textAlign="center"
        spacing={0}
        align="stretch"
      >
        <Heading my={4} size="lg">
          Last Prompt
        </Heading>
        <Heading
          p={4}
          borderTopRadius="lg"
          backgroundColor={useColorModeValue("gray.200", "gray.700")}
          size="md"
        >
          {data[0].prompt}
        </Heading>
        <Text
          p={4}
          borderBottomRadius="lg"
          backgroundColor={useColorModeValue("gray.100", "gray.600")}
          fontWeight="500"
          size="lg"
        >
          {data[0].response}
        </Text>
      </VStack>
    </Center>
  );
}
