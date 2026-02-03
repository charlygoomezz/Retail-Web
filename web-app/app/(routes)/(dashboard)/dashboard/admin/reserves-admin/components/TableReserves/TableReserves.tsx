import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TableReservesProps } from './TableReserves.types';
import { formatPrice } from '@/lib/formatPrice';

export function TableReserves({ orders }: TableReservesProps) {
  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order date</TableHead>
          <TableHead>Customer ID</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>Date Start</TableHead>
          <TableHead>Date End</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map(order => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">
              {new Date(order.createdAt).toLocaleDateString('en-US')}
            </TableCell>
            <TableCell className="font-medium max-w-25 truncate">{order.userId}</TableCell>
            <TableCell className="font-medium truncate">{order.carName}</TableCell>
            <TableCell className="font-medium">
              {new Date(order.orderDate).toLocaleDateString('en-US')}
            </TableCell>
            <TableCell className="font-medium">
              {new Date(order.orderEndDate).toLocaleDateString('en-US')}
            </TableCell>
            <TableCell>{formatPrice(+order.totalAmount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell>{formatPrice(totalAmount)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
