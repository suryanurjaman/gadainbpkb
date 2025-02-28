import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Promo from "./sections/Promo";
import "./App.css"
import Features from "./sections/Features";
import Values from "./sections/Values";
import MarketNumbers from "./sections/MarketNumbers";
import FAQ from "./sections/FAQ";
import Banner from "./sections/Banner";

function App() {

  return (
    <div className="bg-slate-50">
      <div className="">
        <Nav />
        <Hero />
        {/* <Sponsor /> */}
      </div>
      <Features />
      <Values />
      <MarketNumbers />
      <FAQ />
      <Banner />
      {/* <Produk />
      <Layanan /> */}
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
