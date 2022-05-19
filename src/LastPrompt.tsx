import {
  Center,
  Heading,
  useColorModeValue,
  VStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { PastPrompt } from "./App";

export default function LastPrompt({
  isMobile,
  data,
  prompt,
  loading,
}: {
  isMobile: boolean;
  data: PastPrompt[];
  prompt?: String;
  loading?: boolean;
}): JSX.Element {
  const [lastFullPrompt, setLastFullPrompt] = React.useState("");

  useEffect(() => {
    console.log("OH WHAT", prompt, lastFullPrompt);
    if (prompt && prompt.trim() !== "" && prompt !== lastFullPrompt) {
      console.log("UPDATING", prompt, lastFullPrompt);
      setLastFullPrompt(prompt as string);
    }
  }, [prompt, lastFullPrompt]);
  //console.log(data, prompt, lastFullPrompt, loading);
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
          {loading ? lastFullPrompt : data[0].prompt}
        </Heading>
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Text
            p={4}
            borderBottomRadius="lg"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            backgroundColor={useColorModeValue("gray.100", "gray.600")}
            fontWeight="500"
            size="lg"
          >
            {data[0].response}
          </Text>
        )}
      </VStack>
    </Center>
  );
}
