import { Engine } from "../../lib/types";
import EngineBase from "./EngineBase";

export default function Ada({
  engine,
  setEngine,
}: {
  engine: Engine;
  setEngine: (val: Engine) => void;
}): JSX.Element {
  return (
    <EngineBase
      engine={"text-ada-001"}
      setEngine={setEngine}
      currEngine={engine}
      starCount={1}
      moneyCount={1}
      speedDesc={"Fastest"}
    />
  );
}
