import { Navbar } from '@/components/Shared/Navbar';
import { FirstBlock } from './components/FirstBlock';
import { SliderBrands } from './components/SliderBrands';
import { Features } from './components/Features';
import { OurFleet } from './components/OurFleet';

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
    </div>
  );
}
