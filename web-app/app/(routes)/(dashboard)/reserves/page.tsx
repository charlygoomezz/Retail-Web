import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { TableReserves } from './components';

export default async function page() {
  const { userId } = await auth();
  if (!userId) {
    return redirect('/');
  }
  const order = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Reserves Pages</h1>
      {order.length === 0 ? (
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-xl">No reserves yet</h2>
          <p className="">Made your first order Cars page</p>
          <Link href="/dashboard">
            <Button> Car List</Button>
          </Link>
        </div>
      ) : (
        <TableReserves />
      )}
    </div>
  );
}
