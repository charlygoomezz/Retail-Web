import { Calendar, CalendarCheck, Car, Heart, SquareKanban } from 'lucide-react';

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: 'Cars',
    href: '/dashboard',
  },
  {
    icon: Calendar,
    label: 'Calendar',
    href: '/calendar',
  },
  {
    icon: Heart,
    label: 'Favourites',
    href: '/loved-cars',
  },
];
export const dataAdminSidebar = [
  {
    icon: SquareKanban,
    label: 'Manage',
    href: 'dashboard/admin/cars-manager',
  },
  {
    icon: CalendarCheck,
    label: 'Reserves',
    href: '/reserves',
  },
];
