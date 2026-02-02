import { Navbar } from '@/components/Shared/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function pageOrderError() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-2-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">An error has occurred. Please try again later!</h1>
          <Link href="/">
            <Button>Back to see products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
