/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function RopvinaLogo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <img
      src="https://i.ibb.co/JFHCXHBd/Ropvina-6.jpg"
      alt="Ropvina Logo"
      referrerPolicy="no-referrer"
      className={`w-[240px] h-[60px] object-contain rounded-md ${className}`}
    />
  );
}
