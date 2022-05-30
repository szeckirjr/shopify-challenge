import { Engine } from "../../lib/types";
import EngineBase from "./EngineBase";

export default function Davinci({
  engine,
  setEngine,
}: {
  engine: Engine;
  setEngine: (val: Engine) => void;
}): JSX.Element {
  return (
    <EngineBase
      engine={"text-davinci-002"}
      setEngine={setEngine}
      currEngine={engine}
      starCount={4}
      moneyCount={4}
      speedDesc={"Slowest"}
    />
  );
}
