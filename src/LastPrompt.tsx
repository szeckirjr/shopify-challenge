import {
  Center,
  Heading,
  useColorModeValue,
  VStack,
  Text,
  Spinner,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { PastPrompt } from "./App";

export default function LastPrompt({
  isMobile,
  data,
  prompt,
  loading,
  removePrompt,
}: {
  isMobile: boolean;
  data: PastPrompt[];
  prompt?: String;
  loading?: boolean;
  removePrompt: (prompt: String, response: String) => void;
}): JSX.Element {
  const [lastFullPrompt, setLastFullPrompt] = React.useState("");

  useEffect(() => {
    if (prompt && prompt.trim() !== "" && prompt !== lastFullPrompt) {
      setLastFullPrompt(prompt as string);
    }
  }, [prompt, lastFullPrompt]);
  //console.log(data, prompt, lastFullPrompt, loading);
  return (
    <Center>
      <VStack textAlign="center" spacing={0} align="stretch">
        <HStack justify="space-between">
          <Heading my={4} size="lg">
            Last Prompt
          </Heading>
          <IconButton
            isDisabled={loading}
            onClick={() => removePrompt(data[0].prompt, data[0].response)}
            aria-label="Delete prompt"
            icon={<TiDelete size={24} />}
          />
        </HStack>

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
            <VStack align="stretch">
              {data[0].response
                .split(/\n|\r/g)
                .map((el) => el.trim() !== "" && <Text>{el}</Text>)}
            </VStack>
            {/* {data[0].response.replace(/\n|\r/g, "<br/>")} */}
          </Text>
        )}
      </VStack>
    </Center>
  );
}
