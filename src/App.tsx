import Produk from "./sections/Produk";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Layanan from "./sections/Layanan";
import Promo from "./sections/Promo";
import "./App.css"
import Features from "./sections/Features";

function App() {

  return (
    <div className="bg-slate-50">
      <div className="">
        <Nav />
        <Hero />
      </div>
      <Features />
      <Produk />
      <Layanan />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
