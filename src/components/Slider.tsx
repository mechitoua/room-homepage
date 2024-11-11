import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    image: '/desktop-image-hero-1.jpg',
    title: 'Discover innovative ways to decorate',
    description:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    image: '/desktop-image-hero-2.jpg',
    title: 'We are available all across the globe',
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: '/desktop-image-hero-3.jpg',
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

const Slider: FC = () => {
  return (
    <div className='h-screen md:h-[70vh] relative'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
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
      <div className='hidden md:flex absolute bottom-0 md:left-auto md:right-[41.666667%] z-10'>
        <button className='swiper-button-prev w-24 h-24 bg-black hover:bg-very-dark-gray transition-colors !static flex items-center justify-center'></button>
        <button className='swiper-button-next w-24 h-24 bg-black hover:bg-very-dark-gray transition-colors !static flex items-center justify-center'></button>
      </div>
    </div>
  );
};

export default Slider;
