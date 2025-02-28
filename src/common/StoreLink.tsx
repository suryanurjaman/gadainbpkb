interface ButtonLinkProps {
  href: string;
  className?: string;
  target?: string;
  text: string;
}

function StoreLink({
  href,
  className,
  target,
  text,
}: ButtonLinkProps) {
  return (
    <a href={href} className={className} target={target} rel="noopener noreferrer">
      <div className="flex items-center justify-center">
        {/* Hapus kelas text-white dari sini */}
        <p className="text-md md:text-sm font-sans ">{text}</p>
      </div>
    </a>
  );
}

export default StoreLink;
