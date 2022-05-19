import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  HStack,
  useColorModeValue,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSelect } from "react-icons/ai";

export default function SamplePrompts({
  setPrompt,
}: {
  setPrompt: (value: string) => void;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        onClick={onOpen}
        cursor="pointer"
        fontWeight="bold"
        fontSize={18}
        color={useColorModeValue("blackAlpha.800", "gray.200")}
      >
        I don't know what to write! Show me some sample prompts...
      </Text>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sample Prompts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack my={4}>
              <HStack w="100%" justify="space-between">
                <Text
                  p={4}
                  flexGrow={2}
                  borderRadius="lg"
                  backgroundColor={useColorModeValue("gray.100", "gray.600")}
                >
                  Tell me a story about a boy named Eduardo who was very
                  interested in working at Shopify.
                </Text>
                <IconButton
                  onClick={() => {
                    setPrompt(
                      "Tell me a story about a boy named Eduardo who was very interested in working at Shopify."
                    );
                    onClose();
                  }}
                  mr={3}
                  aria-label="Select prompt to use"
                  icon={<AiOutlineSelect size={20} />}
                />
              </HStack>
              <HStack w="100%" justify="space-between">
                <Text
                  p={4}
                  flexGrow={2}
                  borderRadius="lg"
                  backgroundColor={useColorModeValue("gray.100", "gray.600")}
                >
                  Name 10 of the best movies of all time
                </Text>
                <IconButton
                  onClick={() => {
                    setPrompt("Name 10 of the best movies of all time");
                    onClose();
                  }}
                  mr={3}
                  aria-label="Select prompt to use"
                  icon={<AiOutlineSelect size={20} />}
                />
              </HStack>
              <HStack w="100%" justify="space-between">
                <Text
                  p={4}
                  flexGrow={2}
                  borderRadius="lg"
                  backgroundColor={useColorModeValue("gray.100", "gray.600")}
                >
                  Tell me 5 things I can sell at an online store
                </Text>
                <IconButton
                  onClick={() => {
                    setPrompt("Tell me 5 things I can sell at an online store");
                    onClose();
                  }}
                  mr={3}
                  aria-label="Select prompt to use"
                  icon={<AiOutlineSelect size={20} />}
                />
              </HStack>
              <HStack w="100%" justify="space-between">
                <Text
                  p={4}
                  flexGrow={2}
                  borderRadius="lg"
                  backgroundColor={useColorModeValue("gray.100", "gray.600")}
                >
                  What is the 6th most populous country in the world?
                </Text>
                <IconButton
                  onClick={() => {
                    setPrompt(
                      "What is the 6th most populous country in the world?"
                    );
                    onClose();
                  }}
                  mr={3}
                  aria-label="Select prompt to use"
                  icon={<AiOutlineSelect size={20} />}
                />
              </HStack>
              <HStack w="100%" justify="space-between">
                <Text
                  p={4}
                  flexGrow={2}
                  borderRadius="lg"
                  backgroundColor={useColorModeValue("gray.100", "gray.600")}
                >
                  Why is Shopify the best workplace?
                </Text>
                <IconButton
                  onClick={() => {
                    setPrompt("Why is Shopify the best workplace?");
                    onClose();
                  }}
                  mr={3}
                  aria-label="Select prompt to use"
                  icon={<AiOutlineSelect size={20} />}
                />
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
