import {
  Button,
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
} from "@chakra-ui/react";

export default function SamplePrompts({
  setPrompt,
}: {
  setPrompt: (value: string) => void;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        variant="link"
        color={useColorModeValue("blackAlpha.800", "gray.200")}
      >
        I don't know what to write! Show me some sample prompts...
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sample Prompts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack w="100%" justify="space-between">
              <Text
                p={4}
                flexGrow={2}
                borderRadius="lg"
                backgroundColor={useColorModeValue("gray.100", "gray.600")}
              >
                HAHAHAHHA
              </Text>
              <Button
                size="sm"
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  setPrompt("AHAHAH");
                  onClose();
                }}
              >
                Try this one!
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
