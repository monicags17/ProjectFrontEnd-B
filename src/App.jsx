import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto p-6 space-y-10">
        <Header text="Ini Header" />
        <Home text="Ini Home" />
        <Footer text="Ini Footer" />
      </div>
    </div>
  );
}
