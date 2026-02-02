'use client';
import { ListCarsProps } from './ListCars.types';
import { Car } from '@prisma/client';
import Image from 'next/image';
import { Fuel, Gem, Heart, Users, Wrench } from 'lucide-react';
import { ModalAddReservation } from '@/components/Shared/ModalAddReservation';

export function ListCars({ cars }: ListCarsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {cars.map((car: Car) => {
        const { priceDay, photo, engine, id, people, name, transmission, type } = car;
        return (
          <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
            <Image src={photo} alt={name} width={400} height={60} className="rounded-lg" />
            <div className="p-3">
              <div className="flex flex-col mb-3 gap-x-4">
                <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                <p className="">{priceDay}$ /day</p>
              </div>
              <p className="">
                <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                {type}
              </p>
              <p className="">
                <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                {transmission}
              </p>
              <p className="">
                <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                {people}
              </p>
              <p className="">
                <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                {engine}
              </p>
              <div className="flex items-center gap-x-3 w-full">
                <div className="flex-1">
                  <ModalAddReservation car={car} />
                </div>

                <Heart className="mt-2 cursor-pointer" onClick={() => console.log('heart')} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
