import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FiltersCarsProps } from './FiltersCars.types';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

export function FiltersCars({ clearFilters, setFilters, filters }: FiltersCarsProps) {
  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  return (
    <div className="mt-5 mb-8 gap-2 space-y-2 flex flex-col md:flex-row md:space-y-8 md:gap-5">
      <Select value={filters.type} onValueChange={value => handleFilter('type', value)}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Car type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Vehicles</SelectLabel>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="luxe">Luxury</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        value={filters.transmission}
        onValueChange={value => handleFilter('transmission', value)}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Transmission" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Gear shift</SelectLabel>
            <SelectItem value="automatic">Automatic</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={filters.engine} onValueChange={value => handleFilter('engine', value)}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Engine" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Motor</SelectLabel>
            <SelectItem value="gas">Gas</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
            <SelectItem value="electirc">Electric</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={filters.people} onValueChange={value => handleFilter('people', value)}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="People" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Number of people</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remove filters <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
}
