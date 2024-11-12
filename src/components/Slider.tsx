import { slides } from '@/data';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider: FC = () => {
  return (
    <div className='h-screen md:h-[70vh] relative'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: false }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className='h-full'>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col md:grid md:grid-cols-12 h-full'>
              <div className='h-[60vh] md:h-auto md:col-span-7 relative'>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className='absolute inset-0 w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/10' />
                <div className='absolute bottom-0 right-0 z-10 flex md:hidden'>
                  <button className='swiper-button-prev w-16 h-16 bg-black hover:bg-very-dark-gray transition-colors !static flex items-center justify-center'></button>
                  <button className='swiper-button-next w-16 h-16 bg-black hover:bg-very-dark-gray transition-colors !static flex items-center justify-center'></button>
                </div>
              </div>
              <div className='flex-1 md:col-span-5 flex items-center px-8 py-8 md:px-16 md:py-12 bg-white'>
                <div className='max-w-xl'>
                  <h2 className='text-5xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight font-spartan'>
                    {slide.title}
                  </h2>
                  <p className='text-dark-gray mb-8 md:mb-12 leading-snug text-[1.05rem]'>
                    {slide.description}
                  </p>
                  <button className='group inline-flex items-center space-x-8 text-very-dark-gray'>
                    <span className='text-lg tracking-[0.8em]'>SHOP NOW</span>
                    <img
                      src='/icon-arrow.svg'
                      className='group-hover:translate-x-2 transition-transform h-4'
                      alt=''
                    />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='hidden left-[58.3333%] bottom-10 right-auto md:flex absolute md:bottom-0 md:left-[58.3333%] md:right-auto z-10'>
        <button className='swiper-button-prev w-24 h-24 bg-black hover:bg-very-dark-gray transition-colors !static flex items-center justify-center'></button>
        <button className='swiper-button-next w-24 h-24 bg-black hover:bg-very-dark-gray transition-colors !static flex items-center justify-center'></button>
      </div>
    </div>
  );
};

export default Slider;
