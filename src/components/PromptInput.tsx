import { Button, Textarea } from "@chakra-ui/react";
import { handleApi } from "../api";
import { PastPrompt } from "../App";

export function PromptInput({
  setPrompt,
  prompt,
  engine,
  setLoading,
  setData,
  data,
}: {
  setPrompt: (val: string) => void;
  prompt: string;
  engine: string;
  setLoading: (val: boolean) => void;
  setData: (val: any) => void;
  data: PastPrompt[];
}): JSX.Element {
  const storeNewPrompt = (prompt: string, response: string) => {
    setData([{ prompt, response, engine }].concat(data));
    window.localStorage.setItem(
      "eduardo-openai-prompts",
      JSON.stringify([{ prompt, response, engine }].concat(data))
    );
  };

  return (
    <>
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
    </>
  );
}
