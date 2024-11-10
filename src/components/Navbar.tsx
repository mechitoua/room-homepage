import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 left-0 z-50 w-full md:w-[58.333333%]'>
        <div className='px-6 md:px-12 py-8'>
          <div className='flex items-center'>
            <img src='/logo.svg' alt='logo' className='h-4' />
            <div className='hidden md:block ml-10'>
              <div className='flex items-baseline space-x-6 text-md font-medium font spartan text-white'>
                <a href='#' className='nav-item group'>
                  home
                  <span className='hover'></span>
                </a>
                <a href='#' className='nav-item group'>
                  shop
                  <span className='hover'></span>
                </a>
                <a href='#' className='nav-item group'>
                  about
                  <span className='hover'></span>
                </a>
                <a href='#' className='nav-item group'>
                  contact
                  <span className='hover'></span>
                </a>
              </div>
            </div>
            <button
              className='md:hidden ml-auto text-white'
              onClick={() => setIsOpen(true)}>
              <Menu className='h-6 w-6' />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          <div className='flex items-center justify-between px-8 py-10 bg-white'>
            <button onClick={() => setIsOpen(false)}>
              <X className='h-6 w-6' />
            </button>
            <div className='flex space-x-8'>
              <a href='#' className='nav-item-mobile group'>
                home
                <span className='hover-mobile'></span>
              </a>
              <a href='#' className='nav-item-mobile group'>
                shop
                <span className='hover-mobile'></span>
              </a>
              <a href='#' className='nav-item-mobile group'>
                about
                <span className='hover-mobile'></span>
              </a>
              <a href='#' className='nav-item-mobile group'>
                contact
                <span className='hover-mobile'></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
