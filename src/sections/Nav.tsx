import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Perbaikan import untuk heroicons
import Megalogo from "../assets/logos/megalogo.png";
import ButtonLink from "../common/ButtonLink";
import Whatsapp from "../assets/icons/whatsapp.svg";

function Nav() {
  const textLinkClasses = "text-gray-600 hover:text-gray-900 active:text-gray-400 text-xl";

  const navLinks = [
    { href: "#About Us", children: "About us" },
    { href: "#layanan", children: "Layanan" },
    { href: "#promo", children: "Pengajuan" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="" style={{ zIndex: 99 }}>
            <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto">
              <div className="flex items-center">
                <ButtonLink
                  href="#"
                  children={<img src={Megalogo} alt="mega logo" style={{ width: '100px', height: 'auto' }} />}
                />
              </div>
              <div className="hidden sm:flex items-center space-x-4 lg:space-x-16">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  />
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <ButtonLink
                  href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda"
                  target="_blank"
                  className="hidden sm:flex items-center rounded-xl bg-gray-600 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 bg-gradient-to-r from-orange-500 to-orange-400 transition duration-300 ease-in-out hover:opacity-90"
                >
                  <img src={Whatsapp} alt="WhatsApp" className="mr-2 w-6 h-6" />
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
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                className="block"
                as="a"
                href={link.href}
                key={index}
              >
                {link.children}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
