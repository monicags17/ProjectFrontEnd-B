import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

export default function CardInfo({ text }) {
  return (
    <div className="bg-red-600 p-6 rounded-xl shadow-lg space-y-3">
      <h1 className="text-2xl font-bold">{text}</h1>

      <Evolution text="Evolution Section" />
      <TypeEffect text="Type Effect Section" />
      <Logo text="Card Logo" />
    </div>
  );
}
