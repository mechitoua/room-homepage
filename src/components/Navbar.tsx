import { Menu, X } from 'lucide-react';
import { FC, useState } from 'react';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 left-0 z-50 w-full md:w-[58.333333%]'>
        <div className='px-8 py-8 md:px-12 md:py-8'>
          <div className='flex items-center justify-between md:justify-start'>
            <div className='flex-1 md:flex-none'>
              <button
                className='md:hidden text-white'
                onClick={() => setIsOpen(true)}>
                <Menu className='h-6 w-6' />
              </button>
            </div>
            <img src='/logo.svg' alt='logo' className='h-4' />
            <div className='flex-1 md:flex-none'></div>
            <div className='hidden md:block ml-10'>
              <div className='flex items-baseline space-x-10 text-white text-md'>
                <a href='#' className='nav-item ml-6 group'>
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
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          <div className='flex items-center justify-between px-8 py-8 bg-white'>
            <button
              onClick={() => setIsOpen(false)}
              className='text-very-dark-gray'>
              <X className='h-6 w-6' />
            </button>
            <div className='flex space-x-8 font-bold'>
              <a href='#' className='nav-item-mobile'>
                home
              </a>
              <a href='#' className='nav-item-mobile'>
                shop
              </a>
              <a href='#' className='nav-item-mobile'>
                about
              </a>
              <a href='#' className='nav-item-mobile'>
                contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
