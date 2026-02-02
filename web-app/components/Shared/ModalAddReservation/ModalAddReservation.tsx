import { ModalAddReservationProps } from './ModalAddReservation.types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Car } from '@prisma/client';
import { CalendarSelector } from './CalendarSelector';
import { useState } from 'react';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import axios from 'axios';
import { toast } from 'sonner';

export function ModalAddReservation({ car }: ModalAddReservationProps) {
  const [dataSelected, setDataSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post('/api/checkout', {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });

    window.location = response.data.url;
    toast.success('Car reserved');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="mt-3 w-full">
          Reserve car
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select the dates when you want to rent the car</AlertDialogTitle>
        </AlertDialogHeader>
        <div>
          <CalendarSelector setDataSelected={setDataSelected} carPriceDay={car.priceDay} />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dataSelected)}>Reserve</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
