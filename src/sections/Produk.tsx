import "../App.css";
import Melayani from "../assets/Melayani.png";
import Mega1 from "../assets/1.jpg";
import Mega2 from "../assets/2.jpg";
import Mega3 from "../assets/3.jpg";
import TimelineItem from "../common/TimelineItem";

function Features() {
  return (
    <section
      className="flex mx-4 max-w-7xl flex-col gap-10 pt-10  xl:m-auto xl:pt-20"
    >
      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-120 xl:flex-row">
        <div className="flex justify-end items-center w-full">
          <img
            className="rounded-2xl w-full"
            src={Mega1}
            alt="Mega Finance"
          />
        </div>
      </article>
      <article className="flex flex-col md:flex-row my-8 w-full gap-8 text-center text-gray-500">
        <div className="w-full">
          <div className="w-full md:w-[95%]">
            <h2 className="text-orange-500 text-sm md:text-2xl font-semibold">
              TENTANG MEGA FINANCE
            </h2>
            <span className="my-2 block h-0.5 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-400"></span>
            <p className="text-gray-800 mt-12 text-left text-sm md:text-base max-w-4xl mx-auto">
              Sebagai bagian dari jaringan bisnis yang luas di bawah naungan CT Corp,
              Mega Finance telah menunjukkan komitmen yang kuat terhadap inovasi
              dalam sektor jasa keuangan, memperluas layanan pembiayaan melalui aplikasi
              Blicicil yang memberikan akses mudah dan cepat bagi berbagai produk
              pembiayaan dalam era digital.
            </p>
            <p className="text-gray-800 mt-4 text-left text-sm md:text-base max-w-4xl mx-auto">
              Perkembangan terus-menerus ini merupakan bagian dari upaya Mega Finance
              untuk terus memberikan layanan terbaik dan menghadirkan inovasi yang
              relevan, sejalan dengan visi perusahaan untuk menjadi perusahaan
              pembiayaan terkemuka yang memberikan layanan terbaik untuk
              meningkatkan dan mendukung kesejahteraan masyarakat.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center w-full">
          <img
            className="rounded-2xl w-full max-w-sm md:max-w-[95%]"
            src={Mega2}
            alt="Mega Finance"
          />
        </div>
      </article>


      <article className="flex flex-col md:flex-row w-full -mt-10 gap-8 text-center text-gray-500">
        <div className="w-full">
          <div className="w-full md:w-[95%]">
            <h2 className="text-orange-500 text-sm md:text-2xl font-semibold">
              SEJARAH PERUSAHAAN
            </h2>
            <span className="my-2 block h-0.5 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-400"></span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center w-full">
          <p className="text-gray-800 text-left text-sm md:text-base max-w-4xl mx-auto md:ml-8">
            Kami telah menghasilkan pelayanan berkualitas tinggi dengan penuh semangat
            sejak tahun 1995. Mega Finance terus berkembang dan berkembang dengan
            mengutamakan kepercayaan dan menciptakan pengalaman yang luar biasa.
          </p>
        </div>
      </article>


      <article className="mt-8 flex w-full flex-col gap-8 overflow-hidden xl:h-120 xl:flex-row">
        <div className="flex justify-end items-center w-full">
          <img
            className="rounded-2xl w-full"
            src={Mega3}
            alt="Mega Finance"
          />
        </div>
      </article>

      <div className="flex flex-col md:flex-row md:ml-4 md:px-20"> {/* Menyusun TimelineItem secara horizontal */}
        <TimelineItem
          hidden="none"
          year="2022"
          description="Mega Finance konsisten mempertahankan prestasinya meraih penghargaan prestisius sebagai salah satu perusahaan dalam industri pembiayaan, menegaskan komitmen dalam memberikan layanan unggul."
          isLastItem={false}
        />
        <TimelineItem
          hidden="none"
          year="2010"
          description="Para Finance berubah nama menjadi Mega Finance dengan diikuti kehadiran produk-produk pembiayaan yang lebih beragam."
          isLastItem={false}
        />
        <TimelineItem
          isLastItem={false}
          hidden="none"
          year="2000"
          description="Mengembangkan bisnis pembiayaan konsumen yang fokus kepada pembiayaan kendaraan bermotor roda dua."
        />
        <div className="hidden w-[70%] md:block">
          <TimelineItem
            hidden="hidden"
            year="1995"
            description="Para Finance didirikan, fokus pada pembiayaan leasing dan factoring."
            isLastItem={true}
          />
        </div>
        {/* Last item for small screens */}
        <div className="block md:hidden">
          <TimelineItem
            hidden="none"
            year="1995"
            description="Para Finance didirikan, fokus pada pembiayaan leasing dan factoring."
            isLastItem={false}
          />
        </div>
        {/* Tambahkan lebih banyak TimelineItem sesuai kebutuhan */}
      </div>

      <article className="my-8 w-full text-center text-gray-500 flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-orange-500 text-2xl md:text-5xl font-semibold">
            KAMI MEMILIKI VISI DAN MISI UNTUK ANDA
          </h2>
          <span className="mt-2 w-full mx-auto h-0.5 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-400"></span>
          <p className="text-gray-800 mt-8 text-sm md:text-lg md:w-[60%] mx-auto">
            Visi kami adalah menjadi perusahaan pembiayaan terkemuka yang meningkatkan kesejahteraan masyarakat dengan membangun infrastruktur teknologi inovatif, menyediakan solusi keuangan yang sesuai kebutuhan, serta mengembangkan SDM berkompetensi digital dan berintegritas tinggi.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-32 xl:flex-row items-center justify-center mt-12">
          <div className="flex flex-col min-h-[400px] text-left gap-4 rounded-2xl bg-slate-50 drop-shadow-2xl p-6 sm:p-10 xl:w-1/3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-300 font-semibold">
              Visi
            </h2>
            <span className="mt-2 block w-full h-0.5 bg-gradient-to-r from-orange-300 via-orange-100 to-orange-200"></span>
            <div className="flex gap-6">
              <div>
                <div className="w-5 h-5 border-solid border border-orange-300 rounded-full flex justify-center items-center">
                  <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                Menjadi perusahaan pembiayaan terkemuka yang memberikan layanan terbaik untuk Meningkatkan dan mendukung kesejahteraan masyarakat
              </p>
            </div>
          </div>

          <div className="flex flex-col min-h-[400px] text-left gap-4 rounded-2xl bg-slate-50 drop-shadow-2xl p-6 sm:p-10 xl:w-1/3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-orange-300">
              Misi
            </h2>
            <span className="mt-2 block w-full h-0.5 bg-gradient-to-r from-orange-300 via-orange-100 to-orange-200"></span>
            <div className="flex gap-6">
              <div>
                <div className="w-5 h-5 border-solid border border-orange-300 rounded-full flex justify-center items-center">
                  <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                Membangun infrastruktur teknologi inovatif untuk pelayanan terbaik bagi stakeholder
              </p>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="w-5 h-5 border-solid border border-orange-300 rounded-full flex justify-center items-center">
                  <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                Menyediakan berbagai layanan solusi keuangan sesuai dengan kebutuhan pelanggan dan masyarakat
              </p>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="w-5 h-5 border-solid border border-orange-300 rounded-full flex justify-center items-center">
                  <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                Menyediakan berbagai layanan solusi keuangan sesuai dengan kebutuhan pelanggan dan masyarakat
              </p>
            </div>
          </div>

        </div>
      </article>

      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-120 xl:flex-row drop-shadow-2xl">
        <div className="flex flex-col xl:flex-row justify-start gap-4 bg-orange-100 p-6 sm:p-10 xl:w-full rounded-3xl bg-gradient-to-r from-orange-500 to-orange-400 text-center">
          <div className="w-full xl:w-2/4 my-auto text-center lg:text-left">
            <h1 className="mb-4 sm:mb-8 text-2xl sm:text-4xl font-semibold text-white">
              Mega Finance Solusinya!
            </h1>
            <span className="block w-full h-0.5 bg-gradient-to-r from-gray-100 via-orange-400 to-gray-300 mb-4 sm:mb-8"></span>
            <p className="text-white text-sm sm:text-xl">
              Mega Finance merupakan salah satu perusahaan di bawah naungan CT Corp yang bergerak di sektor jasa keuangan khususnya pembiayaan. Lahir di tahun 1995 dengan nama Para Finance, mengawali bisnisnya dalam bidang pembiayaan, leasing dan factoring.
            </p>
          </div>
          <div className="flex justify-end items-center w-full xl:w-2/4 mt-4 xl:mt-0">
            <img
              className="rounded-2xl w-[full] sm:w-3/4 xl:w-[80%]"
              src={Melayani}
              alt="Mega Finance"
            />
          </div>
        </div>
      </article>


    </section>
  );
}

export default Features;
