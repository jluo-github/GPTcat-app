import ThemeToggle from "./ThemeToggle";

import { BiSolidCat } from "react-icons/bi";
const SidebarHeader = () => {
  return (
    <div className='flex items-center mb-4 gap-4 px-4'>
      <BiSolidCat className='w-10 h-10 text-primary' />
      <h2 className='text-xl font-extrabold text-primary mr-auto'>GPTcat</h2> 
      <ThemeToggle />
    </div>
  );
};
export default SidebarHeader;
