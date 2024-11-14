import AboutSection from '@components/AboutSection';
import Navbar from '@components/Navbar';
import Slider from '@components/Slider';

function App() {
  return (
    <main>
      <div className='h-full'>
        <Navbar />
        <Slider />
        <AboutSection />
      </div>
    </main>
  );
}

export default App;
