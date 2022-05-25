import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
  VStack,
  HStack,
  Box,
  ModalHeader,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { HiSwitchHorizontal, HiCheckCircle } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaStopwatch } from "react-icons/fa";

export default function ChangeAIEngine({
  setEngine,
  engine,
}: {
  setEngine: (value: string) => void;
  engine: string;
}): JSX.Element {
  const [isMobile] = useMediaQuery("(max-width: 1280px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const translateEngine = {
    "text-davinci-002": "Davinci",
    "text-curie-001": "Curie",
    "text-babbage-001": "Babbage",
    "text-ada-001": "Ada",
  };

  return (
    <>
      <HStack>
        {/* @ts-ignore */}
        <Heading>Using {translateEngine[engine]}</Heading>
        <Button
          onClick={onOpen}
          w={isMobile ? "90%" : "30%"}
          leftIcon={<HiSwitchHorizontal />}
        >
          Switch Engine AI
        </Button>
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
                  bg={useColorModeValue("#FCD1C1", "#d19680")}
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
                  bg={useColorModeValue("#FCE8E1", "#bd9d91")}
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
                  bg={useColorModeValue("#C6DFF7", "#81a5c7")}
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
                  bg={useColorModeValue("#EFF8FF", "#abc2d4")}
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
    // <Select
    //   w={!isMobile ? "90%" : "30%"}
    //   defaultValue="text-ada-001"
    //   onChange={(e) => setEngine(e.target.value)}
    //   variant="filled"
    // >
    //   <option value="text-davinci-002">
    //     Davinci - Best answers, highest cost
    //   </option>
    //   <option value="text-curie-001">
    //     Curie - Capable, faster and lower cost
    //   </option>
    //   <option value="text-babbage-001">
    //     Babbage - Capable, very fast and lower cost
    //   </option>
    //   <option value="text-ada-001">
    //     Ada - Simple tasks, fastest and lowest cost
    //   </option>
    // </Select>
  );
}
