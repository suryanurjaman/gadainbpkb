import Megalogo from "../assets/logos/mega.png";
import Gadai from "../assets/Hero/LOGO.png";
import Facebook from "../assets/logos/icons8-facebook.svg";


function Footer() {
  return (
    <section className="bg-gray-800">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div>
            <img
              className="mb-4 w-36"
              src={Gadai}
              alt="Light version of Kobodrop logo"
            />
            <p>Jl. Wijaya I. No. 19 Kebayoran Baru, Jakarta Selatan</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Product</p>
              <a href="home">Overview</a>
              <a href="#About Us">About Us</a>
              <a href="#layanan">Layanan</a>
              <a href="#pengajuan">Pengajuan</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Resources</p>
              <a href="https://wa.me/+62895326339675" target="_blank">Contact WhatsApp</a>
              <a href="mailto:<alamat_email>" target="_blank">Email</a>
            </div>
          </div>
          <div className="w-fit">
            <img
              className="mb-4 w-36"
              src={Megalogo}
              alt="Light version of Kobodrop logo"
            />
          </div>
        </div>
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
          <p className="w-[16ch] text-gray-400 md:w-full">
            &copy; copyright
          </p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com" target="_blank">
              <img src={Facebook} alt="Facebook logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
