'use client';
import { Car } from '@prisma/client';
import { useState, useEffect } from 'react';

import { FiltersAndListCarsProps } from './FiltersAndListCars.types';
import { ListCars } from '../ListCars';

export function FiltersAndListCars({ cars }: FiltersAndListCarsProps) {
  return (
    <>
      <ListCars cars={cars} />
    </>
  );
}
