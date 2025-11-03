import Logo from "./Logo";
import Generations from "./Generations/Generations";

export default function Header({ text }) {
  return (
    <div className="bg-blue-600 p-6 rounded-xl shadow-lg space-y-4">
      <h1 className="text-3xl font-extrabold">{text}</h1>

      <Logo text="Logo Header" />
      <Generations text="Gennerasii Pokémon" />
    </div>
  );
}
