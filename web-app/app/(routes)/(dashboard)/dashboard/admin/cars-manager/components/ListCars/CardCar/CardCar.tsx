'use client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from 'lucide-react';
import { CardCarProps } from './CardCar.types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ButtonEditCar } from './ButtonEditCar';
import axios from 'axios';

export function CardCar({ car }: CardCarProps) {
  const router = useRouter();

  const deleteCar = async () => {
    try {
      axios.delete(`/api/car/${car.id}`);
      toast.success('Car deleted succesfully');
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error('Somenting went wrong');
    }
  };

  const handlerPublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });
      if (publish) {
        toast.success('Car Published');
      } else {
        toast.success('Car Unpublished');
      }
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error('Somenthing went wrong');
    }
  };

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
      <Image src={car.photo} alt="Car Image" width={400} height={0} className="rounded-lg" />
      {car.isPublish ? (
        <p
          className="absolute top-0 right-0 w-full p-1 text-center
         text-white bg-green-700 rounded-t-lg"
        >
          Published
        </p>
      ) : (
        <p
          className="absolute top-0 right-0 w-full p-1 text-center
         text-white bg-red-300 rounded-t-lg"
        >
          Not published
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg_min-h-fit">{car.name}</p>
          <p>{car.priceDay}$ /day</p>

          <div className="grid md:grid-cols-2 gap-x-4">
            <p className="flex items-center">
              <Gem className="h-4 w-4 mr-2" />
              {car.type}
            </p>
            <p className="flex items-center">
              <Wrench className="h-4 w-4 mr-2" />
              {car.transmission}
            </p>
            <p className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              {car.people}
            </p>
            <p className="flex items-center">
              <Fuel className="h-4 w-4 mr-2" />
              {car.engine}
            </p>
            <p className="flex items-center">
              <Gauge className="h-4 w-4 mr-2" />
              {car.cv}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={deleteCar} className="w-full">
              Delete
              <Trash className="w-4 h-4 ml-2" />
            </Button>
            <ButtonEditCar carData={car} />
          </div>
        </div>
        {car.isPublish ? (
          <Button className="w-full mt-3" variant="outline" onClick={() => handlerPublishCar(false)}>
            Unpublish
          </Button>
        ) : (
          <Button className="w-full mt-3" onClick={() => handlerPublishCar(true)}>
            Publish
            <Upload className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
