import formImage from "../assets/content.png";
import phoneImage from "../assets/phone-call.png";
import searchImage from "../assets/search.png";
import moneyImage from "../assets/money-transfer.png";
import { FaRegFileAlt, FaPhone, FaRegClipboard, FaRegMoneyBillAlt } from "react-icons/fa";
import FAQ from "../common/FAQ";

function Layanan() {
  return (
    <section id="layanan" className="mt-20 mx-4 flex max-w-7xl xl:m-auto flex-col py-20">
      <article className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* <div className="hidden md:block w-full rounded-full md:mr-4 h-0.5 bg-gradient-to-r from-gray-600 via-orange-300 to-gray-400"></div> */}
        <h2 className=" mb-4 text-5xl font-semibold text-orange-500 md:text-5xl text-start max-w-full">
          Langkah mudah mengajukan pinjaman
        </h2>
        <div className="w-full rounded-full md:ml-4 h-0.5 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-400"></div>
      </article>
      <p className="text-lg text- text-start mb-8">Proses cepat dan mudah Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus amet repudiandae accusamus atque nihil mollitia, non, necessitatibus itaque rem voluptatibus! Exercitationem, corporis quaerat quidem ut delectus quod maxime perspiciatis.</p>
      <article className="flex rounded-3xl bg-slate-100 p-8 flex-col items-center xl:flex-row w-full gap-8 xl:h-auto">
        <div className="flex flex-col md:flex-row gap-8 xl:w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full md:w-[300px] p-6 text-center rounded-2xl bg-slate-50 shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-end justify-center rounded-xl bg-slate-100 w-full h-40 mx-auto">
                <img className="rounded-2xl w-36 md:w-[150px] mx-auto" src={step.image} alt={step.title} />
              </div>
              <div className="mt-4 flex justify-center text-orange-500 text-4xl">
                {step.icon}
              </div>
              <h1 className="mt-4 text-2xl font-bold text-gray-800">{step.title}</h1>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </article>
      <FAQ />
    </section>
  );
}

const steps = [
  {
    title: "1. Isi Form Online",
    description: "Isi form pada bagian pengajuan dengan data yang valid dan lengkap untuk mempermudah proses verifikasi.",
    icon: <FaRegFileAlt />,
    image: formImage,
  },
  {
    title: "2. Kami akan menghubungimu",
    description: "Tim kami akan menghubungi Anda untuk informasi lebih lanjut.",
    icon: <FaPhone />,
    image: phoneImage,
  },
  {
    title: "3. Survei dan Validasi Aset",
    description: "Kami akan melakukan survei dan validasi aset Anda.",
    icon: <FaRegClipboard />,
    image: searchImage,
  },
  {
    title: "4. Pencairan Dana",
    description: "Jika semua syarat terpenuhi, dana akan segera dicairkan.",
    icon: <FaRegMoneyBillAlt />,
    image: moneyImage,
  }
];

export default Layanan;
