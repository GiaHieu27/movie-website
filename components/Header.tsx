import React from 'react';
import Image from 'next/image';
import { SearchIcon, BellIcon } from '@heroicons/react/solid';

import Logo from '../public/logo.png';
import KidLogo from '../public/kid-logo.png';
import Link from 'next/link';

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && 'bg-red-500'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="logo"
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Show</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <Image src={KidLogo} alt="kid-logo" className="rounded h-6 w-6" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
