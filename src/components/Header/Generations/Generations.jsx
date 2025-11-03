import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

export default function Generations({ text }) {
  return (
    <div className="bg-green-600 p-5 rounded-xl shadow space-y-3">
      <h2 className="text-xl font-bold">{text}</h2>

      <div className="grid grid-cols-2 gap-3">
        <Gen1 text="Generation 1" />
        <Gen2 text="Generation 2" />
        <Gen3 text="Generation 3" />
        <Gen4 text="Generation 4" />
      </div>
    </div>
  );
}
