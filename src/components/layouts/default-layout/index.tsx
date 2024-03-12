import SideBar from '@/components/elements/side-bar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="w-full h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
