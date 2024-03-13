import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/components/layouts/default-layout';
import { Lesson } from '@/routers/PageLazy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/lesson',
        element: <Lesson />,
      },
    ],
  },
]);
