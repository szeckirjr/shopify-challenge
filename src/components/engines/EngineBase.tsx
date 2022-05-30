import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { FaStopwatch } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { colorEngine, translateEngine } from "../../lib/constants";
import { Engine } from "../../lib/types";

export default function EngineBase({
  engine,
  setEngine,
  currEngine,
  starCount,
  moneyCount,
  speedDesc,
}: {
  engine: Engine;
  setEngine: (val: Engine) => void;
  currEngine: Engine;
  starCount: number;
  moneyCount: number;
  speedDesc: string;
}): JSX.Element {
  return (
    <Box
      onMouseEnter={(e) => ((e.target as HTMLDivElement).style.scale = "0.95")}
      onMouseLeave={(e) => ((e.target as HTMLDivElement).style.scale = "1")}
      onClick={() => setEngine(engine)}
      cursor="pointer"
      borderRadius="lg"
      flexGrow={1}
      bg={colorEngine[engine]}
      w="50%"
      p={3}
    >
      <HStack justify="space-between">
        <Heading size="lg" mb={2}>
          {translateEngine[engine]}
        </Heading>
        {engine === currEngine && <HiCheckCircle size={25} />}
      </HStack>
      <HStack spacing={0}>
        {[...Array(starCount)].map((_, i) => (
          <AiFillStar size={25} key={i} />
        ))}
      </HStack>
      <HStack ml={-1} spacing={-2}>
        {[...Array(moneyCount)].map((_, i) => (
          <MdAttachMoney size={25} key={i} />
        ))}
      </HStack>
      <HStack>
        <FaStopwatch size={20} />
        <Text fontSize={18} fontWeight="bold">
          {speedDesc}
        </Text>
      </HStack>
    </Box>
  );
}
