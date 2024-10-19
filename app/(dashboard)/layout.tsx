import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ReactNode } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='drawer lg:drawer-open  bg-base-200'>
      {/* toggle */}
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col  '>
        {/* Page content here */}

        <div className='bg-base-200 px-8 min-h-screen flex flex-col'>
          <label
            htmlFor='my-drawer-2'
            className='py-2   ml-auto btn-primary drawer-button lg:hidden'>
            <FaBarsStaggered className='w-8 h-8 text-primary' />
          </label>
          {children}
        </div>
      </div>

      {/* sidebar */}
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <Sidebar />
      </div>
    </div>
  );
};
export default DashboardLayout;
