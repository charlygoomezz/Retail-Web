'use client';
import { useMemo, useState } from 'react';

import { FiltersAndListCarsProps } from './FiltersAndListCars.types';
import { ListCars } from '../ListCars';
import { FiltersCars } from '../FiltersCars';

export function FiltersAndListCars({ cars }: FiltersAndListCarsProps) {
  const [filters, setFilters] = useState({
    type: '',
    transmission: '',
    engine: '',
    people: '',
  });

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (filters.type && !car.type.toLowerCase().includes(filters.type.toLowerCase())) {
        return false;
      }

      if (
        filters.transmission &&
        !car.transmission.toLowerCase().includes(filters.transmission.toLowerCase())
      ) {
        return false;
      }

      if (filters.engine && !car.engine.toLowerCase().includes(filters.engine.toLowerCase())) {
        return false;
      }

      if (filters.people && !car.people.toLowerCase().includes(filters.people.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [cars, filters]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: filterValue,
    }));
  };

  const clearFilter = () => {
    setFilters({
      type: '',
      transmission: '',
      engine: '',
      people: '',
    });
  };

  return (
    <>
      <FiltersCars setFilters={handleFilterChange} clearFilters={clearFilter} filters={filters} />
      <ListCars cars={filteredCars} />
    </>
  );
}
