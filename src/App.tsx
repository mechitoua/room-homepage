import AboutSection from '@components/AboutSection';
import Navbar from '@components/Navbar';
import Slider from '@components/Slider';

function App() {
  return (
    <div className='h-full'>
      <Navbar />
      <Slider />
      <AboutSection />
    </div>
  );
}

export default App;
