import React, { useState, useEffect } from 'react';
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import CustomImage from '../common/CustomImage';
import MegaHero from "../assets/MegaHero.jpg"
import Pengajuan1 from "../assets/pengajuan1.jpg"
import Pengajuan2 from "../assets/pengajuan2.jpg"
import SectionTitle from '../common/SectionTitle';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fade, setFade] = useState(true);
  const phrases = [
    "Biaya Pendidikan?",
    "Renovasi Rumah?",
    "Modal Usaha?",
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

  const listbenefits = [
    "Proses mudah & cepat",
    "Bunga ringan 10.8% / tahun",
    "pencairan tinggi",
    "tanpa potingan",
    "sudah termasuk asuransi kendaraan",
    "kantor cabang tersebar di seluruh kota"
  ];

  const images = [
    { src: MegaHero, alt: 'MegaHero' },
    { src: Pengajuan1, alt: 'Pengajuan1' },
    { src: Pengajuan2, alt: 'Pengajuan2' },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id='Home' className="flex flex-col md:flex-row items-center justify-center mt-8 md:py-16 pb-8 md:px-20 gap-10 max-w-7xl m-auto">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <SectionTitle text='AJUKAN SEKARANG!' />
        <h1 className="mb-8 text-5xl mt-4 font-sans md:text-6xl font-medium text-slate-800">
          Butuh dana tunai untuk<br />
          <span className={`italic font-serif mt-2 font-medium text-4xl md:text-6xl text-slate-800 phrase ${fade ? 'fade-in' : 'fade-out'}`}>
            {phrases[currentPhrase]}
          </span>
        </h1>
        <div className='pl-[15%] md:pl-0 text-center mb-8 text-gray-700'>
          {listbenefits.map((benefit, index) => (
            <p key={index} className='flex text-md md:text-base text-slate-600 items-center justify-start gap-4 font-sans mb-2'>
              <IoIosCheckmarkCircle />
              {benefit}
            </p>
          ))}
        </div>
        <div className=''>
          <StoreLinks
            className='hover:bg-orange-600 active:bg-orange-600 transition duration-300 ease-in-out hover:opacity-90'
            type={BtnTypes.Standard}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000}>
          <div>
            <CustomImage />
          </div>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                className="object-contain w-[100%] rounded-2xl  h-auto"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Carousel>
      </div>

    </section>
  );
};

export default Hero;
