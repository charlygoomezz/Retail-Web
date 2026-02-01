import React from 'react';
import { CardCarProps } from './CardCar.types';

export function CardCar({ car }: CardCarProps) {
  return <div>{car.name}</div>;
}
