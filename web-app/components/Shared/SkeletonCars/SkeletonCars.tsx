import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCars() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-1 rounded-lg shadow-md">
          {/* Image */}
          <Skeleton className="h-50 w-full rounded-lg" />

          <div className="p-3 space-y-3">
            {/* Title + price */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>

            {/* Specs */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-x-3 pt-2">
              <Skeleton className="h-10 flex-1 rounded-md" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
