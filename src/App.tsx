import * as React from "react";
import {
  Heading,
  Button,
  VStack,
  Flex,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { Textarea } from "@chakra-ui/react";
import Prompt from "./components/Prompt";
import LastPrompt from "./components/LastPrompt";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import SamplePrompts from "./SamplePrompts";
import ChangeAIEngine from "./components/ChangeAIEngine";
import { handleApi } from "./api";

export type PastPrompt = {
  prompt: string;
  response: string;
  engine: string;
};

export const App = () => {
  const [prompt, setPrompt] = React.useState("");
  const [showPast, setShowPast] = React.useState(false);
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

  //console.log(data, prompt);
  //console.log(useColorModeValue("LIGHT", "DARK"));

  return (
    <VStack spacing={4} align="stretch" fontSize="xl" px={8} py={3} my={5}>
      <HStack justify="space-between">
        <VStack align="stretch">
          <Heading>Tell me to do something or ask me a question</Heading>
          <Heading size="md">The more details the better...</Heading>
        </VStack>
        <ColorModeSwitcher />
      </HStack>

      <ChangeAIEngine engine={engine} setEngine={setEngine} />

      <Textarea
        onChange={(e) => setPrompt(e.target.value)}
        size="lg"
        variant="flushed"
        resize="vertical"
        placeholder="Enter a prompt"
        value={prompt}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (prompt.trim() === "" || engine.trim() === "") return;
            handleApi(prompt, setPrompt, setLoading, engine)
              .then(
                (r) =>
                  r!.status === 200 &&
                  storeNewPrompt(prompt, r!.data.choices![0].text!)
              )
              .catch((err) => {
                console.log("Error", err);
              });
          }
        }}
      />
      <SamplePrompts setPrompt={setPrompt} />
      <Button
        onClick={() => {
          if (prompt.trim() === "" || engine.trim() === "") return;
          handleApi(prompt, setPrompt, setLoading, engine)
            .then(
              (r) =>
                r!.status === 200 &&
                storeNewPrompt(prompt, r!.data.choices![0].text!)
            )
            .catch((err) => {
              console.log("Error", err);
            });
        }}
      >
        Done
      </Button>
      {(loading || (data && data[0])) && (
        <LastPrompt
          data={data}
          prompt={prompt}
          loading={loading}
          removePrompt={removePrompt}
        />
      )}
      {data && data.length > 1 && (
        <VStack justify="left" align="stretch">
          <HStack mt={8}>
            <Heading>Past prompts</Heading>
            <IconButton
              variant="ghost"
              onClick={() => setShowPast(!showPast)}
              borderRadius="full"
              aria-label={showPast ? "Close Past Prompts" : "Open Past Prompts"}
              icon={
                showPast ? (
                  <IoIosArrowDropupCircle size={25} />
                ) : (
                  <IoIosArrowDropdownCircle size={25} />
                )
              }
            />
          </HStack>
          {showPast && (
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
          )}
        </VStack>
      )}
    </VStack>
  );
};
