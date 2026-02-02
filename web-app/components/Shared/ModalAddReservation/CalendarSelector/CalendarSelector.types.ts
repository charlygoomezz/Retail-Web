import { Dispatch, SetStateAction } from 'react';

export type CalendarSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
  setDataSelected: Dispatch<SetStateAction<{ from: Date | undefined; to: Date | undefined }>>;
  carPriceDay: string;
};
