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
export function ModalAddReservation({ car }: ModalAddReservationProps) {
  const onReserveCar = async (car: Car, dateSelected: DateRange) => {};
  const [dataSelected, setDataSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3">
          Reserve car
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select the dates when you want to rent the car</AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector setDataSelected={setDataSelected} carPriceDay={car.priceDay} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dataSelected)}>Reserve</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
