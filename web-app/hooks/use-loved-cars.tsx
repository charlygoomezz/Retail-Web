import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from 'sonner';
import { Car } from '@prisma/client';

interface UseLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(item => item.id === data.id);

        if (existingItem) {
          return toast.error('The car exist in list');
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast.success('Car added to the list succesfully!');
      },
      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter(item => item.id !== id)],
        });
        toast.success('Car deleted from the list');
      },
    }),
    {
      name: 'loved-products-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
