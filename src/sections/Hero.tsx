import React, { useState, useEffect } from 'react';
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Checkmark from "../assets/icons/checkmark.svg";
import MegaHeroImage from "../assets/MegaHero.jpg";
import "../App.css";

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fade, setFade] = useState(true);
  const phrases = [
    "Pendidikan?",
    "Kebutuhan medis?",
    "Renovasi rumah?",
    "Usaha kecil?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500); // Duration of fade out
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    "Pengajuan cepat disetujui",
    "Proses mudah dan cepat",
    "Tanpa agunan",
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start py-20 px-12 gap-10 sm:gap-16 md:my-0 md:h-full md:flex-row md:gap-0 ">
      <div className="w-full md:w-3/6">
        <h1 className="mx-auto w-max mb-8 text-center text-3xl md:text-6xl font-semibold text-orange-500 md:mx-0 md:text-left">
          Butuh dana tunai untuk<br />
          <span className={`font-semibold text-orange-500 phrase ${fade ? 'fade-in' : 'fade-out'}`}>
            {phrases[currentPhrase]}
          </span>
        </h1>
        <h2 className="mx-auto mb-6 w-full text-center text-xl font-medium text-gray-600 md:text-4xl md:mx-0 md:text-left">
          Solusi Cepat dan Mudah!
        </h2>
        <div className="m-auto w-[34ch] text-center text-gray-600 md:m-0 md:text-left">
          {benefits.map((benefit, index) => (
            <p key={index} className="flex items-center text-md md:text-lg mb-4">
              <img src={Checkmark} alt="checkmark" className="w-6 h-6 mr-2" />
              {benefit}
            </p>
          ))}
        </div>
        <StoreLinks type={BtnTypes.Standard} />
      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden justify-end flex">
        <img
          className="hidden rounded-2xl xl:flex w-[80%]"
          src={MegaHeroImage}
          alt="Mega Finance"
        />
      </div>
    </section>
  );
};

export default Hero;
