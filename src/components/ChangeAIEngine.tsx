import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  HStack,
  Box,
  ModalHeader,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { HiSwitchHorizontal, HiCheckCircle } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaStopwatch } from "react-icons/fa";
import { Engine } from "../lib/types";

export default function ChangeAIEngine({
  setEngine,
  engine,
}: {
  setEngine: (value: Engine) => void;
  engine: Engine;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const translateEngine = {
    "text-davinci-002": "Davinci",
    "text-curie-001": "Curie",
    "text-babbage-001": "Babbage",
    "text-ada-001": "Ada",
  };

  const colorEngine = {
    "text-davinci-002": "red.400", //useColorModeValue("#FCD1C1", "#d19680"),
    "text-curie-001": "green.400", // useColorModeValue("#FCE8E1", "#bd9d91"),
    "text-babbage-001": "blue.400", // useColorModeValue("#C6DFF7", "#81a5c7"),
    "text-ada-001": "yellow.400", // useColorModeValue("#EFF8FF", "#abc2d4"),
  };

  return (
    <>
      <HStack>
        <Heading onClick={onOpen}>
          Using{" "}
          <Heading
            as="span"
            color={colorEngine[engine]}
            cursor="pointer"
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = "0.75";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = "1";
            }}
          >
            {translateEngine[engine]}
            <IconButton
              colorScheme={""}
              fontSize={25}
              backgroundColor="transparent"
              aria-label={"Switch AI engine"}
              icon={<HiSwitchHorizontal />}
              color={colorEngine[engine]}
            />
          </Heading>
        </Heading>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pick AI Engine</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack w="100%" align="space-evenly" my={4}>
              <HStack>
                <Box
                  onMouseEnter={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "0.95")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "1")
                  }
                  onClick={() => setEngine("text-davinci-002")}
                  cursor="pointer"
                  borderRadius="lg"
                  flexGrow={1}
                  bg={colorEngine["text-davinci-002"]}
                  w="50%"
                  p={3}
                >
                  <HStack justify="space-between">
                    <Heading size="lg" mb={2}>
                      Davinci
                    </Heading>
                    {engine === "text-davinci-002" && (
                      <HiCheckCircle size={25} />
                    )}
                  </HStack>
                  <HStack spacing={0}>
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                  </HStack>
                  <HStack ml={-1} spacing={-2}>
                    <MdAttachMoney size={25} />
                    <MdAttachMoney size={25} />
                    <MdAttachMoney size={25} />
                    <MdAttachMoney size={25} />
                  </HStack>
                  <HStack>
                    <FaStopwatch size={20} />
                    <Text fontSize={18} fontWeight="bold">
                      Slowest
                    </Text>
                  </HStack>
                </Box>
                <Box
                  onMouseEnter={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "0.95")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "1")
                  }
                  onClick={() => setEngine("text-curie-001")}
                  cursor="pointer"
                  borderRadius="lg"
                  flexGrow={1}
                  bg={colorEngine["text-curie-001"]}
                  w="50%"
                  p={3}
                >
                  <HStack justify="space-between">
                    <Heading size="lg" mb={2}>
                      Curie
                    </Heading>
                    {engine === "text-curie-001" && <HiCheckCircle size={25} />}
                  </HStack>
                  <HStack spacing={0}>
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                  </HStack>
                  <HStack ml={-1} spacing={-2}>
                    <MdAttachMoney size={25} />
                    <MdAttachMoney size={25} />
                    <MdAttachMoney size={25} />
                  </HStack>
                  <HStack>
                    <FaStopwatch size={20} />
                    <Text fontSize={18} fontWeight="bold">
                      Slower
                    </Text>
                  </HStack>
                </Box>
              </HStack>
              <HStack>
                <Box
                  onMouseEnter={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "0.95")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "1")
                  }
                  onClick={() => setEngine("text-babbage-001")}
                  cursor="pointer"
                  borderRadius="lg"
                  flexGrow={1}
                  bg={colorEngine["text-babbage-001"]}
                  w="50%"
                  p={3}
                >
                  <HStack justify="space-between">
                    <Heading size="lg" mb={2}>
                      Babbage
                    </Heading>
                    {engine === "text-babbage-001" && (
                      <HiCheckCircle size={25} />
                    )}
                  </HStack>
                  <HStack spacing={0}>
                    <AiFillStar size={25} />
                    <AiFillStar size={25} />
                  </HStack>
                  <HStack ml={-1} spacing={-2}>
                    <MdAttachMoney size={25} />
                    <MdAttachMoney size={25} />
                  </HStack>
                  <HStack>
                    <FaStopwatch size={20} />
                    <Text fontSize={18} fontWeight="bold">
                      Faster
                    </Text>
                  </HStack>
                </Box>
                <Box
                  onMouseEnter={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "0.95")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLDivElement).style.scale = "1")
                  }
                  onClick={() => setEngine("text-ada-001")}
                  cursor="pointer"
                  borderRadius="lg"
                  flexGrow={1}
                  bg={colorEngine["text-ada-001"]}
                  w="50%"
                  p={3}
                >
                  <HStack justify="space-between">
                    <Heading size="lg" mb={2}>
                      Ada
                    </Heading>
                    {engine === "text-ada-001" && <HiCheckCircle size={25} />}
                  </HStack>
                  <HStack spacing={0}>
                    <AiFillStar size={25} />
                  </HStack>
                  <HStack ml={-1} spacing={-2}>
                    <MdAttachMoney size={25} />
                  </HStack>
                  <HStack>
                    <FaStopwatch size={20} />
                    <Text fontSize={18} fontWeight="bold">
                      Fastest
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
