'use client';
import { Button } from '@/components/ui/button';
import { useLovedCars } from '@/hooks/use-loved-cars';
import { Fuel, Gem, Users, Wrench, Heart, Gauge } from 'lucide-react';
import Image from 'next/image';
import { Car } from '@prisma/client';
import Link from 'next/link';
import { ModalAddReservation } from '@/components/Shared/ModalAddReservation';
import { ListCarsProps } from './ListCars.types';
import { useAuth } from '@clerk/nextjs';
import { SkeletonCars } from '@/components/Shared/SkeletonCars';

export function ListCars({ cars }: ListCarsProps) {
  const { userId } = useAuth();
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  if (!cars) {
    return <SkeletonCars />;
  }

  return (
    <>
      {cars.length === 0 && <p>No cars founded with this filters</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 lg:grid-cols-4">
        {cars.map((car: Car) => {
          const { priceDay, photo, name, type, cv, transmission, people, engine, id } = car;
          const likedCar = lovedItems.some(item => item.id === car.id);

          return (
            <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
              <Image src={photo} alt="" width={400} height={0} className="rounded-lg" />
              <div className="p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                  <p>{priceDay}</p>
                </div>
                <p className="flex items-center">
                  <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                  {type}
                </p>
                <p className="flex items-center">
                  <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                  {transmission}
                </p>
                <p className="flex items-center">
                  <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                  {people}
                </p>
                <p className="flex items-center">
                  <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                  {engine}
                </p>
                <p className="flex items-center">
                  <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                  {cv}
                </p>

                {userId ? (
                  <div className="flex items-center gap-x-3 w-full">
                    <div className="flex-1">
                      <ModalAddReservation car={car} />
                    </div>
                    <Heart
                      className={`mt-2 cursor-pointer ${likedCar && 'fill-black'}`}
                      onClick={likedCar ? () => removeLovedItem(car.id) : () => addLoveItem(car)}
                    />
                  </div>
                ) : (
                  <div className="w-full mt-2 text-center">
                    <Link href="/sign-in">
                      <Button variant="outline" className="w-full">
                        Sign In to reserve it
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
