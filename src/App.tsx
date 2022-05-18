import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Heading,
  Button,
  VStack,
  Spinner,
  Select,
  Flex,
  HStack,
  Center,
  Text,
  useMediaQuery,
  useColorMode,
  color,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Textarea } from "@chakra-ui/react";
import Prompt from "./Prompt";
import LastPrompt from "./LastPrompt";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "",
});
const openai = new OpenAIApi(configuration);

async function handleApi(
  prompt: string,
  setPrompt: (val: string) => void,
  setLoading: (val: boolean) => void,
  engine: string
) {
  if (prompt.trim() === "") return;
  setLoading(true);
  const tempPrompt = prompt;
  setPrompt("");
  const response = await openai.createCompletion(engine, {
    prompt: tempPrompt,
    temperature: 0,
    max_tokens: 256,
    best_of: 3,
  });
  console.log(response);

  setLoading(false);
  return response;
}

export type PastPrompt = {
  prompt: string;
  response: string;
  engine: string;
};

export const App = () => {
  const [prompt, setPrompt] = React.useState("");
  const [isMobile] = useMediaQuery("(min-width: 1280px)");
  const { colorMode } = useColorMode();
  //const [text, setText] = React.useState(prompt);

  const [data, setData] = React.useState<PastPrompt[]>(
    window.localStorage.getItem("eduardo-openai-prompts")
      ? JSON.parse(window.localStorage.getItem("eduardo-openai-prompts")!)
      : []
  );

  const [loading, setLoading] = React.useState(false);

  const [engine, setEngine] = React.useState("text-ada-001");

  const storeNewPrompt = (prompt: string, response: string) => {
    setData([{ prompt, response, engine }].concat(data));
    window.localStorage.setItem(
      "eduardo-openai-prompts",
      JSON.stringify([{ prompt, response, engine }].concat(data))
    );
  };

  const removePrompt = (prompt: String, response: String) => {
    setData(
      data.filter(
        (value) => value.prompt !== prompt && value.response !== response
      )
    );
    window.localStorage.setItem(
      "eduardo-openai-prompts",
      JSON.stringify(
        data.filter(
          (value) => value.prompt !== prompt && value.response !== response
        )
      )
    );
  };

  console.log(colorMode);

  return (
    <ChakraProvider theme={theme}>
      <VStack spacing={4} align="stretch" fontSize="xl" px={8} py={3} mt={5}>
        <HStack justify="space-between">
          <Heading>Tell me to do something or ask me a question</Heading>
          <ColorModeSwitcher />
        </HStack>

        <Select
          w={!isMobile ? "80%" : "30%"}
          defaultValue="text-ada-001"
          onChange={(e) => setEngine(e.target.value)}
          variant="filled"
        >
          <option value="text-davinci-002">
            Davinci - Best answers, highest cost
          </option>
          <option value="text-curie-001">
            Curie - Capable, faster and lower cost
          </option>
          <option value="text-babbage-001">
            Babbage - Capable, very fast and lower cost
          </option>
          <option value="text-ada-001">
            Ada - Simple tasks, fastest and lowest cost
          </option>
        </Select>
        <Textarea
          onChange={(e) => setPrompt(e.target.value)}
          size="lg"
          variant="unstyled"
          resize="vertical"
          placeholder="Enter a prompt"
          value={prompt}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (prompt.trim() === "" || engine.trim() === "") return;
              handleApi(prompt, setPrompt, setLoading, engine).then(
                (r) =>
                  r.status === 200 &&
                  storeNewPrompt(prompt, r.data.choices[0].text)
              );
            }
          }}
        />
        <Button
          onClick={() => {
            if (prompt.trim() === "" || engine.trim() === "") return;
            handleApi(prompt, setPrompt, setLoading, engine).then(
              (r) =>
                r.status === 200 &&
                storeNewPrompt(prompt, r.data.choices[0].text)
            );
          }}
        >
          Done
        </Button>
        {data && data[0] && <LastPrompt isMobile data={data} />}
        {loading ? <Spinner /> : null}
        {data && data.length > 1 && (
          <VStack justify="left" align="stretch">
            <Heading>Past prompts</Heading>

            <Flex dir="row" wrap="wrap">
              {data.map(
                (value, index) =>
                  index > 0 && (
                    <Prompt
                      key={index}
                      prompt={value.prompt}
                      response={value.response}
                      removePrompt={removePrompt}
                      engine={value.engine}
                      index={index}
                    />
                  )
              )}
            </Flex>
          </VStack>
        )}
      </VStack>
    </ChakraProvider>
  );
};
