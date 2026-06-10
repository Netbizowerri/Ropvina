interface LogoProps {
  className?: string;
}

export default function RopvinaLogo({ className = '' }: LogoProps) {
  return (
    <img
      src="https://i.ibb.co/JFHCXHBd/Ropvina-6.jpg"
      alt="Ropvina Logo"
      referrerPolicy="no-referrer"
      className={`w-[240px] h-[60px] object-contain rounded-md ${className}`}
    />
  );
}
