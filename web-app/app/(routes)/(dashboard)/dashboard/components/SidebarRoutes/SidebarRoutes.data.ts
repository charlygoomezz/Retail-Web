import { BookAudio, Calendar, CalendarCheck, Car, Heart, SquareKanban } from 'lucide-react';

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: 'Cars',
    href: '/dashboard',
  },
  {
    icon: CalendarCheck,
    label: 'Reserves',
    href: '/reserves',
  },
  {
    icon: Heart,
    label: 'Loved Cars',
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
    icon: BookAudio,
    label: 'All Reserves',
    href: 'dashboard/admin/reserves-admin',
  },
];
