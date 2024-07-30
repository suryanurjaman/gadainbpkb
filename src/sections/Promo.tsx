import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FormEvent } from 'react';
import pengajuan1 from '../assets/pengajuan1.jpg';
import pengajuan2 from '../assets/pengajuan2.jpg';
import pengajuan3 from '../assets/pengajuan3.jpg';

function Promo() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}%0aPhone: ${phone}%0aCar Model: ${carModel}%0aCar Year: ${carYear}%0aMessage: ${message}`;
    window.open(`https://wa.me/+6287872481494?text=${whatsappMessage}`, '_blank');
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [pengajuan1, pengajuan2, pengajuan3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Ganti 3000 dengan durasi slide dalam milidetik

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, [slides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="promo"
      className="flex flex-col items-start justify-center my-8 px-4 md:px-0 max-w-7xl mx-auto"
    >
      <article className="mb-10 flex flex-col md:flex-row items-center justify-center w-full">
        <h2 className="mb-4 text-5xl font-semibold text-gray-800 md:text-5xl text-start max-w-full">
          Pengajuan Pegadaian Mobil
        </h2>
        <div className="w-full rounded-full h-0.5 bg-gradient-to-r from-gray-500 via-orange-300 to-gray-400"></div>
      </article>

      <div className='bg-slate-100 rounded-3xl p-4 md:p-8 w-full'>
        <div className="flex flex-col gap-4 md:flex-row w-full">
          <div className="w-full md:w-[40%] bg-gray-50 p-4 md:p-8 rounded-2xl shadow-xl">
            <div className="mb-4 text-center md:text-left">
              <h3 className="text-xl md:text-4xl mb-2 font-bold text-gray-800">Ajukan Pegadaian</h3>
              <p>Silahkan isi form untuk pengajuan Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt maiores corrupti voluptas veniam, nisi ullam </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-900" htmlFor="name">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-900" htmlFor="phone">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-900" htmlFor="carModel">
                  Model Mobil
                </label>
                <input
                  type="text"
                  id="carModel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-900" htmlFor="carYear">
                  Tahun Mobil
                </label>
                <input
                  type="text"
                  id="carYear"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl"
                  value={carYear}
                  onChange={(e) => setCarYear(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-900" htmlFor="message">
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-gray-700 rounded-xl hover:bg-gray-600"
              >
                Kirim ke WhatsApp
              </button>
            </form>
          </div>
          <div className="relative w-full md:w-[60%] brightness-95 h-64 md:h-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div
              className="w-full h-full backdrop-blur-sm transition-all duration-700"
              style={{ backgroundImage: `url(${slides[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shadow-lg hover:opacity-60 opacity-30 transition-opacity duration-300"
            >
              <FaArrowLeft className="text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shadow-lg hover:opacity-60 opacity-30 transition-opacity duration-300"
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
