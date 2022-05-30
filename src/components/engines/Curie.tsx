import { Engine } from "../../lib/types";
import EngineBase from "./EngineBase";

export default function Curie({
  engine,
  setEngine,
}: {
  engine: Engine;
  setEngine: (val: Engine) => void;
}): JSX.Element {
  return (
    <EngineBase
      engine={"text-curie-001"}
      setEngine={setEngine}
      currEngine={engine}
      starCount={3}
      moneyCount={3}
      speedDesc={"Slower"}
    />
  );
}
