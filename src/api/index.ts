import { Configuration, OpenAIApi } from "openai";

export async function handleApi(
  prompt: string,
  setPrompt: (val: string) => void,
  setLoading: (val: boolean) => void,
  engine: string
) {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration);
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

  setLoading(false);
  return response;
}
