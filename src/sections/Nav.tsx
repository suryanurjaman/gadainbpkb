import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Perbaikan import untuk heroicons
import Megalogo from "../assets/logos/LOGO.jpg";
import ButtonLink from "../common/ButtonLink";
import Whatsapp from "../assets/icons/whatsapp.svg";

function Nav() {
  const textLinkClasses = "font-sans text-gray-600 hover:text-gray-900 active:text-gray-400 text-md";

  const navLinks = [
    { href: "#Home", children: "Home" },
    { href: "#About Us", children: "About us" },
    { href: "#layanan", children: "Layanan" },
    { href: "#pengajuan", children: "Pengajuan" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="" style={{ zIndex: 99 }}>
            <div className="flex h-[12vh] md:max-w-[100%] items-center justify-between px-8 lg:px-36 xl:m-auto">
              <div className="flex md:gap-24 items-center justify-center">
                <div className="flex items-center">
                  <ButtonLink
                    href="#"
                    children={<img src={Megalogo} alt="mega logo" style={{ width: '120px', height: 'auto' }} />}
                  />
                  {/* <div>
                    <h1 className="font-sans font-bold text-2xl text-slate-700">Gadain</h1>
                    <h1 className="font-sans font-bold text-2xl text-slat-700">BPKB.org</h1>
                  </div> */}
                </div>
                <div className="hidden md:flex space-x-4 lg:space-x-12">
                  {navLinks.map((link, index) => (
                    <ButtonLink
                      key={index}
                      href={link.href}
                      children={link.children}
                      className={textLinkClasses}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <ButtonLink
                  href="https://wa.me/62895326339675?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
                  target="_blank"
                  className="hidden font-sans text-sm md:flex md:items-center md:justify-center rounded-full bg-orange-400 px-4 py-3 text-white hover:bg-orange-600 active:bg-orange-600 transition duration-300 ease-in-out hover:opacity-90"
                >
                  <img src={Whatsapp} alt="WhatsApp" className=" flex items-center justify-center md:mr-2 w-5 h-5" />
                  Hubungi Kami
                </ButtonLink>
                <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className=" shadow-lg rounded-xl text-center flex flex-col gap-6 mx-4 p-4 font-sans px-auto sm:hidden">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                className="block h-8 font-semibold"
                as="a"
                href={link.href}
                key={index}
              >
                {link.children}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
          <a
            href="https://wa.me/62895326339675?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
            target="_blank"
            className="fixed z-50 bottom-4 right-4 md:hidden flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
            aria-label="Chat on WhatsApp"
          >
            <img src={Whatsapp} alt="WhatsApp" className="w-8 h-8" />
          </a>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
