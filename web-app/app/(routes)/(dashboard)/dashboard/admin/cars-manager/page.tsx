import { ButtonAddCart } from './components/ButtonAddCart';

export default function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <ButtonAddCart />
      </div>
    </div>
  );
}
