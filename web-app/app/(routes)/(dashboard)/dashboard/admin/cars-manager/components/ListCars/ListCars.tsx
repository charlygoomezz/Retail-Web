import React from 'react';
import { ListCarsProps } from './ListCars.types';
import { CardCar } from './CardCar';

export function ListCars({ cars }: ListCarsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-4">
      {cars.map(car => (
        <CardCar key={car.id} car={car} />
      ))}
    </div>
  );
}
