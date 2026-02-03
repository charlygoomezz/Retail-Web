import { Navbar } from '@/components/Shared/Navbar';
import { FirstBlock } from './components/FirstBlock';
import { SliderBrands } from './components/SliderBrands';
import { Features } from './components/Features';

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
    </div>
  );
}
