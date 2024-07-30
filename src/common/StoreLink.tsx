// StoreLink.tsx

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
        <p className="text-white text-lg font-medium">{text}</p>
      </div>
    </a>
  );
}

export default StoreLink;
