import Search from "./Search";
import CardInfo from "./CardInfo/CardInfo";

export default function Home({ text }) {
  return (
    <div className="bg-yellow-600 p-6 rounded-xl shadow-lg space-y-4">
      <h1 className="text-3xl font-extrabold">{text}</h1>

      <Search text="Search Component" />
      <CardInfo text="Card Info Component" />
    </div>
  );
}
