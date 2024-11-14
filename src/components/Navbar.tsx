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
                <button
                  aria-label='home'
                  className='nav-item ml-6 group border-none bg-none cursor-pointer'>
                  home
                  <span className='hover'></span>
                </button>
                <button
                  className='nav-item group border-none bg-none cursor-pointer'
                  aria-label='shop'>
                  shop
                  <span className='hover'></span>
                </button>
                <button
                  className='nav-item group border-none bg-none cursor-pointer'
                  aria-label='about'>
                  about
                  <span className='hover'></span>
                </button>
                <button
                  className='nav-item group border-none bg-none cursor-pointer'
                  aria-label='contact'>
                  contact
                  <span className='hover'></span>
                </button>
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
              <a
                href='/home'
                aria-roledescription='button'
                aria-label='home'
                className='nav-item-mobile'>
                home
              </a>
              <a
                href='/shop'
                className='nav-item-mobile'
                aria-label='shop'
                aria-roledescription='button'>
                shop
              </a>
              <a
                href='/about'
                className='nav-item-mobile'
                aria-label='about'
                aria-roledescription='button'>
                about
              </a>
              <a
                href='/contact'
                className='nav-item-mobile'
                aria-label='contact'
                aria-roledescription='button'>
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
