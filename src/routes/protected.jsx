import { Outlet } from 'react-router-dom';
import { AppLayout } from '../components/layout';

export const Protected = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
