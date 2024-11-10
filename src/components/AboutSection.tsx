export default function AboutSection() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-12'>
      <div className='h-64 md:h-auto md:col-span-3'>
        <img
          src='/image-about-dark.jpg'
          alt='Dark furniture'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='px-6 py-8 md:col-span-6 md:px-16 md:py-12 flex flex-col justify-center'>
        <h2 className='text-sm tracking-[0.5em] font-bold mb-4 font-spartan text-very-dark-gray'>
          ABOUT OUR FURNITURE
        </h2>
        <p className='text-dark-gray leading-relaxed font-spartan font-medium'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className='h-64 md:h-auto md:col-span-3'>
        <img
          src='image-about-light.jpg'
          alt='Light chair'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}
