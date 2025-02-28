import StoreLink from "../common/StoreLink";

interface StoreLinksProps {
  type: BtnTypes;
  bgColor?: string; // Warna latar belakang
  textColor?: string; // Warna teks
  className?: String;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ bgColor = "bg-orange-400", textColor = "text-white", className }: StoreLinksProps) {
  return (
    <div className="flex space-x-2 justify-center md:justify-start">
      <StoreLink
        href="#pengajuan" // Ganti dengan URL atau aksi yang sesuai
        text="Ajukan Sekarang"
        className={`flex items-center font-sans justify-center rounded-full ${bgColor} ${className} px-8 py-5 md:px-4 md:py-3 ${textColor} active:bg-orange-700 transition duration-300 ease-in-out hover:opacity-90`}
      />
    </div>
  );
}

export default StoreLinks;
