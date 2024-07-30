// StoreLinks.tsx
import StoreLink from "../common/StoreLink";

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ }: StoreLinksProps) {
  return (
    <div className="mt-10 flex space-x-2 justify-center md:justify-start">
      <StoreLink
        href="#ajukan-sekarang" // Ganti dengan URL atau aksi yang sesuai
        text="Ajukan Sekarang"
        className="flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 text-whiteactive:bg-orange-700 transition duration-300 ease-in-out hover:opacity-90"
      />
    </div>
  );
}

export default StoreLinks;
