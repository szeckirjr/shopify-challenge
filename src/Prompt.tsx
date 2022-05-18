import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { TiDelete } from "react-icons/ti";

export default function Prompt({
  prompt,
  response,
  removePrompt,
  engine,
  index,
}: {
  prompt: String;
  response: String;
  removePrompt: (prompt: String, response: String) => void;
  engine: String;
  index: number;
}): JSX.Element {
  //const [showDelete, setShowDelete] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        onClick={onOpen}
        position="relative"
        borderColor="#808080"
        borderWidth={2}
        p={4}
        m={2}
        w="200px"
        borderRadius="lg"
        h="200px"
        cursor="pointer"
        overflowY="hidden"
      >
        <IconButton
          position="absolute"
          right={2}
          bottom={2}
          aria-label={"Delete prompt"}
          icon={<TiDelete size={25} />}
          onClick={() => removePrompt(prompt, response)}
        />
        <Text fontSize={18} fontWeight="bold">
          {prompt.length > 80 ? prompt.slice(0, 80) + "..." : prompt}
        </Text>
        {/* <Divider my={1} opacity={0.2} /> */}
        {/* <Text fontSize="sm">
          {response.length > 100 ? response.slice(0, 100) + "..." : response}
        </Text> */}
        {/* <Flex
      backgroundColor="red"
      h="100%"
      direction="column"
      alignContent="flex-end"
    ></Flex> */}
        <Text pos="absolute" bottom={2} opacity={0.7} fontSize="sm">
          {engine}
        </Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack w="100%" my={8} align="stretch">
              <Heading size="md">Prompt</Heading>
              <Text
                borderRadius="lg"
                p={3}
                backgroundColor="gray.100"
                size="lg"
                fontWeight="500"
              >
                {prompt}
              </Text>
            </VStack>
            <VStack w="100%" align="stretch">
              <Heading size="md">Response</Heading>
              <Text
                borderRadius="lg"
                p={3}
                backgroundColor="gray.100"
                size="lg"
                fontWeight="500"
              >
                {response}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                onClose();
                removePrompt(prompt, response);
              }}
              rightIcon={<TiDelete size={24} />}
              colorScheme="red"
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    // <HStack align="flex-start">
    //   <VStack
    //     align="stretch"
    //     //onMouseEnter={() => setShowDelete(true)}
    //     //onMouseLeave={() => setShowDelete(false)}
    //     m={2}
    //     borderColor="#808080"
    //     borderWidth={2}
    //     p={4}
    //     borderRadius="lg"
    //     textAlign="left"
    //     maxW="80vw"
    //   >
    //     <Text fontWeight="bold">{prompt}</Text>
    //     <Divider />
    //     {response.split(/(\r\n|\n|\r)/gm).map((val) => {
    //       return val.trim() !== "" && <Text size="lg">{val}</Text>;
    //     })}
    //   </VStack>

    // </HStack>
  );
}
