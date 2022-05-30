import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  HStack,
  ModalHeader,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { Engine } from "../lib/types";
import { colorEngine, translateEngine } from "../lib/constants";
import Davinci from "./engines/Davinci";
import Curie from "./engines/Curie";
import Babbage from "./engines/Babbage";
import Ada from "./engines/Ada";

export default function ChangeAIEngine({
  setEngine,
  engine,
}: {
  setEngine: (value: Engine) => void;
  engine: Engine;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Davinci engine={engine} setEngine={setEngine} />
                <Curie engine={engine} setEngine={setEngine} />
              </HStack>
              <HStack>
                <Babbage engine={engine} setEngine={setEngine} />
                <Ada engine={engine} setEngine={setEngine} />
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
