import { Engine } from "../../lib/types";
import EngineBase from "./EngineBase";

export default function Babbage({
  engine,
  setEngine,
}: {
  engine: Engine;
  setEngine: (val: Engine) => void;
}): JSX.Element {
  return (
    <EngineBase
      engine={"text-babbage-001"}
      setEngine={setEngine}
      currEngine={engine}
      starCount={2}
      moneyCount={2}
      speedDesc={"Faster"}
    />
  );
}
