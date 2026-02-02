'use client';
import { ButtonEditCarProps } from './ButtonEditCar.types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { FormEditCar } from '../FormEditCar';

export function ButtonEditCar({ carData }: ButtonEditCarProps) {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full" onClick={() => setOpenDialog(true)}>
          Edit
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Car</DialogTitle>
          <DialogDescription>Update the car information</DialogDescription>
        </DialogHeader>
        <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
      </DialogContent>
    </Dialog>
  );
}
