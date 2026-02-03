import { formatPrice } from '@/lib/formatPrice';
import { TableReservesProps } from './TableReserves.types';
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

export function TableReserves({ orders }: TableReservesProps) {
  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Car</TableHead>
          <TableHead>Date start</TableHead>
          <TableHead>Date end</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map(order => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.carName}</TableCell>
            <TableCell>{new Date(order.orderDate).toLocaleDateString('en-US')}</TableCell>
            <TableCell>{new Date(order.orderEndDate).toLocaleDateString('en-US')}</TableCell>
            <TableCell>
              <div className="p-2 text-white bg-green-600 rounded-lg w-fit">{order.status}</div>
            </TableCell>
            <TableCell>{formatPrice(+order.totalAmount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell>{formatPrice(totalAmount)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
