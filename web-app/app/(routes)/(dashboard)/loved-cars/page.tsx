import { auth } from '@clerk/nextjs/server';
import { ListLovedCars } from './components/ListLovedCars';
import { redirect } from 'next/navigation';

export default async function pageLovedCars() {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/');
  }
  return (
    <div className="">
      <h1 className="text-2xl">Your Liked Cars</h1>
      <ListLovedCars />
    </div>
  );
}
