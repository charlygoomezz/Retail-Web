'use client';
import { CalendarSelectorProps } from './CalendarSelector.types';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

export function CalendarSelector({ setDataSelected, className, carPriceDay }: CalendarSelectorProps) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!date?.from || !date?.to) {
      setError('You must select a date range');
      return;
    }

    const fromDate = new Date(date.from.getFullYear(), date.from.getMonth(), date.from.getDate());
    const toDate = new Date(date.to.getFullYear(), date.to.getMonth(), date.to.getDate());

    if (fromDate.getTime() === toDate.getTime()) {
      setError('You must select at least 2 different days.');
      return;
    }

    setError('');
    setDataSelected({
      from: date.from,
      to: date.to,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const calculateDaysBetween = (from: Date, to: Date): number => {
    // Standardize dates to midnight to avoid time zone issues
    const fromDate = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const toDate = new Date(to.getFullYear(), to.getMonth(), to.getDate());

    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = toDate.getTime() - fromDate.getTime();
    const days = Math.ceil(diffInTime / oneDay);

    return Math.max(days, 1);
  };
  const daysBetween = date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <>
      <div className={cn('grid gap-2', className)}>
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        {date?.from && date?.to && !error && (
          <>
            <p className="mt-4 text-lg text-black">Total days {daysBetween}</p>
            <p className="mb-4 text-md">Total price {daysBetween * +carPriceDay}$ (Included taxes)</p>
          </>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn('justify-start text-left font-normal', !date && 'text-muted-foreground')}
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} - {''}
                    {format(date.to, 'LLL dd, y')} - {''}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
